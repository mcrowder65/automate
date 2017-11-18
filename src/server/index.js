const ExpressRestMongo = require("express-rest-mongo");
import express from "express";

const CustomRoutes = new express.Router();

CustomRoutes.route("/ping").get((req, res) => {
    res.send("This is a custom route!");
});
//eslint-disable-next-line
const app = new ExpressRestMongo.default({
    port: 3000,
    mongoPort: 27017,
    db: "automate",
    indexFile: "index.html",
    buildFolder: "build",
    customRoutes: CustomRoutes
});

app.run();