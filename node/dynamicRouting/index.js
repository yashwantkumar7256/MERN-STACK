 const express = require('express');
 const app=express();
const path=require('path');

app.set('view engine' , "ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));



 app.get('/',(req, res)=>{
    res.render('first');
 })
 app.get('/:name',(req,res)=>{
    res.send(`welcome ${req.params.name}`)
 });
  app.get('/:name/:name',(req,res)=>{
    res.send(`welcome ${req.params.name}`)
 })
 app.use((req,res)=>{
   res.send("404 page not found")
 });
 app.listen(3000,(()=>{
    console.log("it is running")
 }));