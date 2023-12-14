// Please don't change the pre-written code
// Import the necessary modules here

// Write your code here
const http = require("http");
const server = http.createServer((req, res)=>{
    res.end("Welcome to node js ninja server");
})
server.listen(8080,()=>{
    console.log("server is listning to port 3100")
})
module.exports = server;
