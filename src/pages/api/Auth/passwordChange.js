export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Pobierz dane z ciała żądania
      const { oldPassword, newPassword } = req.body;
  
      // Tutaj możesz dodać logikę weryfikacji starego hasła i zmiany hasła użytkownika
      // Na przykład, sprawdź, czy stare hasło jest poprawne, a następnie zaktualizuj hasło w bazie danych
  
      // Przykład weryfikacji starego hasła:
      const isOldPasswordCorrect = await verifyOldPassword(req.user.id, oldPassword);
  
      if (isOldPasswordCorrect) {
        // Tutaj zaktualizuj hasło w bazie danych na podstawie nowego hasła (replace with your database logic)
        // db.updatePassword(req.user.id, newPassword);
  
        res.status(200).json({ message: 'Hasło zostało zmienione' });
      } else {
        res.status(401).json({ message: 'Błędne stare hasło' });
      }
    } else {
      res.status(405).end();
    }
  }
  async function verifyOldPassword(userId, oldPassword) {
    // Tutaj możesz dodać logikę weryfikacji starego hasła w bazie danych
    // Zwróć true, jeśli stare hasło jest poprawne, w przeciwnym razie false
  }