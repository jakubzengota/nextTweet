const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export default async (req, res) => {
  if (req.method === 'DELETE') {
    const { follower_id, following_id } = req.body;

    if (!follower_id || !following_id) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      const deleteFollowerQuery = `
        DELETE FROM followers WHERE follower_id = $1 AND following_id = $2 RETURNING *;
      `;
      const deletedFollower = await pool.query(deleteFollowerQuery, [follower_id, following_id]);

      if (deletedFollower.rowCount === 0) {
        return res.status(404).json({ message: 'Follower relationship not found' });
      }

      res.status(200).json({ message: 'Successfully unfollowed', deletedFollower: deletedFollower.rows[0] });
    } catch (error) {
      console.error('Error executing query', error.stack);
      res.status(500).send('Server error');
    }
  } else {
    res.setHeader('Allow', ['DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
