const express=require('express');
const app=express();
const port=3000;

app.get("/",(req,res)=>{
    
    res.send("<h1>Welcome to my home page </h1>");
})

app.get("/about",(req,res)=>{
    res.status(200).send("Welcome to my about page");
})

app.get("/contact",(req,res)=>{
    res.send("Welcome to my contanct page");
})
app.get("/temp",(req,res)=>{
    res.send([{
        id:1,
        name:"vinod", 
    }])
    res.send("Welcome to my temp page");
})
app.listen(port,()=>{
    console.log(`The port is ${port}`);
})