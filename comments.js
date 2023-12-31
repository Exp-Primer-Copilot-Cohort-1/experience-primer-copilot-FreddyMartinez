// Create web server with Node.js

// Import modules
const http = require('http');

// Create server
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello World!</h1>');
});

// Listen on port 3000
server.listen(3000, () => {
    console.log('Server started on port 3000');
});
