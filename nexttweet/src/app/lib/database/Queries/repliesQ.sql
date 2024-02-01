-- Dodawanie nowej odpowiedzi
INSERT INTO replies (tweet_id, user_id, content) VALUES (1, 1, 'Treść odpowiedzi');

-- Pobieranie odpowiedzi do danego tweeta
SELECT * FROM replies WHERE tweet_id = 1;

-- Usuwanie odpowiedzi
DELETE FROM replies WHERE reply_id = 1;

-- Pobieranie szczegółów odpowiedzi
SELECT * FROM replies WHERE reply_id = 1;