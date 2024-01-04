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
    var statement = "select * from Medication_Product";
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
    
    var prsidm=request.body.Prscrptn_number;
    var medname=request.body.Medicin_Name;
    var daysyp=request.body.Days_supply;
    var doages =request.body.Dosages_Instructions;
    var quantity=request.body.Quantity;
    var medprice=request.body.Medicin_price;
   
  

    var connection=mysql.createConnection(connectionDetails);
//     insert into Patients (UsrId,First_name,Last_name,Gender,Ptnt_Weight,Ptnt_Height,DOB,Home_Phone,Emrgncy_phone,Emrgncy_email,Address,State,City,Pincode) 
// values(1,"Jitendra","Patil","Male","50.0","5.9","2000-10-07","9893063933","9753400020","jatin@gmail.com","Jamna nagar p-80","Madhya Pradesh","Burhanpur",450331);
 
    var statement = `insert into Medication_Product (Prscrptn_number, Medicin_Name, Days_supply, Dosages_Instructions, Quantity, Medicin_price)  
    values ('${prsidm}','${medname}','${daysyp}','${doages}','${quantity}','${medprice}')`;
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
    var prsidm=request.params.Prscrptn_number;
   //var prsid=request.body.Prscrptn_number;
    var medname=request.body.Medicin_Name;
    var daysyp=request.body.Days_supply;
    var doages =request.body.Dosages_Instructions;
    var quantity=request.body.Quantity;
    var medprice=request.body.Medicin_price;
   
   

    var connection= mysql.createConnection(connectionDetails);
   // var statement = `update Users set UName='${username}',Email='${email}',password='${password}',Mobile='${mobile}' where  USRId =${id}`;
   var statement = `update  Medication_Product set  Medicin_Name = '${medname}', Days_supply = '${daysyp}', Dosages_Instructions = '${doages}', Quantity = '${quantity}', Medicin_price = '${medprice}'
     where Prscrptn_number = '${prsidm}'`;
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
    var prsmid=request.params.Prscrptn_number;
     //var id=request.params.UsrId;
    var connection=mysql.createConnection(connectionDetails);
    var statement = `delete from Medication_Product where  Prscrptn_number = ${prsmid}`;
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
