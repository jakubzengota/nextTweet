CREATE TABLE tweets (
    tweet_id SERIAL PRIMARY KEY ,
    user_id INT REFERENCES users(user_id),
    content TEXT NOT NULL CHECK (length(content) <= 280),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    likes_count INT DEFAULT 0, 
    retweets_count INT DEFAULT 0, 
    replies_count INT DEFAULT 0 ,
    status VARCHAR(20) DEFAULT 'active',
    CHECK (content ~ '^[A-Za-z0-9\s.,!?-]*$') -- Ograniczenie akceptowalnych znaków
);