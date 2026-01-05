const express =require('express');
const app = express();
const userModel=require('./usermodel')

app.get("/", (req,res)=>{
    res.send('hello')
});
app.get("/create",async (req,res)=>{
 const userdata = await userModel.create({
    name:'yash raj',
    username:'raj',
    email:'yashwnat@gmail.com'
   })
   res.send(userdata)
});
app.get("/update",async (req,res)=>{
 let users = await userModel.findOneAndUpdate({username:'raj'}, {name:"ramraj"},{new:true});
   res.send(users);
});

app.get("/read",async (req,res)=>{
 let users = await userModel.find();
   res.send(users)
});
app.get("/delete",async (req,res)=>{
 let users = await userModel.findOneAndDelete({username:'raj'});
   res.send(users)
});

app.listen(3000,()=>{
    console.log('its running')
})