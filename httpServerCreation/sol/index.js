// Please don't change the pre-written code
// Import the necessary modules here

// Write your code here
const http = require("http");
const server = http.createServer((req, res)=>{
    console.log(req.url)
    if(req.url=="/"){
        return res.end("Welcome to home Page")
    }
    else if(req.url=="/sai"){
    return res.end("welcome to sai page")
    }
    else if(req.url=="/kiran"){
        res.end("welcome to kiran page")
    }
})
server.listen(8080,()=>{
    console.log("server is listning to port 3100")
})
module.exports = server;
