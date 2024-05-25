const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export default async (req, res) => {
  if (req.method === 'GET') {
    try {
      const userId = parseInt(req.query.user_Id);

      if (isNaN(userId)) {
        return res.status(400).json({ error: 'userId musi być liczbą całkowitą' });
      }

      // Pobranie tweetów użytkownika
      const userTweetsQuery = await pool.query('SELECT * FROM tweets WHERE user_id = $1 ORDER BY created_at DESC', [userId]);
      const userTweets = userTweetsQuery.rows;

      if (userTweets.length === 0) {
        return res.status(404).json({ message: "Brak tweetów dla tego użytkownika." });
      }

      // Zwrócenie danych
      res.status(200).json({
        userTweets,
      });
    } catch (error) {
      console.error('Błąd wykonania zapytania', error.stack);
      res.status(500).send('Błąd serwera');
    }
  } else {
    // Odpowiedź dla innych metod niż GET
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Metoda ${req.method} nie jest dozwolona`);
  }
};
