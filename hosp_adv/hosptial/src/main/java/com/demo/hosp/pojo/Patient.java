package com.demo.hosp.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name = "Patients")
public class Patient {
	@GeneratedValue(strategy=GenerationType.IDENTITY) // IDENTITY = MySQL AUTO_INCREMENT or MS-SQL IDENTITY
	@Id
	private int  PtntId;
	private int USRId;
	//private  String  UName;'
	@Column(name ="First_name")
	private String firstName;
	@Column(name ="Last_name")
	private String lastName;
	@Column(name ="Emrgncy_email")
	private String Email;
	//private String password;
	@Column(name ="Emrgncy_phone")
	private String Mobile;
	//private String  Role ;
	private String  Gender ;
	@Column(name ="Ptnt_Weight")
	private String  Weight ;
	@Column(name ="Ptnt_Height")
	private String Height;
	private String  Home_Phone;
	private String  DOB ;
	private String Address ;
	private String  State ;
	private String  City ;
	private String   Pincode ;
	

	public Patient() {
		
	}
	

	public Patient(int ptntId, int uSRId, String firstName, String lastName, String email, String mobile, String gender,
			String weight, String height, String home_Phone, String dOB, String address, String state, String city,
			String pincode) {
		super();
		PtntId = ptntId;
		USRId = uSRId;
		this.firstName = firstName;
		this.lastName = lastName;
		Email = email;
		Mobile = mobile;
		Gender = gender;
		Weight = weight;
		Height = height;
		Home_Phone = home_Phone;
		DOB = dOB;
		Address = address;
		State = state;
		City = city;
		Pincode = pincode;
	}

	public int getPtntId() {
		return PtntId;
	}

	public void setPtntId(int ptntId) {
		PtntId = ptntId;
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
	public String getHome_Phone() {
		return Home_Phone;
	}

	public void setHome_Phone(String home_Phone) {
		Home_Phone = home_Phone;
	}


	public String getGender() {
		return Gender;
	}

	public void setGender(String gender) {
		Gender = gender;
	}

	public String getWeight() {
		return Weight;
	}

	public void setWeight(String weight) {
		Weight = weight;
	}

	public String getHeight() {
		return Height;
	}

	public void setHeight(String height) {
		Height = height;
	}

	public String getDOB() {
		return DOB;
	}

	public void setDOB(String dOB) {
		DOB = dOB;
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
		return "Patient [PtntId=" + PtntId + ", USRId=" + USRId + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", Email=" + Email + ", Mobile=" + Mobile + ", Gender=" + Gender + ", Weight=" + Weight + ", Height="
				+ Height + ", Home_Phone=" + Home_Phone + ", DOB=" + DOB + ", Address=" + Address + ", State=" + State
				+ ", City=" + City + ", Pincode=" + Pincode + "]";
	}


	

}
	
//	 int not null primary key auto_increment ,
//	  UsrId int ,
//	  First_name varchar(25) not null,
//	  Last_name varchar(25) not null,
//	  Gender ENUM('Male','Female','Others') not null,
//	  Ptnt_Weight double not null,
//	  Ptnt_Height double not null,
//	  DOB date not null,
//	  Home_Phone varchar(10),
//	  Emrgncy_phone varchar(10),
//	  Emrgncy_email varchar(35),
//	  Address LongText not null,
//	  State varchar(30),
//	  City varchar(30),
//	  Pincode integer(6) not null,
//}
