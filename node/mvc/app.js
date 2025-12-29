
const path =require('path');

const http=require('http');

const express = require('express');
const rootDir = require('./util/path-util');
const {Hostrouter}=require('./Router/HostRouter');
const Store=require('./Router/Store');
const errorcont=require('./controller/errorcont')




const bodyParser = require('body-parser');
const app= express('express');
app.set('view engine','ejs');
app.set('views','views');

app.use(express.static(path.join(rootDir,'public')));
app.use(bodyParser.urlencoded({extended:true}));





app.use(Store);
app.use('/host',Hostrouter);

app.use(errorcont.get404);




const server = http.createServer(app);
const port = 3000;
server.listen(port,()=>{
    console.log(`server : localhoist : ${port}`)
})

