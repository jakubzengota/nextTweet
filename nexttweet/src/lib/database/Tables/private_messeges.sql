CREATE TABLE private_messages (
    message_id SERIAL PRIMARY KEY,
    sender_id INT REFERENCES users(user_id),
    receiver_id INT REFERENCES users(user_id),
    content TEXT NOT NULL CHECK (length(content) <= 1000),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    read_at TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CHECK (content ~ '^[A-Za-z0-9\s.,!?-]*$') -- Ograniczenie akceptowalnych znaków
);
