package com.demo.hosp.controllers;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.hosp.dao.AdminDao;
import com.demo.hosp.pojo.Admin;
import com.demo.hosp.pojo.Patient;
import com.demo.hosp.pojo.Response;




@CrossOrigin
@RestController
@RequestMapping("/admin")
public class AdminController  {
	@Autowired
	private AdminDao adminDao;
	
	@GetMapping
	public Response<?> getAdmin() {
		List<Admin> list = adminDao.findAll();
		return Response.success(list);			
	}

	@GetMapping("/{AdmnId}")
	public Response<?> getAdmin(@PathVariable("AdmnId") int AdmnId) {
		Optional<Admin>  m = adminDao.findById(AdmnId);
		return Response.success(m);
	}
	
	@PostMapping
	public Response<?> saveAdmin(@RequestBody Admin m) {
		Admin count = adminDao.save(m);
		Map<String, Admin> map = Collections.singletonMap("rowAffected", count);
		return Response.success(map);		
	}
	

	 @DeleteMapping("/{AdmnId}")
	    public Response<?> deleteAdmin(@PathVariable int AdmnId) {
	    	Admin count = adminDao.deleteById(AdmnId);
	    	Map<String, Admin> map = Collections.singletonMap("rowAffected", count);
	        return Response.success(map);
	        
	    }
	

	 @PutMapping("/{AdmnId}")
	    public Response<?> updateadmin(@PathVariable int AdmnId, @RequestBody Admin updatedadmin) {
	        if (adminDao.existsById(AdmnId)) {
	            updatedadmin.setAdmnId(AdmnId);
	            return Response.success(adminDao.save(updatedadmin));
	        }
	        return null; // Handle not found scenario
	    }

	// any exception generated in any req handler method of this controller
	// will be handled by this @ExceptionHandler.
	@ExceptionHandler(Throwable.class)
	public Response<?> handleException(Exception e) {
		return Response.error(e.getMessage());
	}	
}




