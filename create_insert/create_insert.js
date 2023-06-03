
const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/ecomm",{useNewUrlParser:true,
useUnifiedTopology:true}).then(()=>console.log("Collection is successful")).
catch((err)=>console.log(err));



const playlistSchema=new mongoose.Schema({
    name:{type :String,
        unique:true,
        uppercase:true,
        trim:true,
        // minlength:[2,"minimum 2 letter are allowed"],
        // maxlength:30,



    },
       
    // unique:true,
    
    ctype:{type:String,
        enum:["Front End","Database","Backend"]
     },
    vidios:{type :Number,
        validate(value){
            if(value<0){
                throw new Error("Vidios count should not be negative");
            }
        }
    },
    active:Boolean,
    date:Date
        
     
})

//A Mongoose model is a wrapper on the Moongoose schema

//A Mongoose schema defines the structure of document

//collection creation
const playList=new mongoose.model("PlayList",playlistSchema);

//create or insert  a document

const createDocument=async ()=>{
try{
const jsplaylist=new playList({
    name:"Javascript",
    

    ctype:"Front End",
    vidios:150,
    trim:true,
    
 

    date:new Date(),

    

})


const mongoosePlayList=new playList({
    name:"           Mongo db           ",
    ctype:"Database",
    vidios:5,
    active:true,
    date:new Date(),

    

})
const ExpressPlayList=new playList({
    name:"Express js",
    ctype:"Backend",
    vidios:10,
    active:true,
    date:new Date(),

    

})



const res=await playList.insertMany([jsplaylist,mongoosePlayList,ExpressPlayList]);
console.log(res);}catch(err){
    console.log(err);

}
}



createDocument().then(()=>{
    console.log("Documents added")
}).catch((err)=>{
    console.log("Error created!");
});



