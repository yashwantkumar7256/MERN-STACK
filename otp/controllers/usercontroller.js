//const { Twilio } = require('twilio');
const otpModel=require('../models/otp');
const otpGenerator=require('otp-generator');
const twilio=require('twilio')

const accountSid=process.env.TWILIO_ACCOUNT_SID;
const authToken=process.env.TWILIO_AUTH_TOKEN

const twilioClaint =new twilio( accountSid , authToken);

const sendOtp = async (req,res)=>{
    try{
             const {phoneNumber}=req.body;
        const otp=otpGenerator.generate(6,{upperCaseAlphabets:false,lowerCaseAlphabets:false,specialChars:false});

    
        const cDate=new Date();
       await otpModel.findOneAndUpdate({phoneNumber},
            {otp, otpExpiration:new Date(cDate.getTime())},
            { upsert:true, new:true, setDefaultsOnInsert:true},

        );
       await twilioClaint.messages.create({
            body:`mar moj :${otp}`,
            to:phoneNumber,
            from:process.env.TWILIO_PHONE_NUMBER
            
        })


         return res.status(200).json({
            success:true,
            msg:'otp send sucessfully'
        });
    }
    catch(error){
        return res.status(400).json({
            success:false,
            msg:error.message
        })
    }
}
module.exports={
    sendOtp
}