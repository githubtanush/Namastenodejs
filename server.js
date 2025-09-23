// const http = require("node:http");
// const server = http.createServer();
// server.listen(7777);
// //now by only these 3 lines my server is created and ready for listen the request

const http = require("node:http");
const server = http.createServer(function(req,res){
    if(req.url === "/getsecretData"){
        res.end("There is no secret data"); 
    }
    res.end("Hello world");
});
server.listen(7777);