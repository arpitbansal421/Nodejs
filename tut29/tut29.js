const express=require('express');
const path=require('path');
const port=8000;
const app=express();
// relative path absolute
//console.log(__dirname)
//built in middleware
const staticpath=path.join(__dirname,'../public'); 
//app.use(express.static(staticpath));


//to set the view engine
app.set('view engine','hbs');

//template engine root
app.get("",(req,res)=>{
    res.render('index',{
        channelname:"thapa"
    })

})
res.end();




app.listen(8000,()=>{
    console.log("Listening to port 8000")
})




                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           