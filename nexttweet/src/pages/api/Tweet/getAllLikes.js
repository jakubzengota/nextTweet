const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export default async (req, res) => {
  const { user_id } = req.query; // Pobranie user_id z URL

  if (req.method === 'GET') {
    try {
      const userLikesQuery = `
        SELECT COUNT(l.tweet_id) as likes
        FROM likes l
        INNER JOIN tweets t ON l.tweet_id = t.tweet_id
        WHERE t.user_id = $1;
      `;
      const userLikes = await pool.query(userLikesQuery, [user_id]);

      if (userLikes.rows.length === 0) {
        // Może się zdarzyć, że użytkownik nie ma żadnych tweetów lub lajków.
        return res.status(404).json({ error: 'User or likes not found' });
      }

      res.status(200).json({ user_id: user_id, likes_count: userLikes.rows[0].likes });
    } catch (error) {
      console.error('Error executing query', error.stack);
      res.status(500).send('Server error');
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};