const http  = require("http")
const fs = require("fs")

const server = http.createServer((req,res)=>{
    const data = fs.readFileSync("index.html").toString
    if (req.url=="/sai"){
        return res.end(data)
    }
server.listen(3100,()=>{
    console.log("server is listning in port 3100")
})
}
)