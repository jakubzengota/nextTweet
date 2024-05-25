const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export default async (req, res) => {
  if (req.method === 'DELETE') {
    const { user_id, tweet_id } = req.body;

    if (!user_id || !tweet_id) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      const deleteLikeQuery = `
        DELETE FROM tweets WHERE user_id = $1 AND tweet_id = $2 RETURNING *;
      `;
      const deletedLike = await pool.query(deleteLikeQuery, [user_id, tweet_id]);

      if (deletedLike.rowCount === 0) {
        // Jeśli lajk nie istnieje, zwracamy informację, że nie ma czego usuwać.
        return res.status(404).json({ message: 'Like not found' });
      }

      res.status(200).json({ message: 'Like removed successfully', like: deletedLike.rows[0] });
    } catch (error) {
      console.error('Error executing query', error.stack);
      res.status(500).send('Server error');
    }
  } else {
    res.setHeader('Allow', ['DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
