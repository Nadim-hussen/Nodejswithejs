const express = require('express');
const app = express()
const ejs = require('ejs')
const path = require('path')

const templatePath = path.join(__dirname,'./templates/views');
app.set("view engine","ejs")
app.set("views",templatePath);

app.use(express.urlencoded({extended:true}))

let pLanguages = []
app.get("/",(req,res)=>{
    

    res.render('index',{pLang:pLanguages})
})
app.post("/",(req,res)=>{
    const pLanguage = req.body.pLanguages
    pLanguages.push(pLanguage)
    
    res.redirect("/")
})
app.get("/contact",(req,res)=>{
    res.send("hello from contact")
})
app.listen(8000,()=>{
    console.log("listening at port 8000")
})