const mongoose=require("mongoose");
const db=mongoose.connect("mongodb://127.0.0.1:27017/ecomm",{useNewUrlParser:true,
useUnifiedTopology:true}).then(()=>console.log("Collection is successful")).
catch((err)=>console.log(err));





const playlistSchema=new mongoose.Schema({
    name:String,
       
 
    ctype:String,
    vidios:Number,
    active:Boolean,
    date:Date
        
    
})

//A Mongoose model is a wrapper on the Moongoose schema

//A Mongoose schema defines the structure of document

//collection creation
const playList=new mongoose.model("PlayList",playlistSchema);

const readDocument=async()=>{

    try{
    const result =await playList.find({$or:[{ctype:"backend"},{active:true}]}).sort("name:1");

    console.log(result);}
    catch(err){
        console.log("Error in the document");
    }
    


}
readDocument().then(()=>{
    console.log("Document created properly");
}).catch((err)=>{
    console.log("Error occured in the document");
    
});
