const express =require("express");
const router=new express.Router();
const Student=require("../model/model");
router.get("/thapa",(req,res)=>{

    res.send("Hello Whatsup guys");
  })



  router.post("/students",async(req,res)=>{

    try{
    const user =new Student(req.body);


  const createUser  =await user.save();
  res.status(201).send(createUser);}catch(e){

    res.status(400).send(e);

  }


})

router.get("/students",async (req,res)=>{

    try{
      const studentData= await  Student.find();
      res.send(studentData);

    }catch(e){
        res.send(e);

    }

})

//get the details of the individual student
router.get("/students/:id",async(req,res)=>{

    try{

        const _id=req.params.id;
       const studentData= await Student.findById({_id})
       if(!studentData){

        res.status(404).send();
       }else{
       

        res.status(500).send(studentData);}



    }catch(e){

    }
})

//searching through name
router.get("/students/:name",async(req,res)=>{

    try{

        const _name=req.params.name;
       const studentData= await Student.findById({_name})
       if(!studentData){

        res.status(404).send();
       }else{
        

        res.status(500).send(studentData);}



    }catch(e){

    }
})


//update the students by id

// Update a studrouter
router.patch("/students/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const updateStudent = await Student.findByIdAndUpdate(_id, req.body, {
        new: true,
      });
      if (!updateStudent) {
        return res.status(404).send("Student not found");
      }
      console.log(updateStudent);
      res.status(200).send(updateStudent);
    } catch (e) {
      res.status(404).send(e);
    }
  });

  ///create a new router


  //2 We need to define the router


  //3:We need to register the router


  //delete
  router.delete("/students/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
       const Student_del= await Student.findByIdAndDelete(_id);                                        
       if(!req.params.id){
        return res.status(404).send("Student not found");

       }
       res.send(Student_del);

    }catch(e){
        res.status(500).send("Server error!");

    }



  })
 

// router.listen(port,()=>{
//     console.log("Connection is set up at port "+port);
// });


  module.exports=router;














