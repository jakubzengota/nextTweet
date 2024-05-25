// endpoint sprawdzajacy token weryfikacyjny do rejestracji


export default async function verify(req, res) {
    const { token } = req.query;
  
    // Logika weryfikacji tokena (szukanie użytkownika z tym tokenem i aktualizacja jego statusu)
    try {
      // Przykład logiki, zastąp odpowiednim zapytaniem SQL
      const result = await pool.query(
        'UPDATE users SET email_verified = true WHERE verification_token = $1 RETURNING *',
        [token]
      );
  
      if (result.rows.length > 0) {
        // Weryfikacja zakończona sukcesem
        res.status(200).json({ success: true, message: 'E-mail zweryfikowany.' });
      } else {
        // Nie znaleziono użytkownika z takim tokenem
        res.status(404).json({ success: false, message: 'Niepoprawny token weryfikacyjny.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Wewnętrzny błąd serwera.' });
    }
  }s