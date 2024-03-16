const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export default async (req, res) => {
  if (req.method === 'POST') {
    const { user_id, content } = req.body;

    if (!user_id || !content) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      const insertTweetQuery = `
        INSERT INTO tweets (user_id, content, created_at)
        VALUES ($1, $2, NOW()) // Używamy funkcji PostgreSQL NOW() do automatycznego ustawienia aktualnego czasu
        RETURNING *;
      `;
      const newTweet = await pool.query(insertTweetQuery, [user_id, content]);

      res.status(201).json(newTweet.rows[0]);
    } catch (error) {
      console.error('Error executing query', error.stack);
      res.status(500).send('Server error');
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
