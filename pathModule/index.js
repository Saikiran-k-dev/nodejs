import path from "path" 
import fs from "fs"
import http from "http"

const absai = path.resolve("src","des","note.txt")
const server = http.createServer((req,res)=>{
    const data = fs.readFileSync(absai).toString()    
    // console.log(data)
    if (req.url=="/sai"){
        res.end(data)
        return
    }
})
// const sai = path.join("src","des","note.txt")

// console.log(sai)
// console.log(absai)
// const data = fs.readFile(sai,(err,r1)=>{
//     console.log(r1.toString())
// })

server.listen(8080)
console.log("server is listning at port 3000")