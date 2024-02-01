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

const queryText =
`CREATE TABLE IF NOT EXISTS test (
);`

pool.query(queryText)
  .then(res => {
    console.log('Tabela została utworzona');
    pool.end();
  })
  .catch(e => {
    console.error(e.stack);
    pool.end();
  });