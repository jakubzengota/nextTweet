import pg from 'pg';
import jwt from 'jsonwebtoken';
require('dotenv').config();

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

pool.connect()
  .then(() => console.log('Połączono z bazą danych'))
  .catch(err => console.error('Błąd połączenia z bazą danych', err));

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    try {
      const { rows } = await pool.query('SELECT password_hash FROM users WHERE username = $1 OR email = $1', [username]);
      if (rows.length === 0) {
        res.status(401).json({ success: false, message: 'Niepoprawne dane logowania' });
        return;
      }

      if (password === rows[0].password_hash) {
        // Make sure the JWT_SECRET is correctly set in your environment
        if (!process.env.JWT_SECRET) {
          console.error('JWT_SECRET is not defined.');
          res.status(500).json({ success: false, message: 'Internal server error' });
          return;
        }

        const token = jwt.sign(
          { username: username },
          process.env.JWT_SECRET,
          { expiresIn: '1h' }
        );

        // Move the Set-Cookie header and response inside the if block
        res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/; Max-Age=3600`);
        res.status(200).json({ success: true, message: 'Zalogowano pomyślnie', token });
      } else {
        res.status(401).json({ success: false, message: 'Niepoprawne dane logowania' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Wystąpił błąd podczas logowania' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
}
