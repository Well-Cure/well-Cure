package com.demo.hosp.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table (name = "Doctors")
public class Doctor {
		@GeneratedValue(strategy=GenerationType.IDENTITY) // IDENTITY = MySQL AUTO_INCREMENT or MS-SQL IDENTITY
		@Id
		private int  DocId;
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
		
		private String  Home_Phone;
		@Column(name="Doctor_Type")
		private String Doctor_Type;
		private String  DOB ;
		private String Address ;
		private String  State ;
		private String  City ;
		private String   Pincode ;
		
		public Doctor() {
			
		}
		
		public Doctor(int docId, int uSRId, String firstName, String lastName, String email, String mobile,
				String gender, String home_Phone, String doctor_Type, String dOB,
				String address, String state, String city, String pincode) {
			super();
			DocId = docId;
			USRId = uSRId;
			this.firstName = firstName;
			this.lastName = lastName;
			Email = email;
			Mobile = mobile;
			Gender = gender;
			Home_Phone = home_Phone;
			Doctor_Type = doctor_Type;
			DOB = dOB;
			Address = address;
			State = state;
			City = city;
			Pincode = pincode;
		}

		public int getDocId() {
			return DocId;
		}

		public void setDocId(int docId) {
			DocId = docId;
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

		public String getGender() {
			return Gender;
		}

		public void setGender(String gender) {
			Gender = gender;
		}

	
		public String getHome_Phone() {
			return Home_Phone;
		}

		public void setHome_Phone(String home_Phone) {
			Home_Phone = home_Phone;
		}

		public String getDoctor_Type() {
			return Doctor_Type;
		}

		public void setDoctor_Type(String doctor_Type) {
			Doctor_Type = doctor_Type;
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
			return "Doctor [DocId=" + DocId + ", USRId=" + USRId + ", firstName=" + firstName + ", lastName=" + lastName
					+ ", Email=" + Email + ", Mobile=" + Mobile + ", Gender=" + Gender + ", Home_Phone=" + Home_Phone + ", Doctor_Type=" + Doctor_Type + ", DOB="
					+ DOB + ", Address=" + Address + ", State=" + State + ", City=" + City + ", Pincode=" + Pincode
					+ "]";
		}
		
	
	

}
