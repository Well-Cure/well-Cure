package com.demo.hosp.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.hosp.pojo.Doctor;
import com.demo.hosp.pojo.User;

public interface DoctorDao  extends JpaRepository<Doctor, Integer>{
	Doctor deleteById(int DocId );


}
