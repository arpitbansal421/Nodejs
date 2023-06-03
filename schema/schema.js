//Schema
/*A Mongoose schema defines the structures of documents


*/
const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/ecomm",{useNewUrlParser:true,
useUnifiedTopology:true}).then(()=>console.log("Collection is successful")).
catch((err)=>console.log(err));
const playlistSchema=new mongoose.Schema({
    name:{type:String,
        required:true
    },
    ctype:String,
    vidios:Number,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
})

//A Mongoose model is a wrapper on the Moongoose schema
//A Mongoose schema defines the structure of document

//collection creation
const playList=new mongoose.model("PlayList",playlistSchema);