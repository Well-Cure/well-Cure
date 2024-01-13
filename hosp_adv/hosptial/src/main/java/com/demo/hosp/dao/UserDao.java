package com.demo.hosp.dao;



import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.hosp.pojo.Admin;
import com.demo.hosp.pojo.User;


public interface UserDao extends JpaRepository<User,Integer>{

	User deleteById(int USRId);

}
