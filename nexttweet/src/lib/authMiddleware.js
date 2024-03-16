import jwt from 'jsonwebtoken';

const authMiddleware = (handler) => (req, res) => {
  const { token } = req.cookies; // Pobranie tokena z ciasteczek

  if (!token) {
    return res.status(401).end('Nie jesteś zalogowany');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Dodaj informacje o użytkowniku do obiektu żądania
    return handler(req, res);
  } catch (error) {
    return res.status(401).end('Nieprawidłowy token');
  }
};

export default authMiddleware;