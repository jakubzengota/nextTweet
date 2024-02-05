export default async function login(req, res) {
  if (req.method === 'POST') {
    // Pobierz dane użytkownika z żądania
    const { username, password } = req.body;

    // Sprawdź, czy dane logowania są poprawne
    // Uwaga: Poniżej jest przykład; w prawdziwej aplikacji powinieneś sprawdzić te dane w bazie danych
    if (username === 'testuser' && password === 'testpassword') {
      // Logowanie zakończone sukcesem
      res.status(200).json({ success: true, message: 'Zalogowano pomyślnie' });
    } else {
      // Niepoprawne dane logowania
      res.status(401).json({ success: false, message: 'Niepoprawne dane logowania' });
    }
  } else {
    // Obsługa innych metod niż POST
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}