-- Dodawanie nowego retweeta
INSERT INTO retweets (tweet_id, user_id) VALUES (1, 1);

-- Usuwanie retweeta
DELETE FROM retweets WHERE retweet_id = 1;

-- Pobieranie wszystkich retweetów danego użytkownika
SELECT tweets.* FROM tweets
JOIN retweets ON tweets.tweet_id = retweets.tweet_id
WHERE retweets.user_id = 1;

-- Pobieranie szczegółów retweeta
SELECT * FROM retweets WHERE retweet_id = 1;
