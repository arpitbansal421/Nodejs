const http=require('http');
const data=require('./data')

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type':'application\json'})
    res.write(JSON.stringify(data));
    res.end();
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to the port no 8000");
})