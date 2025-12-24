
const path =require('path');

const http=require('http');

const express = require('express');
const rootDir = require('./util/path-util');
const Hostrouter=require('./Router/HostRouter');
const Store=require('./Router/Store');

const bodyParser = require('body-parser');
const app= express('express');

app.use(express.static(path.join(rootDir,'public')));
app.use(bodyParser.urlencoded({extended:true}));





app.use(Store);
app.use('/host',Hostrouter);


app.use( (req,res, next)=>{
    res.statusCode=404;
   res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404</title>
    <h1>page not found 404</h1>
</head>
<body>
    
</body>
</html>`)
});

const server = http.createServer(app);
const port = 3003;
server.listen(port,()=>{
    console.log(`server : localhoist : ${port}`)
})

