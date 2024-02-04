require('dotenv').config({ path: './.env.local' });
const { Pool } = require('pg');
console.log("Connection String:", process.env.POSTGRES_URL);


const connectionString = process.env.POSTGRES_URL + '?sslmode=require';

const pool = new Pool({
  connectionString: connectionString,
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});

// node init-db
// Wyjebac usersa, i nowa tabele, Imie, nazwisko, liczba obserwujacych, liczba obserwowanych, STATUS(usuniety czy nie), maila, 

const createTableUsers = `
CREATE TABLE IF NOT EXISTS users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) CHECK (
      length(password_hash) >= 8 AND
      length(password_hash) <= 255 AND
      password_hash ~ '[A-Z]' AND         
      password_hash ~ '[0-9]' AND         
      password_hash ~ '[!@#$%^&*()]'      
  ) NOT NULL,
  profile_description TEXT CHECK (length(profile_description) <= 500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  followers_count INT DEFAULT 0,
  following_count INT DEFAULT 0,
  CHECK (length(username) >= 3 AND length(username) <= 50),
  CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  account_status VARCHAR(20) DEFAULT 'active' CHECK (
      account_status IN ('active', 'banned', 'suspended')
  )
);`;


// Password123!
const insertUsersData = `
INSERT INTO users (username, email, password_hash, profile_description, followers_count, following_count, account_status) VALUES
  ('EmilyJones', 'emilyjones@example.com', 'Passw0rd$A', 'Exploring new places and cultures', 120, 75, 'active'),
  ('MichaelSmith', 'michaelsmith@mail.com', 'M1chael$B', 'Love coding and coffee', 215, 102, 'active'),
  ('JessicaTaylor', 'jessicataylor@test.org', 'J3ss!ca$C', 'Passionate about music and art', 180, 210, 'active'),
  ('DavidJohnson', 'davidjohnson@sample.net', 'Dav1dJ$D', 'Tech enthusiast and gamer', 300, 150, 'active'),
  ('SarahBrown', 'sarahbrown@domain.com', 'Password3$', 'Fitness guru and lifestyle blogger', 450, 322, 'active'),
  ('JamesWilliams', 'jameswilliams@online.org', 'Jam3sW$F', 'Aspiring chef and food critic', 220, 198, 'active'),
  ('LindaMartinez', 'lindamartinez@website.com', 'L1ndaM$G', 'Travel blogger sharing my adventures', 350, 415, 'active');
`;



const createTableTweets = `
  CREATE TABLE IF NOT EXISTS tweets (
    tweet_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    content TEXT NOT NULL CHECK (length(content) <= 280),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    likes_count INT DEFAULT 0, 
    retweets_count INT DEFAULT 0, 
    replies_count INT DEFAULT 0 ,
    status VARCHAR(20) DEFAULT 'active'
  );`;

const insertTweets = `
  INSERT INTO tweets (user_id, content) VALUES
    (1, 'Exploring the beauty of nature'),
    (1, 'Just finished a great book on Python programming'),
    (1, 'Cannot wait for the weekend to start');
`;



  // const createTableLikes = `
  // CREATE TABLE IF NOT EXISTS likes (
  //   like_id SERIAL PRIMARY KEY,
  //   user_id INT REFERENCES users(user_id),
  //   tweet_id INT REFERENCES tweets(tweet_id),
  //   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  //   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  //   UNIQUE (user_id, tweet_id)
  // );`

  // const InsertLikes = `
  // INSERT INTO likes (user_id, tweet_id) VALUES
  //   (1, 2),  
  //   (2, 2),  
  //   (3, 2)`;

  // const createTableTweet_tags = `
  // CREATE TABLE IF NOT EXISTS tweet_tags (
  //   tweet_tag_id SERIAL PRIMARY KEY,
  //   tweet_id INT REFERENCES tweets(tweet_id),
  //   tag_id INT REFERENCES tags(tag_id),
  //   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  //   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  //   UNIQUE (tweet_id, tag_id)
  // );`
  
  // const InsertTweet_tags = `
  // INSERT INTO tweet_tags (tweet_id, tag_id) VALUES
  //   (1, 1),  
  //   (2, 2),  
  //   (3, 3)`;

  // const createTableTags = `
  // CREATE TABLE IF NOT EXISTS tags (
  //   tag_id SERIAL PRIMARY KEY,
  //   tag_name VARCHAR(50) UNIQUE NOT NULL CHECK (length(tag_name) >= 2 AND length(tag_name) <= 20),
  //   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  //   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  //   );`

  // const InsertTags = `
  // INSERT INTO tags (tag_name) VALUES
  //   ('Technology'),
  //   ('News'),
  //   ('Science')`;

  // const createTableSettings = `
  // CREATE TABLE IF NOT EXISTS settings (
  //   setting_id SERIAL PRIMARY KEY,
  //   user_id INT REFERENCES users(user_id),
  //   setting_name VARCHAR(50) NOT NULL CHECK (setting_name IN ('option1', 'option2', 'option3')),
  //   setting_value TEXT NOT NULL,
  //   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  //   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);`

  // const InsertSettings = `
  // INSERT INTO settings (user_id, setting_name, setting_value) VALUES
  //   (1, 'theme', 'dark'),       
  //   (2, 'notifications', 'on'), 
  //   (3, 'privacy', 'friends')`;

  // const createTableReTweets = `
  // CREATE TABLE IF NOT EXISTS ReTweets (
  //   retweet_id SERIAL PRIMARY KEY,
  //   tweet_id INT REFERENCES tweets(tweet_id),
  //   user_id INT REFERENCES users(user_id),
  //   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  //   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  //   UNIQUE (user_id, tweet_id);`

  // const InsertReTweets = `
  // INSERT INTO retweets (tweet_id, user_id) VALUES
  //   (1, 2),  
  //   (2, 3),  
  //   (1, 3)`;

  // const createTableReplies= `
  // CREATE TABLE IF NOT EXISTS replies (
  //   reply_id SERIAL PRIMARY KEY,
  //   tweet_id INT REFERENCES tweets(tweet_id),
  //   user_id INT REFERENCES users(user_id),
  //   content TEXT NOT NULL,
  //   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  //   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  //   likes_count INT DEFAULT 0,
  //   retweets_count INT DEFAULT 0,
  //   status VARCHAR(20) DEFAULT 'active');`

  // const InsertReplies = `
  // INSERT INTO replies (tweet_id, user_id, content) VALUES
  //   (1, 2, 'Completely agree with you!'),  
  //   (2, 3, 'Thanks for sharing this.'),    
  //   (1, 3, 'Interesting point of view.');`



  // const createTablePrivate_messages= `
  // CREATE TABLE IF NOT EXISTS private_messeges (
  //   message_id SERIAL PRIMARY KEY,
  //   sender_id INT REFERENCES users(user_id),
  //   receiver_id INT REFERENCES users(user_id),
  //   content TEXT NOT NULL CHECK (length(content) <= 1000),
  //   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  //   read_at TIMESTAMP,
  //   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  //   CHECK (content ~ '^[A-Za-z0-9\s.,!?-]*$')
  // ;`

  // const InsertPrivate_messages = `
  // INSERT INTO private_messages (sender_id, receiver_id, content) VALUES
  //   (1, 2, 'Hey, how are you doing?'),           
  //   (2, 1, 'I am doing well, thanks! And you?'), 
  //   (3, 1, 'Are we meeting tomorrow?');` 

  // const createTableMedia= ` 
  // CREATE TABLE IF NOT EXISTS media (
  //   media_id SERIAL PRIMARY KEY,
  //   tweet_id INT REFERENCES tweets(tweet_id),
  //   media_url VARCHAR(255) NOT NULL,
  //   media_type VARCHAR(50) NOT NULL CHECK (media_type IN ('image', 'video')),
  //   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  //   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)
  // ;`

  // const InsertMedia= `
  // INSERT INTO media (tweet_id, media_url, media_type) VALUES
  //   (1, 'http://example.com/image1.jpg', 'image'),
  //   (2, 'http://example.com/video1.mp4', 'video'),  
  //   (3, 'http://example.com/image2.jpg', 'image');`

  // const createTableFollowers= `
  // CREATE TABLE IF NOT EXISTS followers (
  //   follower_id SERIAL PRIMARY KEY,
  //   follower_user_id INT REFERENCES users(user_id),
  //   followed_user_id INT REFERENCES users(user_id),
  //   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  //   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  //   CHECK (follower_user_id != followed_user_id)
  // );`

  // const insertFollowers=`
  // INSERT INTO followers (follower_user_id, followed_user_id) VALUES
  //   (1, 2), 
  //   (1, 3),  
  //   (2, 1),  
  //   (3, 2);`

  // const createTableComments = `
  // CREATE TABLE IF NOT EXISTS comments (
  //   comment_id SERIAL PRIMARY KEY,
  //   tweet_id INT REFERENCES tweets(tweet_id),
  //   user_id INT REFERENCES users(user_id),
  //   content TEXT NOT NULL CHECK (length(content) <= 500),
  //   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  //   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  //   status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'deleted'))
  // );`
  
  // const insertComments = `
  // INSERT INTO comments (tweet_id, user_id, content) VALUES
  //   (1, 2, 'Amazing thought!'),         
  //   (2, 1, 'Thanks for sharing this!'), 
  //   (1, 3, 'I have a different view.');` 








async function initDb() {
  try {
    await pool.query(createTableUsers);
    await pool.query(insertUsersData);
    await pool.query(createTableTweets);
    await pool.query(insertTweets);
    //TUTAJ POTEM RESZTE WRZUCIC


    
    console.log('Tabela użytkowników została stworzona i wypełniona danymi.');
  } catch (error) {
    console.error('Wystąpił błąd podczas inicjalizacji bazy danych:', error);
  }
}

initDb().then(() => process.exit());

