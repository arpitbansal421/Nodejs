const http=require('http');
const server=http.createServer((req,res)=>{
    console.log(req);
    res.setHeader('Content-Type','text/html');
    res.write('<html>')
    res.write('<head><title>My first page</title></head>')
    res.write('<body><h1>Hello from nodejs server </h1></body>')
    res.write('</html>')
    res.end();
    process.end()


})
server.listen(3000);

