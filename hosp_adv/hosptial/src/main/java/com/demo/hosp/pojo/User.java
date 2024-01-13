package com.demo.hosp.pojo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name = "Users")
public class User {
	@GeneratedValue(strategy=GenerationType.IDENTITY) // IDENTITY = MySQL AUTO_INCREMENT or MS-SQL IDENTITY
	@Id
	private int USRId;
	private  String  UName;
	//private String firstName;
	//private String lastName;
	private String Email;
	private String password;
	private String Mobile;
	private String  Role ;
	
	public User() {
		
	}
	
	public User(int uSRId, String uName, String email, String password, String mobile, String role) {
		super();
		USRId = uSRId;
		UName = uName;
		Email = email;
		this.password = password;
		Mobile = mobile;
		Role = role;
	}
	public int getUSRId() {
		return USRId;
	}
	public void setUSRId(int uSRId) {
		USRId = uSRId;
	}
	public String getUName() {
		return UName;
	}
	public void setUName(String uName) {
		UName = uName;
	}
	public String getEmail() {
		return Email;
	}
	public void setEmail(String email) {
		Email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getMobile() {
		return Mobile;
	}
	public void setMobile(String mobile) {
		Mobile = mobile;
	}
	public String getRole() {
		return Role;
	}
	public void setRole(String role) {
		Role = role;
	}

	@Override
	public String toString() {
		return "User [USRId=" + USRId + ", UName=" + UName + ", Email=" + Email + ", password=" + password + ", Mobile="
				+ Mobile + ", Role=" + Role + "]";
	}

	
	
	
}
