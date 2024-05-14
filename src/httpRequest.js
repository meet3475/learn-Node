const http = require("http")
const url = require("url")
const fs = require("fs")

const server = http.createServer((req, res) => {
    const method = req.method.toLocaleLowerCase()
    const path = url.parse(req.url, true).pathname //.query.pid
    const dataPath = "./src/asset/data/data.json"

    // console.log(method,path);

    if (method === 'get' && path === '/institute') {

        const id = url.parse(req.url, true).query.id;

        console.log(id);


        fs.readFile(dataPath, "utf-8", (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify({ error: err.message }))
            }

            if (id) {
                const existData = JSON.parse(data);
                const obj = existData.find((v) => v.id == id)

                if (obj) {
                    res.writeHead(200, { 'Content-Type': 'application/json' })
                    res.write(JSON.stringify(obj))
                    res.end()
                } else {
                    res.writeHead(404, { 'Content-Type': 'application/json' })
                    res.write(JSON.stringify({ message: "Data not Found." }))
                    res.end()
                }
            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' })
                res.write(JSON.stringify(data))
                res.end()
            }


        })
    } else if (method === 'post' && path === '/institute') {
        let body = ''

        req.on("data", (chunk) => {
            body += chunk

        })

        fs.readFile(dataPath, "utf-8", (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify({ error: err.message }))
            }

            const existData = JSON.parse(data);
            existData.push(JSON.parse(body))
            console.log(existData);

            fs.writeFile(dataPath, JSON.stringify(existData), (err) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'application/json' })
                    res.end(JSON.stringify({ error: err.message }))
                }

                res.end(JSON.stringify({ message: "data add sucessfully." }))
            })
        })

    } else if (method === 'delete' && path === '/institute') {

        const id = url.parse(req.url, true).query.id;
        console.log(id);

        if (id) {
            fs.readFile(dataPath, "utf-8", (err, data) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'application/json' })
                    res.end(JSON.stringify({ error: err.message }))
                }

                const existData = JSON.parse(data);

                const obj = existData.filter((v) => v.id != id)

                console.log(obj);

                if (obj) {
                    fs.writeFile(dataPath, JSON.stringify(obj), (err) => {
                        if (err) {
                            res.writeHead(500, { 'Content-Type': 'application/json' })
                            res.end(JSON.stringify({ error: err.message }))
                        }

                        res.end(JSON.stringify({ message: "data delete sucessfully." }))
                    })
                } else {
                    res.writeHead(404, { 'Content-Type': 'application/json' })
                    res.write(JSON.stringify({ message: "Data not Found." }))
                    res.end()
                }
            })
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.write(JSON.stringify({ message: "invalid id" }))
            res.end()
        }
    }
})



server.listen(3000, () => {
    console.log("Server Starte at port 3000.");
})