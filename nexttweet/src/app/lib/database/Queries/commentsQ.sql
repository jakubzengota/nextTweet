INSERT INTO comments (tweet_id, user_id, content)
VALUES (1, 1, 'To jest przykładowy komentarz.');

SELECT * FROM comments
WHERE tweet_id = 1;

UPDATE comments
SET content = 'To jest zaktualizowany komentarz.'
WHERE comment_id = 1;

DELETE FROM comments
WHERE comment_id = 1;