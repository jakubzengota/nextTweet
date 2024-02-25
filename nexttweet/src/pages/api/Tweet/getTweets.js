const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3000;

// Konfiguracja połączenia z bazą danych
const pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
  });
  pool.connect()
    .then(() => console.log('Połączono z bazą danych'))
    .catch(err => console.error('Błąd połączenia z bazą danych', err));
  
app.use(express.json());

// Endpoint do pobierania informacji o userze i jego tweetach oraz wszystkich tweetach
app.get('/user/:userId', async (req, res) => {
  try {
    // Pobranie wszystkich tweetów
    const allTweetsQuery = await pool.query('SELECT * FROM tweets');
    const allTweets = allTweetsQuery.rows;

    // Zwrócenie danych
    res.json({
      allTweets: allTweets,
    });
  } catch (error) {
    console.error('Error executing query', error.stack);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
