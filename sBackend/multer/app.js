 const express =require('express');
 const app=express();
 const path =require('path')
 const multer=require('multer')

 
 app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
 const crypto=require('crypto');




// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './public/image/upload')
//   },
//   filename: function (req, file, cb) {
//     crypto.randomBytes(12,(err,bytes)=>{
//         const fn =bytes.toString('hex') + path.extname(file.originalname);
//     })
//     cb(null, fn)
//   }
// })

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/image/upload');
  },

  filename: function (req, file, cb) {
    crypto.randomBytes(12, (err, bytes) => {
      if (err) return cb(err);

      const fn = bytes.toString('hex') + path.extname(file.originalname);
      cb(null, fn);   // ✅ cb yahin call hoga
    });
  }
});

const upload = multer({ storage: storage })


 app.get('/', (req,res)=>{
    res.render("index");

 });
 app.post('/upload',upload.single('img') ,(req,res)=>{
    res.send("file uploded");
    console.log(req.file)
    


 });
 app.listen(3000,()=>{
    console.log('its working');
    
 })