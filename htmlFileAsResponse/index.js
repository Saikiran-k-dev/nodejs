const http  = require("http")
const fs = require("fs")
const server = http.createServer((req,res)=>{
    const data = fs.readFileSync('index.html').toString()
    return res.end(data)
})
server.listen(3000)
console.log('server is running in port 3000')

