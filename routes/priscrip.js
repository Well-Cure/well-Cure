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
    var statement = "select * from Priscription";
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
    
   // var id=request.body.UsrId
   // var username=request.body.UName;
    var prsid=request.body.Prscrptn_numbe;
    var appid=request.body.ApptmntId;
    var vstart=request.body.Validity_start_date;
    var vend =request.body.Validity_end_date;
    
   
  

    var connection=mysql.createConnection(connectionDetails);
//     insert into Patients (UsrId,First_name,Last_name,Gender,Ptnt_Weight,Ptnt_Height,DOB,Home_Phone,Emrgncy_phone,Emrgncy_email,Address,State,City,Pincode) 
// values(1,"Jitendra","Patil","Male","50.0","5.9","2000-10-07","9893063933","9753400020","jatin@gmail.com","Jamna nagar p-80","Madhya Pradesh","Burhanpur",450331);
 
    var statement = `insert into Priscription (ApptmntId, Validity_start_date, Validity_end_date)  
    values ('${appid}','${vstart}','${vend}')`;
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



app.put("/:Prscrptn_number",(request,response) =>
{
    var prsid=request.params.Prscrptn_number;
    var appid=request.body.ApptmntId;
    var vstart=request.body.Validity_start_date;
    var vend =request.body.Validity_end_date;
    
 
   

    var connection= mysql.createConnection(connectionDetails);
   // var statement = `update Users set UName='${username}',Email='${email}',password='${password}',Mobile='${mobile}' where  USRId =${id}`;
   var statement = `update  Priscription set ApptmntId = '${appid}', Validity_start_date = '${vstart}', Validity_end_date = '${vend}'where Prscrptn_number = ${prsid}`;
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


app.delete("/:Prscrptn_number",(request,response) =>
{
    var prsid=request.params.Prscrptn_number;
     //var id=request.params.UsrId;
    var connection=mysql.createConnection(connectionDetails);
    var statement = `delete from Priscription where  Prscrptn_number = ${prsid}`;
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
