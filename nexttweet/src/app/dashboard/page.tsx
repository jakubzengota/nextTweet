"use client";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
// import userSuggestions from "../data/sugestedUsers.json";
import userSuggestions from "../../data/sugestedUsers.json"
import data from "../../data/data.json"
import logo from "../../assets/ntlogo.png";
import Image from "next/image";
import { useState } from 'react';



export default function Dashboard() {
  const [isUserProfileVisible, setUserProfileVisible] = useState(false);


  const toggleUserProfile = () => {
    setUserProfileVisible(!isUserProfileVisible);
  };

  const logout = async () => {
    // localStorage.removeItem('yourSessionTokenKey');

    await fetch('/api/Auth/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    window.location.href = '/';
  };


  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image src={logo} alt="Google" width={160} height={100} />
        <h1>NextTweet</h1>
        {/* Dodajemy przycisk wylogowania po prawej stronie */}
        <button onClick={logout} className={styles.logoutButton}>Wyloguj</button>
        {/* <Image src="/door.png" alt="Wyloguj" width={30} height={30}/> */}

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
            <li >
            <Link href="/profile" className={styles.navLink}>
                Profil
              </Link>
            </li>
            <li>
              {" "}
              <Link href="/ustawienia" className={styles.navLink}>
                Ustawienia
              </Link>
            </li>
            <li>
              <Link href="/wiecej" className={styles.navLink}>
                Więcej
              </Link>
            </li>
          </ul>
        </aside>

        {isUserProfileVisible && (
          <>
            <div className="overlay" onClick={toggleUserProfile}></div>
            <div className={styles.userProfileModal}>
              {/* Informacje o użytkowniku, np.: */}
              <p>Imię użytkownika: Jan Kowalski</p>
              <p>Email: jan@example.com</p>
              {/* Więcej informacji o użytkowniku */}
              <button onClick={toggleUserProfile}>Zamknij</button>
            </div>
          </>
        )}

        <main className={styles.main}>
          <div className={styles.tweetBox}>
          </div>
          <div className="feed">
            {data.posts.map((tweet) => (
              <div key={tweet.id} className={styles.post}>
                <div className="postHeader" style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ display: "flex" }}>
                    <img
                      src={tweet.user.avatar}
                      alt="avatar"
                      className={styles.postAvatar}
                    />
                    <span className={styles.postUser}>
                      {tweet.user.displayName}
                    </span>
                  </div>

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
                    🔁{" "}
                    <span className={styles.actionText}>{tweet.retweets}</span>
                  </button>
                  <button className={styles.actionButton}>
                    💬{" "}
                    <span className={styles.actionText}>{tweet.comments}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Prawa kolumna z informacjami */}
        <aside className={styles.rightSidebar}>
          <h2>Sugestie dla Ciebie</h2>
          <ul>
            {userSuggestions.userSuggestions.map((user) => (
              <li key={user.id}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                    background: "#1f1f1f",
                    padding: "10px 30px 10px 30px",
                    borderRadius: "20px",
                  }}
                >
                  <img
                    src={user.avatarUrl}
                    alt="Avatar"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  />
                  <div>
                    <div style={{ fontWeight: "bold" }}>{user.displayName}</div>
                    <div style={{ fontSize: "small", color: "white" }}>{user.bio}</div>
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

