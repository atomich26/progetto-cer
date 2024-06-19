import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { checkDB } from "./database";

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;

app.set('views', __dirname + './../views');
app.set('view engine', 'twig');

checkDB();

app.get('/', (req: Request, res: Response) => {
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