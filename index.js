const express = require('express')
let app = express()


app.get('/pingtest',(req,res)=>{
    console.log()
    return res.status(200).json({message:`ping at ${new Date()}`})
})

app.listen(3110,()=>{
    console.log(`server is running on ${3110}`)
})