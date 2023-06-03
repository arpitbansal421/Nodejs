const express=require('express');
const app=express();


app.get("/",(req,res)=>{
    res.send("hello world from express js");



});

app.get("/home",(req,res)=>{

    res.send("Hello from home page");
});

app.listen(8000,()=>{
    console.log("A listening the port at 8000")
})

//API
/*
get -read
post-creare
put-update
delete-delet
*/