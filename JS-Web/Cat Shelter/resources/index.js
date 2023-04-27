const http = require('http');
const port = 3000;

http.createServer((req,res) => {
    res.writeHead(200,{
        'Content-Type': 'text/plain'
    })
    res.write('Hello');
    res.end();
}).listen(port, () => {
    console.log('Server is listening on port: ', port);
     
    });

