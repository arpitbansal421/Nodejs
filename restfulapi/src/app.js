const express=require('express');
require("./database/conn");
const app=express();
app.use(express.json());
const port=process.env.PORT || 3000;

const Student=require("./model/model");
const StudentRouter=require("./Router/student");
///creating a route
app.use(StudentRouter);
//students reqistration

// app.get("/",(req,res)=>{
//     res.send("Hello from the other side");

// })

//create a new student

// app.post("/students",(req,res)=>{
//     const user=new Student();

//     user.then(()=>{
//         res.status(201).send(user);
//     }).catch((e)=>{
//         res.status(400).send(e);
//     }
//     )
// })


 

app.listen(port,()=>{
    
    console.log("Connection is set up at port "+port);
});