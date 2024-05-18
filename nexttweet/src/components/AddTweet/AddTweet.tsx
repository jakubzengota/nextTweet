import { useState } from "react";

const AddTweet = () => {

    const [tweetText, setTweetText] = useState("");

    const addTweet = () => {
        
    }
    return(
        <div className="AddTweet">
            
                  <img
                    src="https://picsum.photos/536/354"
                    alt="Avatar"
                    className="AccountProfileAvatar"
                  />
                  <div>
                    <div className="AccountProfileName">
                            <h2>Jane Doe</h2>
                    </div>
                    <div className="AddTweetInputDiv">
                        <textarea id="addTweetTextarea" placeholder="Dodaj nowego tweeta..."  value={tweetText} onChange={e => setTweetText(e.target.value)}/>
                    </div>
                    <div>
                    <button onClick={()=> addTweet()}>Tweetuj</button>
                  </div>
                  </div>
                  
        </div>
    )
}
export default AddTweet;