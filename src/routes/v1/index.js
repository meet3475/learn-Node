const express = require("express");

const routes = express.Router();

const instituteRoute = require("./institute");

routes.use("/institute", instituteRoute)

module.exports = routes;