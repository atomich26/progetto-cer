import { Sequelize } from 'sequelize';

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbName = process.env.DB_NAME;
const dbPassword = process.env.DB_PASSWORD;

const sequelize = new Sequelize(`postgres://${dbUser}:${dbPassword}@${dbHost}:5432/${dbName}`);

export async function checkDB() {
    try {
        await sequelize.authenticate();
        console.log('Connessione stabilita correttamente!');
    } catch (error) {
        console.error('Impossibile collegarsi al database: ', error);
    }
}