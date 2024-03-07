const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export default async (req, res) => {
  if (req.method === 'POST') {
    const { follower_id, following_id } = req.body;

    if (!follower_id || !following_id) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      const insertFollowerQuery = `
        INSERT INTO followers (follower_id, following_id) VALUES ($1, $2) ON CONFLICT DO NOTHING RETURNING *;
      `;
      const newFollower = await pool.query(insertFollowerQuery, [follower_id, following_id]);

      if (newFollower.rowCount === 0) {
        return res.status(409).json({ message: 'Already following' });
      }

      res.status(201).json({ message: 'Successfully started following', follower: newFollower.rows[0] });
    } catch (error) {
      console.error('Error executing query', error.stack);
      res.status(500).send('Server error');
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};