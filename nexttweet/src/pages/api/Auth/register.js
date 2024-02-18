"use client";
import bcrypt from 'bcrypt';
import pool from '../../../../init-db';
import PasswordValidator from 'password-validator';
// npm install password-validator

//schemat walidacji hasła
const passwordSchema = new PasswordValidator();
passwordSchema
  .is().min(8)                                // Minimalna długość 8 znaków
  .is().max(100)                              // Maksymalna długość 100 znaków
  .has().uppercase()                          // Musi zawierać wielkie litery
  .has().lowercase()                          // Musi zawierać małe litery
  .has().digits()                             // Musi zawierać cyfry
  .has().not().spaces()                       // Nie może zawierać spacji
  .has().symbols()                            // Musi zawierać symbol
  .is().not().oneOf(['Passw0rd', 'Password123']); // Wyklucz słabe hasła

export default async function register(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  const { username, email, password, confirmPassword } = req.body;

  // Walidacja danych wejściowych
  if (!username || !email || !password || !confirmPassword) {
    return res.status(400).json({ success: false, message: 'Wszystkie pola są wymagane.' });
  }

  if (username.length < 5) {
    return res.status(400).json({ success: false, message: 'Nazwa użytkownika musi zawierać co najmniej 5 znaków.' });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ success: false, message: 'Hasła nie pasują do siebie.' });
  }

  if (!passwordSchema.validate(password)) {
    const failed = passwordSchema.validate(password, { list: true });
    return res.status(400).json({ success: false, message: `Hasło nie spełnia wymagań: ${failed.join(', ')}.` });
  }
  
  try {
    const userExists = await pool.query('SELECT * FROM users WHERE username = $1 OR email = $2', [username, email]);
    if (userExists.rows.length > 0) {
      return res.status(409).json({ success: false, message: 'Nazwa użytkownika lub email już istnieje.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await pool.query(
      'INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING *',
      [username, email, hashedPassword]
    );

    res.status(201).json({ success: true, message: 'Użytkownik zarejestrowany pomyślnie.', user: newUser.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Wewnętrzny błąd serwera.' });
  }
}



// // init-db.js

// import { Pool } from 'pg';
// import { config } from 'dotenv';

// // Ładowanie zmiennych środowiskowych z pliku .env.local
// config({ path: './.env.local' });

// // Konfiguracja połączenia z bazą danych z użyciem zmiennych środowiskowych
// const pool = new Pool({
//   connectionString: process.env.POSTGRES_URL,
//   ssl: {
//     rejectUnauthorized: false // Jeśli używasz bazy danych, która wymaga SSL, jak na przykład Heroku
//   }
// });

// export default pool;









// Logowanie, zbadac element, netowrk   Payload = response  (i w response najlepiej zeby było: zalogowano pomyslnie status 200)