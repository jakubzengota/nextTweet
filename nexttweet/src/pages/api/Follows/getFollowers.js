const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export default async (req, res) => {
  if (req.method === 'GET') {
    const { user_id } = req.query;

    try {
      // Modify the query to return usernames of the users that are being followed
      const getFollowingUsernamesQuery = `
        SELECT u.username
        FROM users u
        INNER JOIN followers f ON f.following_id = u.user_id
        WHERE f.follower_id = $1;
      `;
      const result = await pool.query(getFollowingUsernamesQuery, [user_id]);

      res.status(200).json({ success: true, followers: result.rows });
    } catch (error) {
      console.error('Error executing query', error.stack);
      res.status(500).send('Server error');
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};