import express from "express"

const server = express()

server.get('/',(req,res)=>{
    if (req.url=="/sai"){
        res.send("sai says hi")
    }
    else{
    res.send("hi")
    }
})

server.listen(5000)