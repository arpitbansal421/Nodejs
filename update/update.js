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

//update the document
const updateDocument=async(_id)=>{

    try{

    const res=await playList.FindByIdAndUpdate({_id},{
        $set: {
            name:"Javascript"
        }
    },{
        useFindAndModify:false
    }
    )
    console.log(_id);

    console.log(res);
}

    catch(err){
        console.log("Error has occured!");
    }

}

updateDocument("645cb270f91966867dd3583e").then(()=>{
    console.log("Update is successful");
}).catch((err)=>{
    console.log("Update not successful!");
})










