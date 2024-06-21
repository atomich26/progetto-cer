import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { checkDB, getAllFaq } from "./database";

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;

app.use(express.static('public'))

app.set('views', __dirname + './../views');
app.set('view engine', 'twig');

checkDB();

app.get('/', async (req: Request, res: Response) => {
    res.render("index.twig", { title: "Soundwave | Music as lifestyle", nav: "home"});
});

app.get("/app", async (req, res) => {
    res.render("about.twig", {title: "Soundwave | Scarica", nav: "app"});
});

app.get("/faq", async (req, res) => {
    const faqs = getAllFaq();
    res.render("faq.twig", {title: "Soundwave | FAQ", nav: "faq", faqs: faqs});
});

app.get("/charts", async (req, res) => {
    res.render("about.twig", {title: "Soundwave | Classifiche", nav: "charts"});
});

app.get("/about", async (req, res) => {
    res.render("about.twig", {title: "Soundwave | Chi siamo", nav: "about"});
});

app.get("/login", async (req, res) => {
    res.render("login.twig", {title: "Soundwave | Accedi", nav: "login"});
});

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});