import { useEffect, useState } from "react"
import styles from "../../styles/Home.module.css";
import Avatar from "../../assets/avatar.png"
import Image from "next/image";
import Loading from "../../assets/ZKZg.gif";
const Tweets = () => {

    const [tweets, setTweets] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const getAllTweets = async() => {
        try {
            setIsLoading(true)

            const response = await fetch('/api/Tweet/getTweets');
        
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
        
            const jsonData = await response.json();
            setTweets(jsonData.tweets);
            console.log("Tweets:", jsonData);
            setIsLoading(false)
          } catch (error) {
            console.error("Error fetching tweets:", error);
          }
    }

    const addLike = async(id: number) => {
        try {

            const response = await fetch('/api/Tweet/addLike',{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    tweet_id: id
                }),
            });
            window.open("/dashboard", "_self");
        
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
              
        
          } catch (error) {
            console.error("Error fetching tweets:", error);
          }
    }

    useEffect(()=>{
        getAllTweets();
    },[])
    return(
        <>
        {
           isLoading ? 
           <div className="loading">
            <Image src={Loading} alt="" width={30} height={30}/>
           </div>
           
           :
           <div className="tweets">
           <div className="tweet">
           {tweets.map((tweet:any, idx) => (
             <div key={idx} className={styles.post}>
               <div className="postHeader" style={{ display: "flex", justifyContent: "space-between" }}>
                 <div style={{ display: "flex" }}>
                   <Image
                     src={Avatar}
                     alt="avatar"
                     className={styles.postAvatar}
                   />
                   <span className={styles.postUser}>
                     {tweet?.user_id || "User"}
                   </span>
                 </div>

                 <span className={styles.postTimestamp}>
                   {new Date(tweet?.created_at).toLocaleString()}
                 </span>
               </div>
               <div className={styles.postContent}>{tweet.content}</div>
               <div className={styles.postActions}>
                 <button className={styles.actionButton} onClick={()=> addLike(tweet.tweet_id)}>
                   ❤️ <span className={styles.actionText}>{tweet.likes_count}</span>
                 </button>
                 <button className={styles.actionButton}>
                   🔁{" "}
                   <span className={styles.actionText}>{tweet.retweets_count}</span>
                 </button>
                 {/* <button className={styles.actionButton}>
                   💬{" "}
                   <span className={styles.actionText}>{tweet.comments}</span>
                 </button> */}
               </div>
             </div>
           ))}
           </div>
       </div>
       }
        </>
        
        
    )
}
export default Tweets;