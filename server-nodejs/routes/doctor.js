const config=require('config');
const mysql=require('mysql');

const express=require('express');
const app=express();
const cors=require('cors');
app.use(express.json());
app.use(cors());


var connectionDetails={
    host: config.get("SERVER"),
    database: config.get("DATABASE"),
    user: config.get("USER"),
    password: config.get("PASSWORD"),
}


app.get("/",(request,response) =>
{
    var connection=mysql.createConnection(connectionDetails);
    var statement = "select * from Doctors";
    console.log(statement);
    connection.query(statement,(error,result)=>
    {
        if(error==null)
        {
            response.setHeader("Content-Type","application/json");
            response.write(JSON.stringify(result));
            connection.end();
            response.end();
        }
        else
        {
            response.setHeader("Content-Type","application/json");
            response.write(JSON.stringify(error));
            console.log(error);
            connection.end();
            response.end();
        }
    }
    )
}
)


app.post("/",(request,response) =>
{
    var connection=mysql.createConnection(connectionDetails);
    
    var id=request.body.UsrId
   // var username=request.body.UName;
    var first_name=request.body.First_name;
    var last_name=request.body.Last_name;
    var email=request.body.Emrgncy_email;
    var homePhone =request.body.Home_Phone;
    var emgphone=request.body.Emrgncy_phone;
   // var role=request.body.Role;
    var address = request.body.Address;
    var state = request.body.State;
    var city = request.body.City;
    var pincode = request.body.Pincode;
    var  doctor_Type = request.body.Doctor_Type;
    var ptnt_Height = request.body.Ptnt_Height;
    var gender = request.body.Gender;
    var bdate = request.body.DOB;

  

    var connection=mysql.createConnection(connectionDetails);
//     insert into Patients (UsrId,First_name,Last_name,Gender,Ptnt_Weight,Ptnt_Height,DOB,Home_Phone,Emrgncy_phone,Emrgncy_email,Address,State,City,Pincode) 
// values(1,"Jitendra","Patil","Male","50.0","5.9","2000-10-07","9893063933","9753400020","jatin@gmail.com","Jamna nagar p-80","Madhya Pradesh","Burhanpur",450331);
 
    var statement = `insert into Doctors(UsrId,First_name,Last_name,Gender,Doctor_Type,DOB,Home_Phone,Emrgncy_phone,Emrgncy_email,Address,State,City,Pincode) 
    values ('${id}','${first_name}','${last_name}','${gender}','${doctor_Type}','${bdate}','${homePhone}','${emgphone}','${email}','${address}','${state}','${city}',${pincode})`;
    console.log(statement);
    connection.query(statement,(error,result)=>
    {
        if(error==null)
        {
            response.setHeader("Content-Type","application/json");
            response.write(JSON.stringify(result));
            connection.end();
            response.end();
        }
        else
        {
            response.setHeader("Content-Type","application/json");
            response.write(JSON.stringify(error));
            console.log(error);
            connection.end();
            response.end();
        }
    }
    )

    
    
 }
)



app.put("/:DocId",(request,response) =>
{
    var doctid=request.params.DocId;
    var id=request.body.UsrId
    // var username=request.body.UName;
     var first_name=request.body.First_name;
     var last_name=request.body.Last_name;
     var email=request.body.Emrgncy_email;
     var homePhone =request.body.Home_Phone;
     var emgphone=request.body.Emrgncy_phone;
    // var role=request.body.Role;
     var address = request.body.Address;
     var state = request.body.State;
     var city = request.body.City;
     var pincode = request.body.Pincode;
     var  doctor_Type = request.body.Doctor_Type;
     var ptnt_Height = request.body.Ptnt_Height;
     var gender = request.body.Gender;
     var bdate = request.body.DOB;
 
   

    var connection= mysql.createConnection(connectionDetails);
   // var statement = `update Users set UName='${username}',Email='${email}',password='${password}',Mobile='${mobile}' where  USRId =${id}`;
   var statement = `update  Doctors set First_name = '${first_name}', Last_name = '${last_name}', Gender ='${gender}',Doctor_Type ='${doctor_Type}',DOB='${bdate}',Home_Phone='${homePhone}',Emrgncy_phone='${emgphone}',Emrgncy_email='${email}',
   Address = '${address}', State ='${state}', City = '${city}', Pincode = '${pincode}'  where DocId = '${doctid}'`;
   console.log(statement);
    connection.query(statement,(error,result)=>
    {
        if(error==null)
        {
            response.setHeader("Content-Type","application/json");
            response.write(JSON.stringify(result));
            connection.end();
            response.end();
        }
        else
        {
            response.setHeader("Content-Type","application/json");
            response.write(JSON.stringify(error));
            console.log(error);
            connection.end();
            response.end();
        }
    }
    )
}
)


app.delete("/:DocId",(request,response) =>
{
    var doctid=request.params.DocId;
     //var id=request.params.UsrId;
    var connection=mysql.createConnection(connectionDetails);
    var statement = `delete from  Doctors where  DocId = ${doctid}`;
    console.log(statement);
    connection.query(statement,(error,result)=>
    {
        if(error==null)
        {
            response.setHeader("Content-Type","application/json");
            response.write(JSON.stringify(result));
            connection.end();
            response.end();
        }
        else
        {
            response.setHeader("Content-Type","application/json");
            response.write(JSON.stringify(error));

            connection.end();
            response.end();
        }
    }
    )
}
)

module.exports =app;
