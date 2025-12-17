const http=require('http');
console.log('i am hare');
const requestHandler= (req, res) => {
    console.log('i am  h');
    
}
const server=http.createServer(requestHandler);
server.listen(5000);