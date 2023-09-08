const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const PORT = 3000;

const html = fs.readFileSync('./index.html');

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(html);

    if(req.method === 'GET') console.log("GET received");
    if(req.method === 'POST') {
        console.log("POST received");

        var data = '';

        req.on('data', (chunk) => {
            data += chunk;
        }).on('end', () => {
            console.log(data);
        });

    }

    res.end();
});

server.listen(PORT, () => {
    console.log("Server has started running...");
});
