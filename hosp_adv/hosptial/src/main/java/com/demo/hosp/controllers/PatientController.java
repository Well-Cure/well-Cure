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

import com.demo.hosp.dao.PatientDao;
import com.demo.hosp.dao.UserDao;
import com.demo.hosp.pojo.Patient;
import com.demo.hosp.pojo.Response;
import com.demo.hosp.pojo.User;


@CrossOrigin
@RestController
@RequestMapping("/patients")
public class PatientController {

	@Autowired
	private PatientDao patDao;

	@GetMapping
	public Response<?> get() {
		List<Patient> list = patDao.findAll();
		return Response.success(list);
	}

	@GetMapping("/{PtntId}")
	public Response<?> getPatient(@PathVariable("PtntId") int PtntId ) {
		Optional<Patient> m = patDao.findById(PtntId);
		return Response.success(m);
	}

	@PostMapping
	public Response<?> savePatient(@RequestBody Patient u) {
      Patient count = patDao.save(u);
		Map<String, Patient> map = Collections.singletonMap("rowAffected", count);
		return Response.success(map);
	}

	@DeleteMapping("/{PtntId}")
	public Response<?> deletePatient(@PathVariable int PtntId) {
		Patient count = patDao.deleteById(PtntId);
		Map<String, Patient> map = Collections.singletonMap("rowAffected", count);
		return Response.success(map);

	}

	@PutMapping("/{PtntId}")
	public Response<?> updatePatient(@PathVariable int PtntId, @RequestBody Patient updatepat) {
		if (patDao.existsById(PtntId)) {
			updatepat.setPtntId(PtntId);
			return Response.success(patDao.save(updatepat));
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
 * @RequestMapping("/patients") public class PatientController {
 * 
 * @Autowired private PatientDao patientRepository ;
 * 
 * @GetMapping public List<Patient> getAllpatients() { return
 * patientRepository.findAll(); }
 * 
 * @GetMapping("/{PtntId}") public Optional<Patient>
 * getpatientById(@PathVariable int PtntId) { return
 * patientRepository.findById(PtntId); }
 * 
 * @PostMapping public Patient createpatient(@RequestBody Patient patient) {
 * return patientRepository.save(patient); }
 * 
 * @PutMapping("/{PtntId}") public Patient updatepatient(@PathVariable int
 * PtntId, @RequestBody Patient updatedpatient) { if
 * (patientRepository.existsById(PtntId)) { updatedpatient.setUSRId(PtntId);
 * return patientRepository.save(updatedpatient); } return null; // Handle not
 * found scenario }
 * 
 * @DeleteMapping("/{PtntId}") public Patient deletepatient(@PathVariable int
 * PtntId) { patientRepository.deleteById(PtntId); return null;
 * 
 * } }
 */
