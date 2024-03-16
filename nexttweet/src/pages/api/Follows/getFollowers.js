const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export default async (req, res) => {
  if (req.method === 'GET') {
    const { user_id } = req.query;

    try {
      const getFollowersQuery = `
        SELECT u.user_id, u.username, u.email
        FROM users u
        INNER JOIN followers f ON f.follower_id = u.user_id
        WHERE f.following_id = $1;
      `;
      const followers = await pool.query(getFollowersQuery, [user_id]);

      res.status(200).json({ success: true, followers: followers.rows });
    } catch (error) {
      console.error('Error executing query', error.stack);
      res.status(500).send('Server error');
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
