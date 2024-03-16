CREATE TABLE followers (
    follower_id SERIAL PRIMARY KEY,
    follower_user_id INT REFERENCES users(user_id),
    followed_user_id INT REFERENCES users(user_id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CHECK (follower_user_id != followed_user_id)

);
