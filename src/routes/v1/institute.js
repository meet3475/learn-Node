const express = require("express");

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('Institute Get Api');
})

routes.post('/', (req, res) => {
    res.send('Institute Post Api');
})

routes.put('/', (req, res) => {
    res.send('Institute Put Api');
})

routes.delete('/', (req, res) => {
    res.send('Institute Delete Api');
})

module.exports = routes;