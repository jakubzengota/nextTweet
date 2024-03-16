-- Dodawanie nowego tagu
INSERT INTO tags (tag_name) VALUES ('nowy_tag');

-- Pobieranie wszystkich tagów
SELECT * FROM tags;

-- Pobieranie tweetów z określonym tagiem
SELECT t.* FROM tweets t
JOIN tweet_tags tt ON t.tweet_id = tt.tweet_id
JOIN tags ON tt.tag_id = tags.tag_id
WHERE tags.tag_name = 'tag';

-- Usuwanie tagu
DELETE FROM tags WHERE tag_id = 1;

-- Pobieranie szczegółów tagu
SELECT * FROM tags WHERE tag_id = 1;
