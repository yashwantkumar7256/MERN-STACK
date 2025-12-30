

const path =require('path');
const rootDir = require('../util/path-util');
const Home=require('./../models/Home');





exports.getAddHome=((req,res, next) =>{
      res.render('add-home',{pageTitle:'host your home'});
});

exports.postAddHome=((req,res, next)=>{
      const  {houseName,price,location,rating,photoUrl}=req.body;
      const newHome= new Home(houseName,price,location,rating,photoUrl);
      newHome.save();

       
  res.render("home-added", {pageTitle: 'Home Hosted'});
});



