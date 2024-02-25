const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

// Funkcja asynchroniczna obsługująca żądanie GET
export default async (req, res) => {
  if (req.method === 'GET') {
    try {
      // Pobranie wszystkich tweetów
      const allTweetsQuery = await pool.query('SELECT * FROM tweets ORDER BY created_at DESC');
      const allTweets = allTweetsQuery.rows;

      // Zwrócenie danych
      res.status(200).json({
        allTweets,
      });
    } catch (error) {
      console.error('Error executing query', error.stack);
      res.status(500).send('Server error');
    }
  } else {
    // Odpowiedź dla innych metod niż GET
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
