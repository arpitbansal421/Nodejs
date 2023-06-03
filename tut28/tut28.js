const express=require('express');
const path=require('path');

const app=express();
// relative path absolute
//console.log(__dirname)
//built in middleware
const staticpath=path.join(__dirname,'../public'); 
//app.use(express.static(staticpath));

app.get('/',(_,res)=>{
    
    res.sendFile(`${staticpath}/index.html`);
    
})
app.get('/about',(_,res)=>{
    
    res.sendFile(`${staticpath}/about.html`);
    
})
app.get('*',(_,res)=>{
    res.sendFile(`${staticpath}/nopage.html`);
})
app.listen(8000,()=>{
    console.log("Listening to port 8000")
})




                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           