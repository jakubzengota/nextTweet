const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export default async (req, res) => {
  if (req.method === 'GET') {
    try {
      const userId = parseInt(req.query.userId);
      if (isNaN(userId)) {
        return res.status(400).send('Invalid user ID.');
      }

      // Pobranie informacji o użytkowniku
      const userQuery = await pool.query('SELECT * FROM users WHERE user_id = $1', [userId]);
      const user = userQuery.rows[0];

      if (!user) {
        return res.status(404).send('User not found.');
      }

      // Zwrócenie danych
      res.status(200).json({
        user,
      });
    } catch (error) {
      console.error('Error executing query', error.stack);
      res.status(500).send('Server error');
    }
  } else {
    // Odpowiedź dla innych metod niż GET
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};