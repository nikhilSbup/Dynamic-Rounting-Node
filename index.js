const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.get("/",function(req,res){
    res.send("It's running...")
})

app.listen(3000,function(){
    console.log("port is running : http://localhost:3000/" )
})