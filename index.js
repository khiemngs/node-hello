const http = require('http');
const port = process.env.PORT || 3000;
 
let handleRequest = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.write('Hi There!');
    response.end();
};
 
http.createServer(handleRequest).listen(port);
