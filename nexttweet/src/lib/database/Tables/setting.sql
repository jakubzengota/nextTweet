CREATE TABLE settings (
    setting_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    setting_name VARCHAR(50) NOT NULL CHECK (setting_name IN ('option1', 'option2', 'option3')),
    setting_value TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);