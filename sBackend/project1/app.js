const express =require('express');
const app=express();
const path =require('path')
const userModel=require('./models/UserData');
const postModel=require('./models/post');

const bcrypt=require('bcrypt')
const cookie=require('cookie-parser');
const jwt=require('jsonwebtoken')

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(cookie())


app.get('/', (req,res)=>{
    res.render("index");
});
app.get('/edit/:id', async (req,res)=>{
    let post=await postModel.findOne({_id:req.params.id}).populate('user');
  
    res.render('edit', {post});
});
app.post('/update/:id', async (req,res)=>{
    let post=await postModel.findOneAndUpdate({_id:req.params.id},{content:req.body.content});
    
    res.redirect('/profile');

})



app.get('/profile',isLogedIn ,async (req,res)=>{
  let user= await userModel.findOne({email:req.user.email}).populate('posts');
  
   
    res.render('profile',{user});

});
app.post('/create', async (req,res)=>{
   const {name ,email,password,age}=req.body;

   let user= await userModel.findOne({email});
   if(user) return res.status(500).send("you are already ragistered")
  bcrypt.genSalt(10,(err,salt)=>{
    bcrypt.hash(password,salt , async(err,hash)=>{

        const created= await userModel.create({
        name,
        email,
        password:hash,
        age,
     });
      let token =jwt.sign({email},'shhh')
      res.cookie('token',token)
  res.send("you are registered");

    })
  })
});

app.post('/post',isLogedIn, async (req,res)=>{
  let user=await userModel.findOne({email:req.user.email});
 
  const {content}=req.body;
  let post = await postModel.create({
    user:user._id,
    content
  });
  user.posts.push(post._id);
  await user.save()
  res.redirect('/profile')
  
       

});

app.get('/login',(req,res)=>{
   
    res.render("login")
});
app.post('/login' , async (req,res)=>{
    const {email,password}=req.body;

    let user= await userModel.findOne({email});
    if(!user) return res.send("something went wrong");

    bcrypt.compare(password,user.password, (err,result)=>{
        if(result){
            let token=jwt.sign({email:user.email} ,'shhh')
            res.cookie('token',token)

            res.redirect('/profile');
        }else{
            res.send("something gone wrong")
        }
    })
});
app.get('/logout',(req,res)=>{
    res.cookie("token",'');
    res.send("logout ")
});
 function isLogedIn(req,res,next){
    if(req.cookies.token==='') return res.send('you must be login first');
    else{
        let data=jwt.verify(req.cookies.token, 'shhh')
         req.user=data;
    next();

    }
   
}

app.listen(3000,()=>{
    console.log("working")
})

