-- Dodawanie polubienia
INSERT INTO likes (user_id, tweet_id) VALUES (1, 1);

-- Usuwanie polubienia
DELETE FROM likes WHERE user_id = 1 AND tweet_id = 1;

-- Pobieranie liczby polubień dla danego tweeta
SELECT COUNT(*) FROM likes WHERE tweet_id = 1;

-- Sprawdzenie, czy użytkownik polubił już dany tweet
SELECT EXISTS(SELECT 1 FROM likes WHERE user_id = 1 AND tweet_id = 1);
