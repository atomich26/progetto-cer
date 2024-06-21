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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllFaq = exports.getArticleByCat = exports.getAllCategories = exports.getArticle = exports.getAllArticlesDesc = exports.checkDB = exports.connection = void 0;
const sequelize_1 = require("sequelize");
const faq_1 = require("./models/faq");
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbName = process.env.DB_NAME;
const dbPassword = process.env.DB_PASSWORD;
exports.connection = new sequelize_1.Sequelize(`postgres://${dbUser}:${dbPassword}@${dbHost}:5432/${dbName}`);
function checkDB() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield exports.connection.authenticate();
            console.log('Connessione stabilita correttamente!');
        }
        catch (error) {
            console.error('Impossibile collegarsi al database: ', error);
        }
    });
}
exports.checkDB = checkDB;
function getAllArticlesDesc() {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
exports.getAllArticlesDesc = getAllArticlesDesc;
function getArticle(id) {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
exports.getArticle = getArticle;
function getAllCategories() {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
exports.getAllCategories = getAllCategories;
function getArticleByCat(id) {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
exports.getArticleByCat = getArticleByCat;
function getAllFaq() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield faq_1.Faq.findAll();
    });
}
exports.getAllFaq = getAllFaq;
