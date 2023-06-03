const express=require('express')
const path=require('path');
const app=express();

const port =8000;
//const publicpath=path.join(__dirname,'../public')

app.set('view engine','ejs');

app.get("/Profile",(_,resp)=>{
    
    resp.render('Profile');
})

app.listen(port,()=>{
    console.log(`We are listening the port ${port}`);
})

