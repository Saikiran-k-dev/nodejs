import http from "http"

const serverListner = 3100

const server = http.createServer((req,res)=>{
    let body=""
    if(req.method=="POST"){
        // Expecting data from client
        req.on("data",(chunk)=>{
            body+=chunk.toString()
        })
        req.on("end",()=>{
            console.log(body)
            res.end("data is receiced")
        })
        
    }
    else{
    res.end("hi")
    }
})
server.listen(serverListner)
console.log("the server is listning in "+3100+" address")