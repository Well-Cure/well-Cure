const express = require('express');
// const loginRoutesHandler = require('./routes/login');
 const adminRoutesHandler = require('./routes/admin');
 
 const patientRoutesHandler = require ('./routes/patient')
 const usersRoutesHandler = require('./routes/users');
 const loginRoutesHandler = require('./routes/login');
 const doctRoutesHandler = require('./routes/doctor');
 const appoRoutesHandler = require('./routes/appo');
 const priscripRoutesHandler = require('./routes/priscrip');
 const feedbRoutesHandler = require('./routes/feedb');
 const medicatRoutesHandler = require('./routes/medicat');
 const testRoutesHandler = require('./routes/test');
 const billRoutesHandler = require('./routes/bill');

const mysql = require('mysql');

const config = require('config');
const cors = require('cors');
const app = express();

const PORT = config.get("PORT");



app.use(cors());
app.use(express.json());


app.use("/admin", adminRoutesHandler);
app.use("/appo", appoRoutesHandler);
app.use("/patient", patientRoutesHandler);
app.use("/doct", doctRoutesHandler);
app.use("/user", usersRoutesHandler);
app.use("/login", loginRoutesHandler);
app.use("/priscrip", priscripRoutesHandler);
app.use("/feedb", feedbRoutesHandler);
app.use("/test", testRoutesHandler);
app.use("/medicat", medicatRoutesHandler);
app.use("/bill",billRoutesHandler);


app.listen(PORT, () => console.log("server started at port " + PORT))
