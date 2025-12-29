const express =require('express');
const Hostrouter=express.Router();
const path =require('path');

const rootDir = require('../util/path-util');
let hostcont=require('./../controller/hostCont');


Hostrouter.get('/add-home',hostcont.getAddHome );




Hostrouter.post('/add-home',hostcont.postAddHome );

exports.Hostrouter=Hostrouter;
