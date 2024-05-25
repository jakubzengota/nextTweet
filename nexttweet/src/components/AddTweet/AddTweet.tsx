import { useEffect, useState } from "react";
import Loading from "../../assets/ZKZg.gif";
import Image from 'next/image';

const AddTweet = () => {
  const [tweetText, setTweetText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const addTweet = async () => {
    const tweetData = {
      user_id: '1',  // This should be dynamically set based on your application's user context
      content: tweetText,
    };

    try {
      setIsLoading(true)
      const response = await fetch('/api/Tweet/addTweet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tweetData),
      });
      if (response.ok) {
        setIsLoading(false)
        const tweetResponse = await response.json();
        console.log('Tweet added:', tweetResponse);
        setTweetText(''); // Clear the textarea after submitting
        setIsLoading(false)
        window.open("/dashboard", "_self");
      } else {
        const error = await response.json();
        console.error('Failed to add tweet:', error);
        setIsLoading(false)
      }
    } catch (error) {
      console.error('Error posting tweet:', error);
    }
  };

  useEffect(() => {}, []);
  return (
    <div className="AddTweet">
      <div>
        <Image
          src={"https://picsum.photos/536/354"}
          alt="Avatar"
          height={50}
          width={50}
          className="AccountProfileAvatar"
        />
        <div className="AccountProfileName">
          <h2> EmilyJones</h2>
        </div>
      </div>

      <div className="AddTweetInputDiv">
        <textarea
          id="addTweetTextarea"
          placeholder="Dodaj nowego tweeta..."
          value={tweetText}
          onChange={(e) => setTweetText(e.target.value)}
        />
      </div>
      <div>
        <button
          style={{
            color: "white",
            backgroundColor: "rgba(255, 255, 255, 0.13)",
            borderRadius: "10px",
            backdropFilter: "blur(10px)",
            boxShadow:
              "rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px",
          }}
          onClick={() => addTweet()}
        >
          Dodaj
        </button>
      </div>
    </div>
  );
};
export default AddTweet;
