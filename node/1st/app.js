const http =require("http");

const express = require('express');

const app=express();
app.use((req, res, next)=>{
    console.log('holo');
    res.send('<h1>hello</h1>')

})

const server =http.createServer(app);
const port=3000;
server.listen(port,()=>{
    console.log(`server running at : https//loclalhost:${port}`);
});