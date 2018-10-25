const express = require('express');
const bodyParser = require('body-parser');
const app =express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(__dirname +'/dist'));





app.listen(8080, ()=>{
    console.log(`running on 8080`)
})