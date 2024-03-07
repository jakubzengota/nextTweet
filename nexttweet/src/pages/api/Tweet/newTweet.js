const { Pool } = require('pg');
const pool = new Pool({
  // Twoja konfiguracja połączenia z bazą danych
  connectionString: process.env.DATABASE_URL, // Przykład użycia zmiennej środowiskowej
});

export default async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { user_id, content } = req.body;

      if (content.length > 280) {
        return res.status(400).send('Tweet content exceeds the maximum length of 280 characters.');
      }

      const insertTweetQuery = `
        INSERT INTO tweets (user_id, content) VALUES ($1, $2)
        RETURNING tweet_id, user_id, content, created_at, updated_at, likes_count, retweets_count, replies_count, status;
      `;
      const newTweet = await pool.query(insertTweetQuery, [user_id, content]);
      const tweet = newTweet.rows[0];

      res.status(201).json({
        message: "Tweet successfully created",
        tweet,
      });
    } catch (error) {
      console.error('Error executing query', error.stack);
      res.status(500).send('Server error');
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};