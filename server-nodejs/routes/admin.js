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
    var statement = "select * from Admin";
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
    var email=request.body.Email;
    var password=request.body.password;
    var mobile=request.body.Mobile;
   // var role=request.body.Role;
    var address = request.body.Address;
    var state = request.body.State;
    var city = request.body.City;
    var pincode = request.body.Pincode;

  

    var connection=mysql.createConnection(connectionDetails);
    //insert into Admin(UsrId,First_name, Last_name, Mobile, Email, Address, State, City, Pincode)
 //values(3,"Dhanraj","Jadhav", "9212173314", "dhanraj@gmail.com", "Sangli p-70", "Maharastra", "sangli", "440034");
 
    var statement = `insert into Admin (UsrId,First_name, Last_name, Mobile, Email, Address, State, City, Pincode) 
    values ('${id}','${first_name}','${last_name}','${mobile}','${email}','${address}','${state}','${city}',${pincode})`;
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



app.put("/:AdmnId",(request,response) =>
{
    var adminid=request.params.AdmnId;
    //var adminid = request.body.AdmnId
    var id=request.body.UsrId
    // var username=request.body.UName;
     var first_name=request.body.First_name;
     var last_name=request.body.Last_name;
     var email=request.body.Email;
     var password=request.body.password;
     var mobile=request.body.Mobile;
    // var role=request.body.Role;
     var address = request.body.Address;
     var state = request.body.State;
     var city = request.body.City;
     var pincode = request.body.Pincode;
   

    var connection= mysql.createConnection(connectionDetails);
   // var statement = `update Users set UName='${username}',Email='${email}',password='${password}',Mobile='${mobile}' where  USRId =${id}`;
   var statement = `update Admin set First_name = '${first_name}', Last_name = '${last_name}', 
   Mobile = '${mobile}', Email = '${email}', Address = '${address}', State ='${state}', City = '${city}', Pincode = '${pincode}'  where AdmnId = '${adminid}'`;
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


app.delete("/:AdmnId",(request,response) =>
{
    var adminid=request.params.AdmnId;
     //var id=request.params.UsrId;
    var connection=mysql.createConnection(connectionDetails);
    var statement = `delete from Admin where AdmnId = ${adminid}`;
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
