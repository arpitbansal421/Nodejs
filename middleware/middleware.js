const express=require('express');
const app=express();

const reqFilter=(req,res,next)=>{

    if(!req.query.age){
        res.send("Please provide your age");

    }else if(req.query.age<18){
        res.send('You cannot acess this page');
    }
    else{

    
        next();}
}
app.use(reqFilter);

app.get('/',(req,resp)=>{
    resp.send("Welcome to Home Page");
})

app.get('/user',reqFilter,(req,resp)=>{
    resp.send("Welcome to user page ");
})

app.get('/contanct',(req,resp)=>{
    resp.send('Welcome to contanct page');
})
app.listen(5000,()=>{
    console.log('Listening to the port 5000');
})