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
    var statement = "select * from Billings";
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
    var testid=request.body.Test_id;
    var id=request.body.UsrId
   // var username=request.body.UName;
    var prscrptncharge=request.body.Prscrptn_Charge;
    var testchange =request.body.Tests_charges;
    var prsidb=request.body.Prscrptn_number;
    var petidb=request.body.PtntId;
    var admnidb = request.body.AdmnId;
    

    var connection=mysql.createConnection(connectionDetails);
//     insert into Tests(ApptmntId, Test_type, AdmnId) values (1, "Blood_test", 1);ndra","Patil","Male","50.0","5.9","2000-10-07","9893063933","9753400020","jatin@gmail.com","Jamna nagar p-80","Madhya Pradesh","Burhanpur",450331);
 
    var statement = `insert into Billings (Test_id,PtntId,Prscrptn_number,AdmnId,Prscrptn_Charge,Tests_charges) 
    values ('${testid}','${petidb}','${prsidb}','${admnidb}','${prscrptncharge}','${testchange}')`;
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



app.put("/:Bill_number",(request,response) =>
{
    var billid = request.params.Bill_number;
    var testid=request.body.Test_id;
    var prscrptncharge=request.body.Prscrptn_Charge;
    var testchange =request.body.Tests_charges;
    var prsidb=request.body.Prscrptn_number;
    var petidb=request.body.PtntId;
    var admnidb = request.body.AdmnId;
    

    var connection= mysql.createConnection(connectionDetails);
   // var statement = `update Users set UName='${username}',Email='${email}',password='${password}',Mobile='${mobile}' where  USRId =${id}`;
   var statement = `update   Billings  set Test_id ='${testid}',PtntId  ='${petidb}',Prscrptn_number  ='${prsidb}',AdmnId  ='${admnidb}',Prscrptn_Charge  ='${prscrptncharge}',Tests_charges  ='${testchange}' where Bill_number = ${billid}`;
     
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


app.delete("/:Bill_number",(request,response) =>
{
    var billid=request.params.Bill_number;
     //var id=request.params.UsrId;
    var connection=mysql.createConnection(connectionDetails);
    var statement = `delete from Billings where Bill_number = ${billid}`;
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
