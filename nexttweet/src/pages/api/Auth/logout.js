export default async function logout(req, res) {
  // Ustawienie pliku cookie na czas wygaśnięcia w przeszłości
  res.setHeader('Set-Cookie', `token=; HttpOnly; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT`);

  // Odpowiedź potwierdzająca wylogowanie
  res.status(200).json({ success: true, message: 'Wylogowano pomyślnie' });
}