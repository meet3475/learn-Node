const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.method);
    console.log(req.url);
    console.log(req.headers);

    res.writeHead(200, {'Content-type': 'application/json'});
    res.write("done");
    res.end()


})

server.listen(3000, () => {
    console.log("localhost server start at 3000");
})