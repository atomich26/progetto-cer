"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
app.use(express_1.default.static('public'));
app.set('views', __dirname + './../views');
app.set('view engine', 'twig');
(0, database_1.checkDB)();
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.render("index.twig", { title: "Soundwave | Music as lifestyle", nav: "home" });
}));
app.get("/app", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.render("about.twig", { title: "Soundwave | Scarica", nav: "app" });
}));
app.get("/faq", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const faqs = (0, database_1.getAllFaq)();
    res.render("faq.twig", { title: "Soundwave | FAQ", nav: "faq", faqs: faqs });
}));
app.get("/charts", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.render("about.twig", { title: "Soundwave | Classifiche", nav: "charts" });
}));
app.get("/about", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.render("about.twig", { title: "Soundwave | Chi siamo", nav: "about" });
}));
app.get("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.render("login.twig", { title: "Soundwave | Accedi", nav: "login" });
}));
app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});
