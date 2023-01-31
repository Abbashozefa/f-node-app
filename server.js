const {readFileSync,writeFileSync} = require('fs');
const ejs = require("ejs");
const express = require('express');
const bodyParser = require("body-parser")
const path = require('path');

const res = require('express/lib/response');
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/trial", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const contactSchema = {
    email: String,
    query: String,
  };

    
const Contact = mongoose.model("Contact", contactSchema);

const app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/home', (req,res)=>{
    res.sendFile(path.join(__dirname,'/index.html'))

});
app.post("/home", function (req, res) {
    const contact = new Contact({
        email: req.body.email,
        query: req.body.query,
    });
    
    contact.save(function () {
        res.redirect("/home");
    //     if (err) {
    //         res.redirect("/error");
    //     } else {
    //         res.redirect("/home");
    //     }
    });
 })
app.listen(5000,()=>console.log('http://localhost:5000/'));