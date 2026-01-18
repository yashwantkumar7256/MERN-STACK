
const mongoose=require('mongoose');


const  productSchema=mongoose.productSchema({
  
    image:String,
    name:String,
    price:Number,
    duscount:{
        type:Number,
        default:0,
    },
    bgcolot:String,
    panelcolor:String,
    textcolor:String,



});
module.exports=mongoose.model('product',productSchema);