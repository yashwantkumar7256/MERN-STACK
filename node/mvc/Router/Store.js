const express =require('express');
const storeRouter=express.Router();
const path =require('path');
const storecont=require('./../controller/storeCont');

const rootDir = require('../util/path-util');


storeRouter.get("/",storecont.getHome);

module.exports=storeRouter;