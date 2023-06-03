const biodata={
    name:"Arpit",
    Age:"23",
    Channel:"Thapa technical",
}

//console.log(biodata.Channel);


//

// const jsondata=JSON.stringify(biodata);
// //console.log(jsondata.Channel);
// const objData=JSON.parse(jsondata);

// console.log(objData.Age);

/*
1.Convert it to JSON
2.dusre file me add karna
3.readfile
4.Original
5.Console pe show

*/
const jsondata=JSON.stringify(biodata);
fs=require('fs');
fs.writeFile('json1.json',jsondata,(err)=>{
    
    console.log("Done")
    
})

fs.readFile('json1.json',"utf-8",(err,data)=>{
    const originaldata=JSON.parse(data);
    console.log(originaldata);
})



