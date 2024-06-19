"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = require("./database");
const app = (0, express_1.default)();
dotenv_1.default.config();
const port = process.env.PORT || 3000;
app.set('views', __dirname + './../views');
app.set('view engine', 'twig');
(0, database_1.checkDB)();
app.get('/', (req, res) => {
    res.render("index.twig", { title: "Soundwave", message: "Benvenuto in Soundwave!" });
});
app.get("/about", (req, res) => {
    res.send("About page");
});
app.get("/policy", (req, res) => {
    res.send("Policy page");
});
app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});
