const express =require('express');
const Hostrouter=express.Router();
const path =require('path');

const rootDir = require('../util/path-util');

Hostrouter.get('/add-home', (req,res, next)=>{
      res.sendFile(path.join(rootDir,"views","add-home.html"));
});

const ragisteredHomes=[];

Hostrouter.post('/add-home', (req,res, next)=>{
     
      ragisteredHomes.push(req.body);
     
      res.sendFile(path.join(rootDir,"views","addsucc.html"));
});
exports.Hostrouter=Hostrouter;
exports.ragisteredHomes=ragisteredHomes