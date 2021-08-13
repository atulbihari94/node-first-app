const http = require('http');
const PORT =3000;

const server = http.createServer((req,res) => {
    // console.log(req);
    // process.exit();
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</head></title>');
    res.write('<body><h1>Hello From my node.js</body><h1>');
    res.write('</html>');
});

server.listen(PORT, console.log(`Server listening on the port ${PORT}`));