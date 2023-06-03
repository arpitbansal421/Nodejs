const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/ecomm",{useNewUrlParser:true,
useUnifiedTopology:true}).then(()=>console.log("Collection is successful")).
catch((err)=>console.log(err));