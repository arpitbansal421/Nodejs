const fs=require('fs');
const http=require('http');

const server=http.createServer();

server.on("request",(req,res)=>{
    // console.log("hi");
    // var fs=require('fs');

    // fs.readFile("tut23.txt",(err,data)=>{
    //     if (err) return console.error(err);
    //     res.end(data.toString());
    // })

    const rsteam=fs.createReadStream('tut233.txt');
    rsteam.on('data',(chunkdata)=>{
         console.log("hi");
        res.write(chunkdata);
        

    })
    rsteam.on('end',()=>{
        res.end();
        
    });
    rsteam.on('error',(err)=>{
        console.log(err);
        res.end('file not found');
    })

});
server.listen(5050);