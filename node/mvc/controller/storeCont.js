const{registeredHomes}=require('./hostCont');

exports.getHome=(req , res, next)=>{
    console.log(registeredHomes);
   res.render('index',{homes:registeredHomes});

};