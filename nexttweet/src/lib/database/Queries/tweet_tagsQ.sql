-- Przypisywanie tagu do tweeta
INSERT INTO tweet_tags (tweet_id, tag_id) VALUES (1, 1);

-- Usuwanie przypisania tagu do tweeta
DELETE FROM tweet_tags WHERE tweet_id = 1 AND tag_id = 1;

-- Pobieranie wszystkich tagów przypisanych do danego tweeta
SELECT tags.* FROM tags
JOIN tweet_tags tt ON tags.tag_id = tt.tag_id
WHERE tt.tweet_id = 1;

-- Pobieranie szczegółów przypisania tagu
SELECT * FROM tweet_tags WHERE tweet_tag_id = 1;
