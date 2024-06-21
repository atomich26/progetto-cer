import { Sequelize } from 'sequelize';
import { Faq } from './models/faq';

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbName = process.env.DB_NAME;
const dbPassword = process.env.DB_PASSWORD;

export const connection = new Sequelize(`postgres://${dbUser}:${dbPassword}@${dbHost}:5432/${dbName}`);

export async function checkDB() {
    try {
        await connection.authenticate();
        console.log('Connessione stabilita correttamente!');
    } catch (error) {
        console.error('Impossibile collegarsi al database: ', error);
    }
}

export async function getAllArticlesDesc(){
    
}

export async function getArticle(id:BigInteger) {
    
}

export async function getAllCategories() {
    
}

export async function getArticleByCat(id: BigInteger) {
    
}

export async function getAllFaq() {
    return await Faq.findAll();
}