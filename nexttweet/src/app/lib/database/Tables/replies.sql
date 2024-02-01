CREATE TABLE replies (
    reply_id SERIAL PRIMARY KEY,
    tweet_id INT REFERENCES tweets(tweet_id),
    user_id INT REFERENCES users(user_id),
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    likes_count INT DEFAULT 0,
    retweets_count INT DEFAULT 0,
    status VARCHAR(20) DEFAULT 'active'
);