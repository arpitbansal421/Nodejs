//The http.createServer () method includes request and respond of web server is sippoded to be supplied
//

const http=require('http');

const server=http.createServer((req,res)=>{
    res.end('Hello from the other Side');
    process.exit();
});
server.listen(8000,()=>{
    console.log("Listening to the port no 8000")
});