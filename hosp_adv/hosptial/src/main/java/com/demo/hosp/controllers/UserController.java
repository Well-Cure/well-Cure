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

import com.demo.hosp.dao.AdminDao;
import com.demo.hosp.dao.UserDao;
import com.demo.hosp.pojo.Admin;
import com.demo.hosp.pojo.Response;
import com.demo.hosp.pojo.User;



@CrossOrigin
@RestController
@RequestMapping("/users")
public class UserController {
	
	@Autowired
	private UserDao userDao;
	
	@GetMapping
	public Response <?> getUser() {
		List<User> list = userDao.findAll();
		return Response.success(list);			
	}

	@GetMapping("/{USRId}")
	public Response<?> getAdmin(@PathVariable("USRId") int USRId) {
		Optional<User>  m = userDao.findById(USRId);
		return Response.success(m);
	}
	
	@PostMapping
	public Response<?> saveAdmin(@RequestBody User u) {
		User count = userDao.save(u);
		Map<String, User> map = Collections.singletonMap("rowAffected", count);
		return Response.success(map);		
	}
	

	 @DeleteMapping("/{USRId}")
	    public Response<?> deleteUser(@PathVariable int USRId) {
	    	User count = userDao.deleteById(USRId);
	    	Map<String, User> map = Collections.singletonMap("rowAffected", count);
	        return Response.success(map);
	        
	    }
	

	 @PutMapping("/{USRId}")
	    public Response<?> updateUser(@PathVariable int USRId, @RequestBody User updateuser) {
	        if (userDao.existsById(USRId)) {
	            updateuser.setUSRId(USRId);
	            return Response.success(userDao.save(updateuser));
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



//	
//	 @Autowired
//	    private UserDao userRepository;
//
//	    @GetMapping
//	    public List<User> getAllUsers() {
//	        return userRepository.findAll();
//	    }
//	    @GetMapping("/{USRId}")
//	    public Optional<User> getUserById(@PathVariable int USRId) {
//	        return userRepository.findById(USRId);
//	    }
//
//	    @PostMapping
//	    public User createUser(@RequestBody User user) {
//	        return userRepository.save(user);
//	    }
//
//	    @PutMapping("/{USRId}")
//	    public User updateUser(@PathVariable int USRId, @RequestBody User updatedUser) {
//	        if (userRepository.existsById(USRId)) {
//	            updatedUser.setUSRId(USRId);
//	            return userRepository.save(updatedUser);
//	        }
//	        return null; // Handle not found scenario
//	    }
//
//	    @DeleteMapping("/{USRId}")
//	    public User deleteUser(@PathVariable int USRId) {
//	        userRepository.deleteById(USRId);
//	        return null;
//	        
//	    }
//	
//  
//}

