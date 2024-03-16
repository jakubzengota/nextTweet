const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export default async (req, res) => {
  const { tweet_id } = req.query; // Pobranie tweet_id z URL

  if (req.method === 'DELETE') {
    try {
      const deleteTweetQuery = `
        DELETE FROM tweets WHERE tweet_id = $1 RETURNING *;
      `;
      const deletedTweet = await pool.query(deleteTweetQuery, [tweet_id]);

      // if (deletedTweet.rowCount === 0) {
      //   return res.status(404).json({ error: 'Tweet not found' });
      // }

      res.status(200).json({ message: 'Tweet successfully deleted', deletedTweet: deletedTweet.rows[0] });
    } catch (error) {
      console.error('Error executing query', error.stack);
      res.status(500).send('Server error');
    }
  } else {
    res.setHeader('Allow', ['DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
