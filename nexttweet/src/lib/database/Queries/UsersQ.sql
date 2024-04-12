-- Rejestracja nowego użytkownika
INSERT INTO users (username, email, password_hash, profile_description)
VALUES ('nowy_uzytkownik', 'nowy@example.com', 'haslo_haszowane', 'Opis użytkownika');

-- Logowanie użytkownika
SELECT * FROM users WHERE username = 'nazwa_uzytkownika' AND password_hash = 'haslo_haszowane';

-- Aktualizacja danych użytkownika
UPDATE users SET profile_description = 'Nowy opis użytkownika' WHERE user_id = 1;

-- Pobieranie danych użytkownika po username lub email
SELECT * FROM users WHERE username = 'nazwa_uzytkownika' OR email = 'adres@example.com';

-- Sprawdzenie, czy użytkownik istnieje
SELECT EXISTS(SELECT 1 FROM users WHERE username = 'nazwa_uzytkownika');