-- Dodawanie nowego pliku multimedialnego
INSERT INTO media (tweet_id, media_url, media_type) VALUES (1, 'url', 'image');

-- Pobieranie mediów przypisanych do danego tweeta
SELECT * FROM media WHERE tweet_id = 1;

-- Usuwanie pliku multimedialnego
DELETE FROM media WHERE media_id = 1;

-- Pobieranie szczegółów pliku multimedialnego
SELECT * FROM media WHERE media_id = 1;