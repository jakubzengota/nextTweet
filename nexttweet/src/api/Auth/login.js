export default async function handler(req, res) {
    if (req.method === 'POST') {         //POST SPRAWDZA przesłane dane logowania, moge zmieniać niżej co ma konkretnie sprawdzać
      const { email, password } = req.body;
      // Tutaj możesz dodać logikę weryfikacji danych logowania, np. sprawdzając w bazie danych
  
      if (email === 'example@example.com' && password === 'moje_haslo') {

        res.status(200).json({ message: 'Logowanie powiodło się' });
      } else {
        res.status(401).json({ message: 'Błąd logowania' });
      }
    } else {
      // Obsługuje tylko żądania POST
      res.status(405).end();
    }
  }