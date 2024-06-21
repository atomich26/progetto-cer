import express, { Request, Response } from "express";
import {getAllFaq, getAllTracks } from "./db/database";
import { checkDB } from "./db/connection";

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('public'))

app.set('views', __dirname + './../views');
app.set('view engine', 'twig');

checkDB();

app.get('/', async (req: Request, res: Response) => {
    res.render("index.twig", { title: "Soundwave | Music as lifestyle", nav: "home"});
});

app.get("/faq", async (req, res) => {
    const faqs = await getAllFaq();
    res.render("faq.twig", {title: "Soundwave | FAQ", nav: "faq", faqs: faqs});
});

app.get("/charts", async (req, res) => {
    const tracks = await getAllTracks();
    res.render("charts.twig", {title: "Soundwave | Classifiche", nav: "charts", tracks: tracks});
});

app.get("/login", async (req, res) => {
    res.render("login.twig", {title: "Soundwave | Accedi", nav: "login"});
});

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});