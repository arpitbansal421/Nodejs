const express=require('express');
const path=require('path');
const port=5000;
const app=express();
// relative path absolute
//console.log(__dirname)
//built in middleware
const staticpath=path.join(__dirname,'../public'); 
//app.use(express.static(staticpath));


//to set the view engine
app.set('view engine','ejs');

//template engine root
app.get("/profile",(_,res)=>{
    const user={
        name:'anil sidhu',
        email:'anil@test.com',
        city:'noida',
        skills:['php','js','panda']
    }
    res.render('index',{user});
        
    })

// app.get("/contact",(_,res)=>{

//     res.sendFile('contact.html');
// })

app.get('/login',(_,res)=>{
    res.render('login');
})

app.listen(5000,(_,resp)=>{
    console.log(`We are listening to the port ${port}`);
})


