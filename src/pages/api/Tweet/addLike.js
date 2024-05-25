const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export default async (req, res) => {
  if (req.method === 'POST') {
    const { tweet_id } = req.body;

    if (!tweet_id) {
      return res.status(400).json({ error: 'Missing required tweet_id field' });
    }

    try {
      // Aktualizacja likes_count dla danego tweet_id
      const updateLikeQuery = `
        UPDATE tweets
        SET likes_count = likes_count + 1
        WHERE tweet_id = $1
        RETURNING *;
      `;
      const result = await pool.query(updateLikeQuery, [tweet_id]);

      if (result.rowCount === 0) {
        // Jeśli nie znaleziono tweetu do zaktualizowania
        return res.status(404).json({ error: 'Tweet not found' });
      }

      res.status(200).json({ message: 'Like added successfully', tweet: result.rows[0] });
    } catch (error) {
      console.error('Error executing query', error.stack);
      res.status(500).send('Server error');
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};