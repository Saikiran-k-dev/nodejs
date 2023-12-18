const http = require("http");
const server = http.createServer((req, res)=>{
    res.end("Welcome to node js ninja server");
})
server.listen(3100,()=>{
    console.log("server is listning to port 3100")
})