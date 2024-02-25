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
    const userId = parseInt(req.params.userId);
    // Pobranie informacji o użytkowniku
    const userQuery = await pool.query('SELECT * FROM users WHERE user_id = $1', [userId]);
    const user = userQuery.rows[0];

    // Zwrócenie danych
    res.json({
      user: user,
    });
  } catch (error) {
    console.error('Error executing query', error.stack);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
