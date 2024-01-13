package com.demo.hosp.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.hosp.pojo.Doctor;
import com.demo.hosp.pojo.Patient;


public interface PatientDao extends JpaRepository<Patient,Integer>{

	Patient deleteById(int PtntId );
}
