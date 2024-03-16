-- Dodawanie nowego tweeta
INSERT INTO tweets (user_id, content) VALUES (1, 'Treść tweeta');

-- Pobieranie tweetów użytkownika
SELECT * FROM tweets WHERE user_id = 1;

-- Usuwanie tweeta
DELETE FROM tweets WHERE tweet_id = 1;

-- Pobieranie tweetów z określonym tagiem
SELECT t.* FROM tweets t
JOIN tweet_tags tt ON t.tweet_id = tt.tweet_id
JOIN tags ON tt.tag_id = tags.tag_id
WHERE tags.tag_name = 'tag';

-- Pobieranie szczegółów tweetu
SELECT * FROM tweets WHERE tweet_id = 1;