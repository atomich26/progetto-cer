const express = require("express");
const APP = express();
const PORT = 3000;

// Imposta il template engine HTML Pug
APP.set('view engine', 'pug');

APP.get('/', (req, res) => {
    res.render("index", { title: "Soundwave", message: "Benvenuto in Soundwave " });
});

APP.get("/about", (req, res) => {
    res.send("About page");
});

APP.get("/policy", (req, res) => {
    res.send("Policy page");
});

APP.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});