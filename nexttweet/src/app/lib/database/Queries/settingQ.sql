-- Dodawanie lub aktualizowanie ustawienia użytkownika
INSERT INTO settings (user_id, setting_name, setting_value)
VALUES (1, 'ustawienie', 'wartość');

-- Pobieranie ustawień danego użytkownika
SELECT * FROM settings WHERE user_id = 1;

-- Usuwanie ustawienia użytkownika
DELETE FROM settings WHERE setting_id = 1;

-- Pobieranie szczegółów ustawienia
SELECT * FROM settings WHERE setting_id = 1;
