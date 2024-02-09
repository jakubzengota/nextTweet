import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

pool.connect()
  .then(() => console.log('Połączono z bazą danych'))
  .catch(err => console.error('Błąd połączenia z bazą danych', err));

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { login, password } = req.body;
    try {
      const { rows } = await pool.query('SELECT password_hash FROM users WHERE username = $1 OR email = $1', [login]);
      console.log("rows :", rows)
      console.log("req.body :", req.body)
      if (rows.length === 0) {
        res.status(401).json({ success: false, message: 'Niepoprawne dane logowania' });
        return;
      }
  
      // Porównaj podane hasło z hasłem przechowywanym w bazie danych
      if (password === rows[0].password_hash) {
        res.status(200).json({ success: true, message: 'Zalogowano pomyślnie' });
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