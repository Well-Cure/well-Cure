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
    var statement = "select * from Users";
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
    // var statement2 = `select (max(id)+1) id from Users`;
    // // console.log(statement);
    // connection2.query(statement2,(error,result)=>
    // {
    //     if(error==null)
    //     {
    //var id=result.USRId
    var username=request.body.UName;
    //var first_name=request.body.first_name;
    //var last_name=request.body.last_name;
    var email=request.body.Email;
    var password=request.body.password;
    var mobile=request.body.Mobile;
    var role=request.body.Role;
  

    var connection=mysql.createConnection(connectionDetails);
    var statement = `insert into Users(UName ,Email,password,Mobile,Role) values ('${username}','${email}','${password}','${mobile}','${role}')`;
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
//         }
//         else
//         {
//             response.setHeader("Content-Type","application/json");
//             response.write(JSON.stringify(error));
//             console.log(error);
//             connection.end();
//             response.end();
//         }
//     }
//     )
    
    
 }
)



app.put("/:USRId",(request,response) =>
{
    var id=request.params.USRId;
    var first_name=request.body.first_name;
    var last_name=request.body.last_name;
    var username=request.body.UName;
    var email=request.body.Email;
    var password=request.body.password;
    var mobile=request.body.Mobile;
   

    var connection= mysql.createConnection(connectionDetails);
    var statement = `update Users set UName='${username}',Email='${email}',password='${password}',Mobile='${mobile}' where  USRId =${id}`;
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


app.delete("/:USRId",(request,response) =>
{
     var id=request.params.USRId;
    var connection=mysql.createConnection(connectionDetails);
    var statement = `delete from Users where USRId = ${id}`;
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
