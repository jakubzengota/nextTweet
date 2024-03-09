CREATE TABLE tweet_tags (
    tweet_tag_id SERIAL PRIMARY KEY,
    tweet_id INT REFERENCES tweets(tweet_id),
    tag_id INT REFERENCES tags(tag_id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (tweet_id, tag_id)
);
