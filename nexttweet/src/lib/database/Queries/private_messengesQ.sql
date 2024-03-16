-- Wysyłanie nowej wiadomości prywatnej
INSERT INTO private_messages (sender_id, receiver_id, content) VALUES (1, 2, 'Treść wiadomości');

-- Pobieranie wiadomości między dwoma użytkownikami
SELECT * FROM private_messages
WHERE (sender_id = 1 AND receiver_id = 2) OR (sender_id = 2 AND receiver_id = 1);

-- Usuwanie wiadomości prywatnych
DELETE FROM private_messages WHERE message_id = 1;

-- Pobieranie szczegółów wiadomości
SELECT * FROM private_messages WHERE message_id = 1;
