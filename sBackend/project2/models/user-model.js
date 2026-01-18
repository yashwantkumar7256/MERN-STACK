const { Contact } = require('lucide-react');
const mongoose=require('mongoose');



const  userSchema=mongoose.userSchema({
    fullname:String,
    email:String,
    passwork:String,
    cart:{
        type:Array,
        default:[],

    },
    isadmin:Boolean,
    orders:{
        type:Array,
        default:[],
    },
    Contact:String,
    picture:String,
    
});
module.exports=mongoose.model('user',userSchema);