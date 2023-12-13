create table users (user_id INT AUTO_INCREMENT PRIMARY KEY, usersname VARCHAR(30), 
password VARCHAR(100), mobile VARCHAR(15), address VARCHAR(60), email VARCHAR(40) UNIQUE, 
role VARCHAR(20),fv1 VARCHAR(30),fv2 VARCHAR(30));


INSERT INTO users(usersname, password, mobile, address, email, role) VALUES
('dhanraj', '$2a$10$9AdMO3jAMhSkz4ffLUYvneWVHc6SKlsY.I8EwJtez8odBTIO0PSlS', '9527331338','Pune',
 'dj@sunbeaminfo.com' ,'admin'),
('lokesh', '$2a$10$47D9E5QGX9KZed3YA.9Vrua3jLHGIQbLzvjNm8SYybBhUFxy42GgC','9881208114',
'Peth, Karad','lokesh@sunbeaminfo.com', 'doctor'),
('jitu','$2a$10$pZZHHEBCo7SPNVcwLWODlevBhTAUt9eiK/fYtA6DIIxqBpeZz791G', '9881208115',
 'Padmavati, Pune', 'jitu@sunbeaminfo.com', 'patient');
('pragati', '$2a$10$9AdMO3jAMhSkz4ffLUYvneWVHc6SKlsY.I8EwJtez8odBTIO0PSlS', '9527331338','Pune', 
 'paragati@sunbeaminfo.com' ,'nurse');

 create table admin (admin_id INT AUTO_INCREMENT PRIMARY KEY, admin_name VARCHAR(30), 
password VARCHAR(100), admin_model VARCHAR(30),
role_id VARCHAR(20),fv1 VARCHAR(30),fv2 VARCHAR(30));

ALTER TABLE admin ADD user_id int;


alter table users modify user_id int AUTO_INCREMENT;


ALTER TABLE admin ADD FOREIGN KEY (user_id) REFERENCES users (user_id);


create table hosp (hosp_id INT AUTO_INCREMENT PRIMARY KEY, hosp_name VARCHAR(30), 
hosp_type VARCHAR(100), mobile VARCHAR(15), hosp_address VARCHAR(60), email VARCHAR(40) UNIQUE, 
role VARCHAR(20),id int  ,fv1 VARCHAR(30),fv2 VARCHAR(30));



ALTER TABLE hosp ADD admin_id int;


create table medican (med_id INT AUTO_INCREMENT PRIMARY KEY, med_name VARCHAR(30), 
med_catagoers VARCHAR(100), med_type VARCHAR(15), med_dec VARCHAR(60), fv4 VARCHAR(40) , 
fv3 VARCHAR(20),fv1 VARCHAR(30),fv VARCHAR(30));





create table doctor (doc_id INT AUTO_INCREMENT PRIMARY KEY, usersname VARCHAR(30), 
password VARCHAR(100), mobile VARCHAR(15), address VARCHAR(60), email VARCHAR(40) UNIQUE, 
doc_desc VARCHAR(50),fv1 VARCHAR(30),fv2 VARCHAR(30));


create table patient (pat_id INT AUTO_INCREMENT PRIMARY KEY, usersname VARCHAR(30), 
password VARCHAR(100), mobile VARCHAR(15), address VARCHAR(60), email VARCHAR(40) UNIQUE, 
pat_dec VARCHAR(50),fv1 VARCHAR(30),fv2 VARCHAR(30));

create table role (role_id INT AUTO_INCREMENT PRIMARY KEY,role_name VARCHAR(30),
role_desc VARCHAR(50),fv1 VARCHAR(30),fv2 VARCHAR(30));


CREATE TABLE appointments ( appo_id INT  PRIMARY KEY,     appo_date DATE NOT NULL,     appo_time TIMESTAMP DEFAULT NOW(), patient_name VARCHAR(200) , doctor_name VARCHAR(255) ,fv1 varchar(50),fv2 var
char(50),fv3 varchar(50));


create table appo (appo_id INT AUTO_INCREMENT PRIMARY KEY, appo_name VARCHAR(30), 
 mobile VARCHAR(15), address VARCHAR(60), email VARCHAR(40) UNIQUE, appo_date date,
fv3 VARCHAR(20),fv1 VARCHAR(30),fv2 VARCHAR(30));

