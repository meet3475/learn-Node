const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const method = req.method.toLowerCase()
    const path = url.parse(req.url, true).pathname
    const dataPath = "./src/asset/data/data.json"

    // console.log(method, path); 

    if (method === 'get' && path === '/insitute') {
        fs.readFile(dataPath, "utf-8", (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-type': 'application/json' });
                res.end(JSON.stringify({ error: err.message }))
            }

            res.writeHead(200, { 'Content-type': 'application/json' });
            res.write(JSON.stringify(data));
            res.end()
        })
    }


})

server.listen(3000, () => {
    console.log("Server start at 3000");
})