const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export default async (req, res) => {
  const { user_id } = req.query; // Pobranie user_id z URL

  if (req.method === 'GET') {
    try {
      const userTotalLikesQuery = `
        SELECT SUM(likes_count) as total_likes
        FROM tweets
        WHERE user_id = $1;
      `;
      const userTotalLikes = await pool.query(userTotalLikesQuery, [user_id]);

      if (!userTotalLikes.rows[0].total_likes) {
        // Może się zdarzyć, że użytkownik nie ma żadnych polubień.
        return res.status(404).json({ error: 'User likes not found' });
      }

      res.status(200).json({ user_id: user_id, total_likes: userTotalLikes.rows[0].total_likes });
    } catch (error) {
      console.error('Error executing query', error.stack);
      res.status(500).send('Server error');
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

