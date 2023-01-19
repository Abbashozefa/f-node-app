const {readFileSync,writeFileSync} = require('fs');
const express = require('express');
const path = require('path')
const res = require('express/lib/response');
const app = express();

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'/index.html'))

});
app.listen(5000,()=>console.log('http://localhost:5000/'));