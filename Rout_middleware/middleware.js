
const express=require('express');
const app=express();

const reqFilter=require('./route')

const route=express.Router();
route.use(reqFilter);
 
//app.use(reqFilter);

app.get('/',(req,resp)=>{
    resp.send("Welcome to Home Page");
})

app.get('/user',(req,resp)=>{
    resp.send("Welcome to user page ");
})

route.get('/about',(req,resp)=>{
    resp.send('Welcome to about page');
})
route.get('/contanct',(req,resp)=>{
    resp.send('Welcome to Contanct page');
})
app.listen(5000,()=>{
    console.log('Listening to the port 5000');
})
app.use('/',route);