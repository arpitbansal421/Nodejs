//3rd way

const fs=require('fs');
const http=require('http');

const server=http.createServer();

server.on("request",(req,res)=>{
    const rsteam=fs.createReadStream('tut24.txt');
    rsteam.pipe(res);
})

server.listen(8000);