const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello world');
        res.end();
    }
    if (req.url === '/api/cources') {
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log('Server starting at ' + PORT);
});