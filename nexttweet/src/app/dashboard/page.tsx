"use client";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import data from "../data/data.json";
import userSuggestions from "../data/sugestedUsers.json"
import logo from "../../assets/icons/nt.png"
import Image from 'next/image';
// import JanAvatar from '../../assets/icons/JanMakaronski.png';
import Ewka from '../../assets/icons/Ewa.png.png';
// import JanAvatar from '../../assets/icons/Technologia.png.png';
// import JanAvatar from '../../assets/icons/Francis.png.png';
// import JanAvatar from '../../assets/icons/maciek.png.png';
// import JanAvatar from '../../assets/icons/orzeł.png.png';

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
      <Image src={logo} alt="Google" width={160} height={100} />
        <h1>NextTweet</h1>
        <h1></h1>
      </header>

      <div className={styles.mainContainer}>
        {/* Lewa kolumna z informacjami */}
        <aside className={styles.leftSidebar}>
          <ul>
            <li>
              <Link href="/" className={styles.navLink}>
                Strona główna
              </Link>
            </li>
            <li>
              <Link href="/powiadomienia" className={styles.navLink}>
                Powiadomienia
              </Link>
            </li>
            <li>
              <Link href="/wiadomosci" className={styles.navLink}>
                Wiadomości
              </Link>
            </li>
            <li>
              {" "}
              <Link href="/ustawienia" className={styles.navLink}>
                Ustawienia
              </Link>
            </li>
          </ul>
        </aside>

        <main className={styles.main}>
          <div className={styles.tweetBox}>
            <input></input>
            <button>Tweetuj</button>
          </div>
          <div className="feed">
            {data.posts.map((tweet) => (
              <div key={tweet.id} className={styles.post}>
                <div className="postHeader">
                  <img
                    src={tweet.user.avatar}
                    alt="avatar"
                    className={styles.postAvatar}
                  />
                  <span className={styles.postUser}>{tweet.user.displayName}</span>
                  <span className={styles.postTimestamp}>
                    {new Date(tweet.timestamp).toLocaleString()}
                  </span>
                </div>
                <div className={styles.postContent}>{tweet.content}</div>
                <div className={styles.postActions}>
                  <button className={styles.actionButton}>
                    ❤️ <span className={styles.actionText}>{tweet.likes}</span>
                  </button>
                  <button className={styles.actionButton}>
                    🔁 <span className={styles.actionText}>{tweet.retweets}</span>
                  </button>
                  <button className={styles.actionButton}>
                    💬 <span className={styles.actionText}>{tweet.comments}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Prawa kolumna z informacjami */}
        <aside className={styles.rightSidebar}>
  <h3>Sugestie dla Ciebie</h3>
  <ul>
    {userSuggestions.userSuggestions.map(user => (
      <li key={user.id}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <img src={user.avatarUrl} alt="Avatar" style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }} />
          <div>
            <div style={{ fontWeight: 'bold' }}>{user.displayName}</div>
            <div style={{ fontSize: 'small' }}>{user.bio}</div>
          </div>
        </div>
      </li>
    ))}
  </ul>
</aside>
      </div>

      <footer className={styles.footer}>
        {/* Rozbudowany footer */}
       
        <div className={styles.footerLinks}>
          <Link href="/polityka-prywatnosci">Polityka prywatności</Link>
          <Link href="/kontakt">Kontakt</Link>
        </div>
        <div className={styles.socialMedia}>
          {/* Przykładowe ikony mediów społecznościowych */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>{" "}
          |
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>{" "}
          |
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div> 
        <div className={styles.footerContent}>
          © 2024 Klon Twittera. Wszelkie prawa zastrzeżone.
        </div>
      </footer>
    </div>
  );
}
