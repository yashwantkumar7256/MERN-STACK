const express =require('express');
const storeRouter=express.Router();
const path =require('path');

const rootDir = require('../util/path-util');

const {ragisteredHomes}=require('./HostRouter')
storeRouter.get("/",(req , res, next)=>{
    console.log(ragisteredHomes);
   res.render('index',{homes:ragisteredHomes});

});

module.exports=storeRouter;