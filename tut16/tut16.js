//The http.createServer () method includes request and respond of web server is sippoded to be supplied
//

const http=require('http');

const server=http.createServer((req,res)=>{
    //console.log(req.url);
    if(req.url==='/'){
        res.end('Hello from the other Side');

    }else if(req.url=="/about"){
        res.end("Hello from about side");
    }

    else if(req.url=="/Contanctus"){
        res.end("Hello from Contanct us");
    }
    else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h1>404 Page does not exit<h1>");
    }
    
});
server.listen(8000,()=>{
    console.log("Listening to the port no 8000")
});

