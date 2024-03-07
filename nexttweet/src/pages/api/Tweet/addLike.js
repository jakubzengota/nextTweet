const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export default async (req, res) => {
  if (req.method === 'POST') {
    const { user_id, tweet_id } = req.body;

    if (!user_id || !tweet_id) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      const insertLikeQuery = `
        INSERT INTO likes (user_id, tweet_id) VALUES ($1, $2) ON CONFLICT (user_id, tweet_id) DO NOTHING RETURNING *;
      `;
      const newLike = await pool.query(insertLikeQuery, [user_id, tweet_id]);

      if (newLike.rowCount === 0) {
        // Jeśli już istnieje taki lajk (ON CONFLICT), to nie dodajemy go ponownie.
        return res.status(409).json({ message: 'Like already exists' });
      }

      res.status(201).json({ message: 'Like added successfully', like: newLike.rows[0] });
    } catch (error) {
      console.error('Error executing query', error.stack);
      res.status(500).send('Server error');
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};