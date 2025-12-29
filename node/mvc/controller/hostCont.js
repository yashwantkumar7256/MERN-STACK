

const path =require('path');
const rootDir = require('../util/path-util');


const registeredHomes=[];


exports.getAddHome=((req,res, next) =>{
      res.render('add-home',{pageTitle:'host your home'});
});

exports.postAddHome=((req,res, next)=>{
     
       registeredHomes.push(req.body);
  res.render("home-added", {pageTitle: 'Home Hosted'});
});

exports.registeredHomes=registeredHomes;

