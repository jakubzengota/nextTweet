const { db } = require('@vercel/postgres');
const bcrypt = require('bcrypt');

async function getUsers(client) {
    try {
        const result = await client.sql`SELECT * FROM Users`;
        return result; 
    } catch (error) {
        console.error('Error retrieving users:', error);
        throw error;
    }
}

// Zapytanka wykonywane przez użytkownika

const createUser = async (username, email, passwordHash, profileDescription) => {   //tworzenie nowego użytkownika
    const query = `
      INSERT INTO users (username, email, password_hash, profile_description)
      VALUES ($1, $2, $3, $4) RETURNING *;
    `;
    try {
      const res = await pool.query(query, [username, email, passwordHash, profileDescription]);
      console.log('User created:', res.rows[0]);
    } catch (err) {
      console.error('Error creating user:', err);
    }
  };

  const getUserByUsername = async (username) => {  //pobieranie informacji o użytkowniku
    const query = `
      SELECT * FROM users WHERE username = $1;
    `;
    try {
      const res = await pool.query(query, [username]);
      console.log('User details:', res.rows[0]);
    } catch (err) {
      console.error('Error fetching user:', err);
    }
  };

  const updateUserPassword = async (userId, newPasswordHash) => {   //aktualizacja hasła użytkownika
    const query = `
      UPDATE users SET password_hash = $1 WHERE user_id = $2 RETURNING *;
    `;
    try {
      const res = await pool.query(query, [newPasswordHash, userId]);
      console.log('Password updated for user:', res.rows[0]);
    } catch (err) {
      console.error('Error updating user password:', err);
    }
  };

  const deactivateUserAccount = async (userId) => {   //dezaktywacja konta użytkownika
    const query = `
      UPDATE users SET account_status = 'deactivated' WHERE user_id = $1 RETURNING *;
    `;
    try {
      const res = await pool.query(query, [userId]);
      console.log('Account deactivated:', res.rows[0]);
    } catch (err) {
      console.error('Error deactivating account:', err);
    }
  };

  const searchUsersByUsername = async (searchTerm) => {  //wyszukiwanie użytkowników
    const query = `
      SELECT * FROM users WHERE username ILIKE '%' || $1 || '%';
    `;
    try {
      const res = await pool.query(query, [searchTerm]);
      console.log('Search results:', res.rows);
    } catch (err) {
      console.error('Error searching for users:', err);
    }
  };









  

const getUserTweets = async (userId) => {       //Pobranie tweetow od użytkownika
    const query = `
      SELECT * FROM tweets WHERE user_id = $1 ORDER BY created_at DESC;
    `;
    try {
      const res = await pool.query(query, [userId]);
      console.log(res.rows);
    } catch (err) {
      console.error(err);
    }
  };

  const postTweet = async (userId, content) => {   // Dodanie nowego tweeta
    const query = `
      INSERT INTO tweets (user_id, content) VALUES ($1, $2) RETURNING *;
    `;
    try {
      const res = await pool.query(query, [userId, content]);
      console.log('Tweet added:', res.rows[0]);
    } catch (err) {
      console.error('Error posting tweet:', err);
    }
  };

  const likeTweet = async (userId, tweetId) => {   //Polubienie tweeta
    const query = `
      INSERT INTO likes (user_id, tweet_id) VALUES ($1, $2) ON CONFLICT DO NOTHING;
    `;
    try {
      await pool.query(query, [userId, tweetId]);
      console.log('Tweet liked successfully');
    } catch (err) {
      console.error('Error liking tweet:', err);
    }
  };


  const getTweetComments = async (tweetId) => {  // Pobieranie komanentarzy do tweetu
    const query = `
      SELECT * FROM comments WHERE tweet_id = $1 ORDER BY created_at DESC;
    `;
    try {
      const res = await pool.query(query, [tweetId]);
      console.log('Comments:', res.rows);
    } catch (err) {
      console.error('Error fetching comments:', err);
    }
  };

  const updateProfileDescription = async (userId, description) => {   //aktualizacja profilu usera
    const query = `
      UPDATE users SET profile_description = $1 WHERE user_id = $2 RETURNING *;
    `;
    try {
      const res = await pool.query(query, [description, userId]);
      console.log('Profile updated:', res.rows[0]);
    } catch (err) {
      console.error('Error updating profile:', err);
    }
  };