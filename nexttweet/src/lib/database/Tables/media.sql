CREATE TABLE media (
    media_id SERIAL PRIMARY KEY,
    tweet_id INT REFERENCES tweets(tweet_id),
    media_url VARCHAR(255) NOT NULL,
    media_type VARCHAR(50) NOT NULL CHECK (media_type IN ('image', 'video')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);