require('dotenv').config({ path: './.env.local' });
const { Pool } = require('pg');
console.log("Connection String:", process.env.POSTGRES_URL);


const connectionString = process.env.POSTGRES_URL + '?sslmode=require';

const pool = new Pool({
  connectionString: connectionString,
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});

const createTable = `
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(150),
  password VARCHAR(255) NOT NULL
);
`;

const insertSampleData = `
INSERT INTO users (name, email, password)
VALUES 
('Jan Kowalski', 'jan@example.com', 'password123'), 
('Anna Nowak', 'anna@example.com', 'password123');
`;

async function initDb() {
  try {
    await pool.query(createTable);
    await pool.query(insertSampleData);
    console.log('Tabela użytkowników została stworzona i wypełniona danymi.');
  } catch (error) {
    console.error('Wystąpił błąd podczas inicjalizacji bazy danych:', error);
  }
}

initDb().then(() => process.exit());