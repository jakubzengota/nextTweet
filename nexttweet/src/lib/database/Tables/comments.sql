CREATE TABLE comments (
    comment_id SERIAL PRIMARY KEY,
    tweet_id INT REFERENCES tweets(tweet_id),
    user_id INT REFERENCES users(user_id),
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);