app.post('/tweet', async (req, res) => {
    try {
      const { user_id, content } = req.body; // Pobranie user_id i treści tweeta z ciała żądania
  
      // Sprawdzenie, czy tweet nie przekracza limitu długości
      if (content.length > 280) {
        return res.status(400).send('Tweet content exceeds the maximum length of 280 characters.');
      }
  
      // Wstawienie nowego tweeta do bazy danych
      const insertTweetQuery = `
        INSERT INTO tweets (user_id, content) VALUES ($1, $2)
        RETURNING tweet_id, user_id, content, created_at, updated_at, likes_count, retweets_count, replies_count, status;
      `;
      const newTweet = await pool.query(insertTweetQuery, [user_id, content]);
      const tweet = newTweet.rows[0];
  
      // Zwrócenie danych nowo utworzonego tweeta
      res.status(201).json({
        message: "Tweet successfully created",
        tweet: tweet,
      });
    } catch (error) {
      console.error('Error executing query', error.stack);
      res.status(500).send('Server error');
    }
  });