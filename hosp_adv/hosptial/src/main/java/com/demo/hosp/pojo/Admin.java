package com.demo.hosp.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Admin")
public class Admin {
	@GeneratedValue(strategy=GenerationType.IDENTITY) // IDENTITY = MySQL AUTO_INCREMENT or MS-SQL IDENTITY
	@Id
	private int  AdmnId;
	private int USRId;
	//private  String  UName;'
	@Column(name ="First_name")
	private String firstName;
	@Column(name ="Last_name")
	private String lastName;
//	@Column(name ="Emrgncy_email")
	private String Email;
	//private String password;
	//@Column(name ="Emrgncy_phone")
	private String Mobile;
	//private String  Role ;
	
	private String Address ;
	private String  State ;
	private String  City ;
	private String   Pincode ;
	
	public Admin() {
		
	}
	
	public Admin(int admnId, int uSRId, String firstName, String lastName, String email, String mobile, 
			String address, String state, String city, String pincode) {
		super();
		AdmnId = admnId;
		USRId = uSRId;
		this.firstName = firstName;
		this.lastName = lastName;
		Email = email;
		Mobile = mobile;
		Address = address;
		State = state;
		City = city;
		Pincode = pincode;
	}

	public int getAdmnId() {
		return AdmnId;
	}

	public void setAdmnId(int admnId) {
		AdmnId = admnId;
	}

	public int getUSRId() {
		return USRId;
	}

	public void setUSRId(int uSRId) {
		USRId = uSRId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return Email;
	}

	public void setEmail(String email) {
		Email = email;
	}

	public String getMobile() {
		return Mobile;
	}

	public void setMobile(String mobile) {
		Mobile = mobile;
	}

	

	public String getAddress() {
		return Address;
	}

	public void setAddress(String address) {
		Address = address;
	}

	public String getState() {
		return State;
	}

	public void setState(String state) {
		State = state;
	}

	public String getCity() {
		return City;
	}

	public void setCity(String city) {
		City = city;
	}

	public String getPincode() {
		return Pincode;
	}

	public void setPincode(String pincode) {
		Pincode = pincode;
	}

	@Override
	public String toString() {
		return "Admin [AdmnId=" + AdmnId + ", USRId=" + USRId + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", Email=" + Email + ", Mobile=" + Mobile + ", Address=" + Address + ", State="
				+ State + ", City=" + City + ", Pincode=" + Pincode + "]";
	}
	
	
	
}
