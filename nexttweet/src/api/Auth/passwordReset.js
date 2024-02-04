
export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Pobierz adres e-mail z ciała żądania
      const { email } = req.body;
  
      // Tutaj możesz dodać logikę do generowania unikalnego tokena resetowania hasła i wysłania linku resetującego na adres e-mail
      // Następnie, zapisz ten token w bazie danych lub innej formie przechowywania.
  
      // Przykład generowania i wysyłania linku resetującego (zastąp własnym kodem):
      const resetToken = generateResetToken(); // Funkcja do generowania unikalnego tokenu
      // Odeślij e-mail z linkiem resetującym do użytkownika
  
      res.status(200).json({ message: 'Link resetujący hasło został wysłany na Twój adres e-mail' });
    } else {
      res.status(405).end();
    }
  }
  
  // Przykład funkcji do generowania unikalnego tokenu resetowania hasła (może różnić się w zależności od używanej biblioteki)
  function generateResetToken() {
    // Wygeneruj unikalny token, np. losową sekwencję znaków
    return 'random-reset-token';
  }
  