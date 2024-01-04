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
    var statement = "select * from Feedback";
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
    var feedback = request.body.Fdbck
    var satisfied = request.body.IsSatisfied

    var connection=mysql.createConnection(connectionDetails);
//     insert into Patients (UsrId,First_name,Last_name,Gender,Ptnt_Weight,Ptnt_Height,DOB,Home_Phone,Emrgncy_phone,Emrgncy_email,Address,State,City,Pincode) 
// values(1,"Jitendra","Patil","Male","50.0","5.9","2000-10-07","9893063933","9753400020","jatin@gmail.com","Jamna nagar p-80","Madhya Pradesh","Burhanpur",450331);
 
    var statement = `insert into Feedback (PtntId, DocId, Fdbck, IsSatisfied)  
    values ('${petid}','${doctid}','${feedback}','${satisfied}')`;
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



app.put("/:PtntId",(request,response) =>
{
    var pentidf=request.params.PtntId;
   // var id=request.body.UsrId
    //var petid=request.body.PtntId;
    var doctid=request.body.DocId;
    var feedback = request.body.Fdbck
    var satisfied = request.body.IsSatisfied
 
   

    var connection= mysql.createConnection(connectionDetails);
   // var statement = `update Users set UName='${username}',Email='${email}',password='${password}',Mobile='${mobile}' where  USRId =${id}`;
   var statement = `update  Feedback set Fdbck = '${feedback}',IsSatisfied = '${satisfied}'where PtntId = ${pentidf}`;
     
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


app.delete("/:PtntId",(request,response) =>
{
    var pentidf=request.params.PtntId;
     //var id=request.params.UsrId;
    var connection=mysql.createConnection(connectionDetails);
    var statement = `delete from Appointment where  PtntId = ${pentidf}`;
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
