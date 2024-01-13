package com.demo.hosp.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.hosp.pojo.Admin;

public interface AdminDao extends JpaRepository<Admin, Integer>{

	Admin deleteById(int AdmnId);

	
	

	
	
	
}
