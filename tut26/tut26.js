const express=require('express');
const app=express();
const port=8008;
app.get("/",(req,res)=>{
    res.send("<h1>You are in Home Page</h1>");
})

app.get("/about",(req,res)=>{
  res.send("You are in home page");
})



app.listen(8000,()=>{
  
        console.log(`Listening to the port no ${port}`)
    })
