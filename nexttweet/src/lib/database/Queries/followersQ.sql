-- Dodawanie nowego obserwującego
INSERT INTO followers (follower_user_id, followed_user_id) VALUES (1, 2);

-- Usuwanie obserwującego
DELETE FROM followers WHERE follower_id = 1;

-- Pobieranie wszystkich obserwujących danego użytkownika
SELECT users.* FROM users
JOIN followers ON users.user_id = followers.follower_user_id
WHERE followers.followed_user_id = 1;

-- Pobieranie szczegółów obserwującego
SELECT * FROM followers WHERE follower_id = 1;
