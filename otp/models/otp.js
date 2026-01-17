const mongoose =require('mongoose')

 const otpSchema= new mongoose.Schema({
     phoneNumber:{
        type:String,
        required:true
     },
     otp:{
        type:String,
        required:true
     },
     otpExiretion:{
        type:Date,
        default:Date.now,
        get:(otpExpiration)=>otpExpiration.getTime(),
        get:(otpExpiration)=>new Date(otpExpiration)
     }



 })
 module.exports=mongoose.model('otp', otpSchema)