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

// Wszystkie inserty i create w srodku query text


const queryText = 

`CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) CHECK (
      length(password_hash) >= 8 AND
      length(password_hash) <= 255 AND
      password_hash ~ '[A-Z]' AND         
      password_hash ~ '[0-9]' AND         
      password_hash ~ '[!@#$%^&*()]'      
  ) NOT NULL,
  profile_description TEXT CHECK (length(profile_description) <= 500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CHECK (length(username) >= 3 AND length(username) <= 50),
  CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  account_status VARCHAR(20) DEFAULT 'active' CHECK (
      account_status IN ('active', 'banned', 'suspended')
);`

// node init-db to tworzy tabele i wrzuca, uruchamia i wrzuca do vercela

pool.query(queryText)
  .then(res => {
    console.log('Tabela została utworzona');
    pool.end();
  })
  .catch(e => {
    console.error(e.stack);
    pool.end();
  });