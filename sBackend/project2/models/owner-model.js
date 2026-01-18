const { Contact } = require('lucide-react');
const mongoose=require('mongoose');



const  ownerSchema=mongoose.ownerSchema({
    fullname:{
        type:String,
        minLength:3,
        trim:true
    },
    email:String,
    passwork:String,
    products:{
        type:Array,
        default:[],

    },
   

    Contact:String,
    picture:String,
    
});
module.exports=mongoose.model('owner',ownerSchema);