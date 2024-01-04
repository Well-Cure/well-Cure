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
    var statement = "select * from Appointment";
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
    var petid=request.body.PtntId;
    var doctid=request.body.DocId;
    var appdate=request.body.Apptmnt_Date;
    var appstatus =request.body.Apptmnt_Status;
    var apptype=request.body.Apptmnt_Type;
    var appdec=request.body.Apptmnt_for_Dscription;
    var appfeeinrup = request.body.Apptmnt_fee_inRupees;
    
  

    var connection=mysql.createConnection(connectionDetails);
//     insert into Patients (UsrId,First_name,Last_name,Gender,Ptnt_Weight,Ptnt_Height,DOB,Home_Phone,Emrgncy_phone,Emrgncy_email,Address,State,City,Pincode) 
// values(1,"Jitendra","Patil","Male","50.0","5.9","2000-10-07","9893063933","9753400020","jatin@gmail.com","Jamna nagar p-80","Madhya Pradesh","Burhanpur",450331);
 
    var statement = `insert into Appointment (PtntId, DocId, Apptmnt_Date, Apptmnt_Status, Apptmnt_Type, Apptmnt_for_Dscription,Apptmnt_fee_inRupees)  
    values ('${petid}','${doctid}','${appdate}','${appstatus}','${apptype}','${appdec}','${appfeeinrup}')`;
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



app.put("/:ApptmntId",(request,response) =>
{
    var appoid=request.params.ApptmntId;
    var id=request.body.UsrId
    // var username=request.body.UName;
     var petid=request.body.PtntId;
     var doctid=request.body.DocId;
     var appdate=request.body.Apptmnt_Date;
     var appstatus =request.body.Apptmnt_Status;
     var apptype=request.body.Apptmnt_Type;
     var appdec=request.body.Apptmnt_for_Dscription;
     var appfeeinrup = request.body.Apptmnt_fee_inRupees;
     
 
   

    var connection= mysql.createConnection(connectionDetails);
   // var statement = `update Users set UName='${username}',Email='${email}',password='${password}',Mobile='${mobile}' where  USRId =${id}`;
   var statement = `update  Appointment set PtntId = '${petid}', DocId = '${doctid}', Apptmnt_Date = '${appdate}', Apptmnt_Status= '${appstatus}', Apptmnt_Type= '${apptype}', Apptmnt_for_Dscription= '${appdec}',Apptmnt_fee_inRupees= '${appfeeinrup}'
     where ApptmntId = ${appoid}`;
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


app.delete("/:ApptmntId",(request,response) =>
{
    var appoid=request.params.ApptmntId;
     //var id=request.params.UsrId;
    var connection=mysql.createConnection(connectionDetails);
    var statement = `delete from Appointment where  ApptmntId = ${appoid}`;
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
