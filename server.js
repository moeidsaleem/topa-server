const express = require('express');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(__dirname +'/dist'));

const app = express();




app.listen(8080, ()=>{
    console.log(`running on 8080`)
})