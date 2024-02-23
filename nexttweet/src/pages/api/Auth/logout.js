// pages/api/logout.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Usuwamy ciasteczko poprzez ustawienie daty jego ważności na przeszłość
    res.setHeader('Set-Cookie', 'token=; HttpOnly; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT');
    res.status(200).json({ success: true, message: 'Wylogowano pomyślnie' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
}
