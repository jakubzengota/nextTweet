CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) CHECK (
        length(password_hash) >= 8 AND
        length(password_hash) <= 255 AND
        password_hash ~ '[A-Z]' AND         -- Wymagana wielka litera
        password_hash ~ '[0-9]' AND         -- Wymagana cyfra
        password_hash ~ '[!@#$%^&*()]'      -- Wymagany znak specjalny
    ) NOT NULL,
    profile_description TEXT CHECK (length(profile_description) <= 500), -- Maksymalna długość opisu
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CHECK (length(username) >= 3 AND length(username) <= 50),
    CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    account_status VARCHAR(20) DEFAULT 'active' CHECK (
        account_status IN ('active', 'banned', 'suspended')
);