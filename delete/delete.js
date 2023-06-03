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


//Delete the document
const deleteDocument =async(_id)=>{

    try{

    const result=await playList.findByIdAndDelete({_id});

    console.log(result);
}catch(err){
        console.log("Error occured in the delete document!");
    }


}

deleteDocument('645c8a1f6585bff3bebd014e').then(()=>{
    console.log("Delete function is successful")
}).catch((err)=>{
    console.log("Error occured!");
});