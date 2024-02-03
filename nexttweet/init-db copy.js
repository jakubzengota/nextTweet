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

// Wszystkie inserty i create w srodku query text

const queryText = 

`CREATE TABLE users (
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
  CHECK (length(username) >= 3 AND length(username) <= 50),
  CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  account_status VARCHAR(20) DEFAULT 'active' CHECK (
      account_status IN ('active', 'banned', 'suspended')
);`

// Password123!
const insertUsers = async () => {
  const query = `
    INSERT INTO users (username, email, password_hash, profile_description) VALUES
    ('rebecca09', 'anthonyking@zimmerman-murphy.org', 'a109e36947ad56de1dca1cc49f0ef8ac9ad9a7b1aa0df41fb3c4cb73c1ff01ea', 'I love sports'),
    ('heatherjackson', 'millerjonathan@martin-austin.com', 'a109e36947ad56de1dca1cc49f0ef8ac9ad9a7b1aa0df41fb3c4cb73c1ff01ea', 'I love to cook.'),
    ('webermelissa', 'veronica92@hotmail.com', 'a109e36947ad56de1dca1cc49f0ef8ac9ad9a7b1aa0df41fb3c4cb73c1ff01ea', 'Studies are the best.'),
    ('michael40', 'ucervantes@hotmail.com', 'a109e36947ad56de1dca1cc49f0ef8ac9ad9a7b1aa0df41fb3c4cb73c1ff01ea', 'Everyday everynight I am the star'),
    ('sarah55', 'cerickson@pittman-anderson.com', 'a109e36947ad56de1dca1cc49f0ef8ac9ad9a7b1aa0df41fb3c4cb73c1ff01ea', 'Hi, how are you?'),
    ('larry85', 'gsimpson@johnson.org', 'a109e36947ad56de1dca1cc49f0ef8ac9ad9a7b1aa0df41fb3c4cb73c1ff01ea', 'Hey, welcome'),
    ('kingjose', 'oliviaerickson@barron.biz', 'a109e36947ad56de1dca1cc49f0ef8ac9ad9a7b1aa0df41fb3c4cb73c1ff01ea', 'My friends are the best');
  `;
  try {
    await pool.query(query);
    console.log('Users inserted successfully.');
  } catch (err) {
    console.error(err);
  }
}


// `CREATE TABLE tweets (
//   tweet_id SERIAL PRIMARY KEY,
//   user_id INT REFERENCES users(user_id),
//   content TEXT NOT NULL CHECK (length(content) <= 280),
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//   likes_count INT DEFAULT 0, 
//   retweets_count INT DEFAULT 0, 
//   replies_count INT DEFAULT 0 ,
//   status VARCHAR(20) DEFAULT 'active',
//   CHECK (content ~ '^[A-Za-z0-9\s.,!?-]*$') -- Ograniczenie akceptowalnych znaków
// );`

// const insertTweets = async () => {
//   const query = `
//     INSERT INTO tweets (user_id, content) VALUES
//     (4, 'Exploring the beauty of nature! #nature #adventure'),
//     (7, 'Just finished a great book on Python programming. #coding #python'),
//     (2, 'Can't wait for the weekend to start! #TGIF');
//   `;
//   try {
//     await pool.query(query);
//     console.log('Tweets inserted successfully.');
//   } catch (err) {
//     console.error(err);
//   }
// };

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       await insertTweets();
//       res.status(200).json({ message: 'Tweets added successfully' });
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to insert tweets' });
//     }
//   } else {
//     // Only allow POST requests
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

// // fetch('/api/addTweets', {
// //   method: 'POST',
// // }).then(response => response.json())
// //   .then(data => console.log(data))
// //   .catch(error => console.error('Error:', error));


// `CREATE TABLE likes (
//   like_id SERIAL PRIMARY KEY,
//   user_id INT REFERENCES users(user_id),
//   tweet_id INT REFERENCES tweets(tweet_id),
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//   UNIQUE (user_id, tweet_id)
// );`

// const insertLikes = async () => {
//   const query = `
//     INSERT INTO likes (user_id, tweet_id) VALUES
//     (1, 2),  
//     (2, 2),  
//     (3, 2);  
//   `;
//   // Użytkownik 3 polubił tweet 2
//   try {
//     await pool.query(query);
//     console.log('Likes inserted successfully.');
//   } catch (err) {
//     console.error(err);
//   }
// };

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       await insertLikes();
//       res.status(200).json({ message: 'Likes added successfully' });
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to insert likes' });
//     }
//   } else {
//     // Only allow POST requests
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

// // // Wywoływanie API:
// // fetch('/api/addLikes', {
// //   method: 'POST',
// // }).then(response => response.json())
// //   .then(data => console.log(data))
// //   .catch(error => console.error('Error:', error));


// `CREATE TABLE tweet_tags (
//   tweet_tag_id SERIAL PRIMARY KEY,
//   tweet_id INT REFERENCES tweets(tweet_id),
//   tag_id INT REFERENCES tags(tag_id),
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//   UNIQUE (tweet_id, tag_id)
// );`

// const assignTagsToTweets = async () => {
//   const query = `
//     INSERT INTO tweet_tags (tweet_id, tag_id) VALUES
//     (1, 1),  
//     (2, 2),  
//     (3, 3);  
//   `;
//   // Przypisuje tag 'nauka' do tweetu 3
//   try {
//     await pool.query(query);
//     console.log('Tags assigned to tweets successfully.');
//   } catch (err) {
//     console.error('Error assigning tags to tweets:', err);
//   }
// };

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       await assignTagsToTweets();
//       res.status(200).json({ message: 'Tags assigned to tweets successfully' });
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to assign tags to tweets' });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

// fetch('/api/assignTagsToTweets', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// }).then(response => response.json())
//   .then(data => console.log('Response from assignTagsToTweets:', data))
//   .catch(error => console.error('Error calling assignTagsToTweets API:', error));


// `CREATE TABLE tags (
//   tag_id SERIAL PRIMARY KEY,
//   tag_name VARCHAR(50) UNIQUE NOT NULL CHECK (length(tag_name) >= 2 AND length(tag_name) <= 20),
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );`

// const insertTags = async () => {
//   const query = `
//     INSERT INTO tags (tag_name) VALUES
//     ('technologia'),
//     ('nowości'),
//     ('nauka');  
//   `;
//   // Dodaj więcej tagów według potrzeb
//   try {
//     await pool.query(query);
//     console.log('Tags inserted successfully.');
//   } catch (err) {
//     console.error('Error inserting tags:', err);
//   }
// };

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       await insertTags();
//       res.status(200).json({ message: 'Tags added successfully' });
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to insert tags' });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

// fetch('/api/addTags', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// }).then(response => response.json())
//   .then(data => console.log('Response from addTags:', data))
//   .catch(error => console.error('Error calling addTags API:', error));


// `CREATE TABLE settings (
//   setting_id SERIAL PRIMARY KEY,
//   user_id INT REFERENCES users(user_id),
//   setting_name VARCHAR(50) NOT NULL CHECK (setting_name IN ('option1', 'option2', 'option3')),
//   setting_value TEXT NOT NULL,
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );`

// const insertSettings = async () => {
//   const query = `
//     INSERT INTO settings (user_id, setting_name, setting_value) VALUES
//     (1, 'theme', 'dark'),       
//     (2, 'notifications', 'on'), 
//     (3, 'privacy', 'friends');  
//   `;
//   // Ustawienie motywu ciemnego dla użytkownika 1
//   // Ustawienie włączonych powiadomień dla użytkownika 2
//   // Ustawienie prywatności na "tylko dla znajomych" dla użytkownika 3
//   try {
//     await pool.query(query);
//     console.log('Settings inserted successfully.');
//   } catch (err) {
//     console.error('Error inserting settings:', err);
//   }
// };

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       await insertSettings();
//       res.status(200).json({ message: 'Settings added successfully' });
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to insert settings' });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

// `CREATE TABLE retweets (
//   retweet_id SERIAL PRIMARY KEY,
//   tweet_id INT REFERENCES tweets(tweet_id),
//   user_id INT REFERENCES users(user_id),
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//   UNIQUE (user_id, tweet_id)
// );`

// const insertRetweets = async () => {
//   const query = `
//     INSERT INTO retweets (tweet_id, user_id) VALUES
//     (1, 2),  
//     (2, 3),  
//     (1, 3);  
//   `;
//    // Użytkownik 3 retweetuje również tweet 1
//   try {
//     await pool.query(query);
//     console.log('Retweets inserted successfully.');
//   } catch (err) {
//     console.error('Error inserting retweets:', err);
//   }
// };

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       await insertRetweets();
//       res.status(200).json({ message: 'Retweets added successfully' });
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to insert retweets' });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

// `CREATE TABLE replies (
//   reply_id SERIAL PRIMARY KEY,
//   tweet_id INT REFERENCES tweets(tweet_id),
//   user_id INT REFERENCES users(user_id),
//   content TEXT NOT NULL,
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//   likes_count INT DEFAULT 0,
//   retweets_count INT DEFAULT 0,
//   status VARCHAR(20) DEFAULT 'active'
// );`

// const insertReplies = async () => {
//   const query = `
//     INSERT INTO replies (tweet_id, user_id, content) VALUES
//     (1, 2, 'Completely agree with you!'),  
//     (2, 3, 'Thanks for sharing this.'),    
//     (1, 3, 'Interesting point of view.');  
//   `;
//   // Użytkownik 3 odpowiada ponownie na tweet 1
//   try {
//     await pool.query(query);
//     console.log('Replies inserted successfully.');
//   } catch (err) {
//     console.error(err);
//   }
// };

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       await insertReplies();
//       res.status(200).json({ message: 'Replies added successfully' });
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to insert replies' });
//     }
//   } else {
//     // Only allow POST requests
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

// fetch('/api/addReplies', {
//   method: 'POST',
// }).then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));


// `CREATE TABLE private_messages (
//   message_id SERIAL PRIMARY KEY,
//   sender_id INT REFERENCES users(user_id),
//   receiver_id INT REFERENCES users(user_id),
//   content TEXT NOT NULL CHECK (length(content) <= 1000),
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//   read_at TIMESTAMP,
//   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//   CHECK (content ~ '^[A-Za-z0-9\s.,!?-]*$') -- Ograniczenie akceptowalnych znaków
// );`

// const insertPrivateMessages = async () => {
//   const query = `
//     INSERT INTO private_messages (sender_id, receiver_id, content) VALUES
//     (1, 2, 'Hey, how are you doing?'),           
//     (2, 1, 'I am doing well, thanks! And you?'), 
//     (3, 1, 'Are we meeting tomorrow?');          
//   `;
//   // Użytkownik 3 wysyła wiadomość do użytkownika 1
//   try {
//     await pool.query(query);
//     console.log('Private messages inserted successfully.');
//   } catch (err) {
//     console.error(err);
//   }
// };

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       await insertPrivateMessages();
//       res.status(200).json({ message: 'Private messages added successfully' });
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to insert private messages' });
//     }
//   } else {
//     // Only allow POST requests
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

// fetch('/api/addPrivateMessages', {
//   method: 'POST',
// }).then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));


// `CREATE TABLE media (
//   media_id SERIAL PRIMARY KEY,
//   tweet_id INT REFERENCES tweets(tweet_id),
//   media_url VARCHAR(255) NOT NULL,
//   media_type VARCHAR(50) NOT NULL CHECK (media_type IN ('image', 'video')),
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );`

// const insertMedia = async () => {
  // const query = `
  //   INSERT INTO media (tweet_id, media_url, media_type) VALUES
  //   (1, 'http://example.com/image1.jpg', 'image'),
  //   (2, 'http://example.com/video1.mp4', 'video'),  
  //   (3, 'http://example.com/image2.jpg', 'image');  
  // `;

  // Dodaj obraz do tweetu 1, TO TRZEBA PODLACZYC PEWNIE DO PUBLIC GDZIE IMG BY SIE ZNAJDOWALO
//   try {
//     await pool.query(query);
//     console.log('Media inserted successfully.');
//   } catch (err) {
//     console.error(err);
//   }
// };

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       await insertMedia();
//       res.status(200).json({ message: 'Media added successfully' });
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to insert media' });
//     }
//   } else {
//     // Only allow POST requests
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

// fetch('/api/addMedia', {
//   method: 'POST',
// }).then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));



// `CREATE TABLE followers (
//   follower_id SERIAL PRIMARY KEY,
//   follower_user_id INT REFERENCES users(user_id),
//   followed_user_id INT REFERENCES users(user_id),
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//   CHECK (follower_user_id != followed_user_id)

// );`

// const insertFollowers = async () => {
//   const query = `
//     INSERT INTO followers (follower_user_id, followed_user_id) VALUES
//     (1, 2), 
//     (1, 3),  
//     (2, 1),  
//     (3, 2);  
//   `;
//   // Użytkownik 3 obserwuje użytkownika 2
//   try {
//     await pool.query(query);
//     console.log('Followers inserted successfully.');
//   } catch (err) {
//     console.error(err);
//   }
// };

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       await insertFollowers();
//       res.status(200).json({ message: 'Followers added successfully' });
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to insert followers' });
//     }
//   } else {
//     // Only allow POST requests
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

// fetch('/api/addFollowers', {
//   method: 'POST',
// }).then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));


// `CREATE TABLE comments (
//   comment_id SERIAL PRIMARY KEY,
//   tweet_id INT REFERENCES tweets(tweet_id),
//   user_id INT REFERENCES users(user_id),
//   content TEXT NOT NULL CHECK (length(content) <= 500),
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//   status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'deleted'))
// );`

// const insertComments = async () => {
//   const query = `
//     INSERT INTO comments (tweet_id, user_id, content) VALUES
//     (1, 2, 'Amazing thought!'),         
//     (2, 1, 'Thanks for sharing this!'), 
//     (1, 3, 'I have a different view.');
//   `;  
  // // Użytkownik 3 komentuje tweet 1 itd
//   try {
//     await pool.query(query);
//     console.log('Comments inserted successfully.');
//   } catch (err) {
//     console.error('Error inserting comments:', err);
//   }
// }; 

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       await insertComments();
//       res.status(200).json({ message: 'Comment added successfully' });
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to insert comment' });
//     }
//   } else {
//     // Only allow POST requests
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

// fetch('/api/addComments', {
  // method: 'POST',
// }).then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));


// node init-db to tworzy tabele i wrzuca, uruchamia i wrzuca do vercela

pool.query(queryText)
  .then(res => {
    console.log('Tabela została utworzona');
    pool.end();
  })
  .catch(e => {
    console.error(e.stack);
    pool.end();
  });