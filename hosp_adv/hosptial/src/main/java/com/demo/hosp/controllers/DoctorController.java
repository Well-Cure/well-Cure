package com.demo.hosp.controllers;

import java.util.Collections;
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

import com.demo.hosp.dao.DoctorDao;
import com.demo.hosp.pojo.Doctor;
import com.demo.hosp.pojo.Patient;
import com.demo.hosp.pojo.Response;




@CrossOrigin
@RestController
@RequestMapping("/doctors")
public class DoctorController {

	@Autowired
	private DoctorDao docDao;

	@GetMapping
	public Response<?> get() {
		List<Doctor> list = docDao.findAll();
		return Response.success(list);
	}

	@GetMapping("/{DocId}")
	public Response<?> getdoc(@PathVariable("DocId") int DocId) {
		Optional<Doctor> m = docDao.findById(DocId);
		return Response.success(m);
	}

	@PostMapping
	public Response<?> savedoc(@RequestBody Doctor doc) {
		Doctor count = docDao.save(doc);
		Map<String, Doctor> map = Collections.singletonMap("rowAffected", count);
		return Response.success(map);
	}

	@DeleteMapping("/{DocId}")
	public Response<?> deletedoc(@PathVariable int DocId) {
		Doctor count = docDao.deleteById(DocId);
		Map<String, Doctor> map = Collections.singletonMap("rowAffected", count);
		return Response.success(map);

	}

	@PutMapping("/{DocId}")
	public Response<?> updatedoc(@PathVariable int DocId, @RequestBody Doctor updatedoc) {
		if (docDao.existsById(DocId)) {
			updatedoc.setDocId(DocId);
			return Response.success(docDao.save(updatedoc));
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











/*
 * @RestController
 * 
 * @RequestMapping("/doctors") public class DoctorController {
 * 
 * @Autowired private DoctorDao doctorRepository ;
 * 
 * @GetMapping public List<Doctor> getAlldoc() { return
 * doctorRepository.findAll(); }
 * 
 * @GetMapping("/{DocId}") public Optional<Doctor> getdocById(@PathVariable int
 * DocId) { return doctorRepository.findById(DocId); }
 * 
 * @PostMapping public Doctor createdoc(@RequestBody Doctor doc) { return
 * doctorRepository.save(doc); }
 * 
 * @PutMapping("/{DocId}") public Doctor updatedoc(@PathVariable int
 * DocId, @RequestBody Doctor updatedoc ) { if
 * (doctorRepository.existsById(DocId)) { updatedoc.setUSRId(DocId); return
 * doctorRepository.save(updatedoc); } return null; // Handle not found scenario
 * }
 * 
 * @DeleteMapping("/{DocId}") public Doctor deletedoc(@PathVariable int DocId) {
 * doctorRepository.deleteById(DocId); return null;
 * 
 * } }
 */
