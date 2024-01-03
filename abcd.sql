create database hospitalManagement;

use hospitalManagement;



create table Users(
  USRId int not null primary key auto_increment,
  UName varchar(25) not null unique,
  Mobile varchar(10) not null,
  Email varchar(35) not null,
  Role ENUM('Patient','Doctor','Admin') not null default 'Patient',
  password varchar(25) not null,
  Login_date_time datetime
);

insert into Users (USRId,UName,Mobile,Email,Role,password,Login_date_time) values(1,"jitu@123","7999842948","jitendra@gmail.com","Patient","Jitendra@123",curdate());
insert into Users (USRId,UName,Mobile,Email,Role,password,Login_date_time) values(2,"lokesh@123","7222842948","lokesh@gmail.com","Doctor","lokesh@123",curdate());
insert into Users (UName,Mobile,Email,Role,password,Login_date_time) values("dhanraj@123","7111842948","dhanraj@gmail.com","Admin","dhanraj@123",curdate());
select * from Users;
desc Users;

create table Patients(
  PtntId int not null primary key auto_increment ,
  UsrId int ,
  First_name varchar(25) not null,
  Last_name varchar(25) not null,
  Gender ENUM('Male','Female','Others') not null,
  Ptnt_Weight double not null,
  Ptnt_Height double not null,
  DOB date not null,
  Home_Phone varchar(10),
  Emrgncy_phone varchar(10),
  Emrgncy_email varchar(35),
  Address LongText not null,
  State varchar(30),
  City varchar(30),
  Pincode integer(6) not null,
  foreign key(UsrId) references Users(UsrId) on delete cascade on update cascade
);
alter table Patients modify UsrId int not null;
insert into Patients (UsrId,First_name,Last_name,Gender,Ptnt_Weight,Ptnt_Height,DOB,Home_Phone,Emrgncy_phone,Emrgncy_email,Address,State,City,Pincode) 
values(1,"Jitendra","Patil","Male","50.0","5.9","2000-10-07","9893063933","9753400020","jatin@gmail.com","Jamna nagar p-80","Madhya Pradesh","Burhanpur",450331);
select * from Patients;

desc Patients;

create table Doctors(
  DocId int not null primary key auto_increment,
  UsrId int not null,
  First_name varchar(25) not null,
  Last_name varchar(25) not null,
  DOB date,
  IsActive boolean,
  Gender ENUM('Male','Female','Others') not null,
  Doctor_Type ENUM('Gynaecologist','Obstetrician','Paediatrician','Dermatologist','Orthopaedist','Opthalmologist','Cardialogist','Neurologist','General_Practitioner') not null,
   Home_Phone varchar(10),
  Emrgncy_phone varchar(10),
  Emrgncy_email varchar(35),
  Address LongText,
  State varchar(30),
  City varchar(30),
  Pincode integer(6),
  foreign key (UsrId) references Users(UsrId) on delete cascade on update cascade
);
insert into Doctors (UsrId,First_name,Last_name,DOB,IsActive,Gender,Doctor_Type,Home_Phone,Emrgncy_phone,Emrgncy_email,Address,State,City,Pincode) 
values(2,"Lokesh","Patel","2002-02-19",1,"Male","Neurologist","8766433255","7896541233","lokesh@gmail.com","Aryanagar p-01","Maharastra","Nagpur",440026);

select * from Doctors;



desc Doctors;


create table Admin(
  AdmnId int not null primary key auto_increment,
  UsrId int not null,
  First_name varchar(25) not null,
  Last_name varchar(25) not null,
  Mobile varchar(10) not null,
  Email varchar(35) not null,
  Address LongText not null,
  State varchar(30) not null,
  City varchar(30) not null,
  Pincode integer(6) not null,
  foreign key(UsrId) references Users(UsrId) on delete cascade on update cascade
);

insert into Admin(UsrId,First_name, Last_name, Mobile, Email, Address, State, City, Pincode)
 values(3,"Dhanraj","Jadhav", "9212173314", "dhanraj@gmail.com", "Sangli p-70", "Maharastra", "sangli", "440034");
 select * from Admin;
 -- delete from Admin where AdmnId = 1;

desc Admin;

create table Appointment(
  ApptmntId int not null primary key auto_increment,
  PtntId int not null,
  DocId int not null,
  Apptmnt_Date timestamp,
  Apptmnt_Status ENUM('Booked','Canceled','Rescheduled','Pending') not null,
  Apptmnt_Type ENUM('Emergency','Check_Up','Follow_Up','Routine','Walk_In') not null,
  Apptmnt_for_Dscription LongText not null,
  Apptmnt_fee_inRupees double default 500 ,
  foreign key (PtntId) references Patients(PtntId) on delete cascade on update cascade,
  foreign key(DocId) references Doctors(DocId) on delete cascade on update cascade
);

insert into Appointment (PtntId, DocId, Apptmnt_Date, Apptmnt_Status, Apptmnt_Type, Apptmnt_for_Dscription) 
values (1,1,curdate(), "Booked", "Check_Up","Regular check up");
select * from Appointment;

desc Appointment;

create table Priscription(
  Prscrptn_number int not null primary key auto_increment,
  ApptmntId int not null,
  Validity_start_date date,
  Validity_end_date date,
  foreign key (ApptmntId) references Appointment(ApptmntId) on delete cascade on update cascade
);

insert into Priscription(ApptmntId, Validity_start_date, Validity_end_date)
values (1, curdate(), "2024-01-05");

select * from Priscription;

desc Priscription;

create table Medication_Product(
  Prscrptn_number int not null,
  Medicin_Name varchar(30) not null,
  Days_supply int not null,
  Dosages_Instructions LongText not null,
  Quantity int not null,
  Medicin_price double not null,
  foreign key(Prscrptn_number) references Priscription(Prscrptn_number) on delete cascade on update cascade
);

insert into Medication_Product(Prscrptn_number, Medicin_Name, Days_supply, Dosages_Instructions, Quantity, Medicin_price)
values (1, "Dolo", 4, "take it 3 times a day , Don't skip it..", 12, 120.79);

select * from Medication_Product;

desc Medication_Product;

create table Feedback(
  PtntId int not null,
  DocId int not null,
  Fdbck LongText not null,
  IsSatisfied ENUM('Fully_Satisfied','Moderately_Satisfied','Not_Satisfied') not null,
  foreign key (PtntId) references Patients(PtntId) on delete cascade on update cascade,
  foreign key(DocId) references Doctors(DocId) on delete cascade on update cascade
);


insert into Feedback(PtntId, DocId, Fdbck, IsSatisfied) values (1, 1, "Great doctor, I will advice more people to visit here..", "Fully_Satisfied");
select * from Feedback;

desc Feedback;

create table Tests(
  Test_id int not null primary key auto_increment,
  ApptmntId int not null,
  Test_type ENUM('Blood_test','Suger_test','X_ray','MRI','Bone_marrow_test'),
  AdmnId int not null,
  foreign key (ApptmntId) references Appointment(ApptmntId) on delete cascade on update cascade,
  foreign key (AdmnId) references Admin(AdmnId) on delete cascade on update cascade
);
alter table Tests modify Test_type ENUM('Blood_test','Suger_test','X_ray','MRI','Bone_marrow_test') not null;


insert into Tests(ApptmntId, Test_type, AdmnId) values (1, "Blood_test", 1);

desc Tests;

create table Billings(
  Bill_number int not null primary key auto_increment,
  Test_id int not null,
  PtntId int not null,
  Prscrptn_number int not null,
  AdmnId int not null,
  Prscrptn_Charge double not null ,
  Tests_charges double not null,
  foreign key(Test_id) references Tests(Test_id) on delete cascade on update cascade,
  foreign key(PtntId) references Patients(PtntId) on delete cascade on update cascade,
  foreign key(Prscrptn_number) references Priscription(Prscrptn_number) on delete cascade on update cascade,
  foreign key(AdmnId) references Admin(AdmnId) on delete cascade on update cascade
);


desc Billings;




