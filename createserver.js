var express=require('express')
var app=express()
app.get('/a',(req,res)=>res.send("myfirst response"))

//app.get(('/',(req,res)=>res.send("error 404"))

app.listen(3000)