"use client";
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Tweet</title>
        <meta name="description" content="Best of the best tweet page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1>Next Tweet</h1>
      </header>

      <nav className={styles.nav}>
        <Link href="/" className={styles.navLink}>Strona główna</Link>
        <Link href="/powiadomienia" className={styles.navLink}>Powiadomienia</Link>
        <Link href="/wiadomosci" className={styles.navLink}>Wiadomości</Link>
        <Link href="/ustawienia" className={styles.navLink}>Ustawienia</Link>
      </nav>
      <div className={styles.mainContainer}>
        {/* Lewa kolumna z informacjami */}
        <aside className={styles.leftSidebar}>
          <h3>Informacje</h3>
          <ul>
            <li>O nas</li>
            <li>Kariera</li>
            <li>Blog</li>
          </ul>
        </aside>
    

      <main className={styles.main}>
        <div className={styles.tweetBox}>
          <textarea placeholder="Co się dzieje?"></textarea>
          <button>Tweetuj</button>
        </div>
        <div className={styles.feed}>
          <p>Tweet 1</p>
          <p>Tweet 2</p>
        </div>
      </main>

       {/* Prawa kolumna z informacjami */}
       <aside className={styles.rightSidebar}>
          <h3>Sugestie dla Ciebie</h3>
          <ul>
            <li>Użytkownik 1</li>
            <li>Użytkownik 2</li>
            <li>Użytkownik 3</li>
          </ul>
        </aside>
      </div>


      <footer className={styles.footer}>
         {/* Rozbudowany footer */}
         <div className={styles.footerContent}>
          © 2024 Klon Twittera. Wszelkie prawa zastrzeżone.
        </div>
        <div className={styles.footerLinks}>
          <Link href="/polityka-prywatnosci">Polityka prywatności</Link>
          <Link href="/kontakt">Kontakt</Link>
        </div>
        <div className={styles.socialMedia}>
          {/* Przykładowe ikony mediów społecznościowych */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> |
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> |
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </footer>
    </div>
  );
}





// "use client";
// import Head from 'next/head';
// import styles from '../../styles/Home.module.css';


// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>NextTweet</title>
//         <meta name="description" content="Klon Twittera stworzony z Next.js" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         {/* Nagłówek z wyszukiwarką, powiadomieniami itp. */}
//         <header className={styles.header}>
//           <div className={styles.logo}>NT</div>
//           <div className={styles.searchContainer}>
//             <input
//               type="text"
//               placeholder="Szukaj w NextTweet"
//               className={styles.textInput}
//             />
//           </div>
//           <nav className={styles.nav}>
//             <button className={styles.navButton}>Strona główna</button>
//             <button className={styles.navButton}>Powiadomienia</button>
//             <button className={styles.navButton}>Wiadomości</button>
//             <button className={styles.navButton}>Profil</button>
//           </nav>
//         </header>

//         {/* Lewy panel z profilem użytkownika i skrótami do sekcji */}
//         <aside className={styles.leftSidebar}>
//           <div className={styles.profileSection}>
//             <img src="/profile_pic.png" alt="Profil" className={styles.profilePicture} />
//             <h3>Nazwa Użytkownika</h3>
//             <p>@uzytkownik</p>
//           </div>
//           <nav className={styles.sidebarNav}>
//             <button className={styles.sidebarButton}>Eksploruj</button>
//             <button className={styles.sidebarButton}>Listy</button>
//             <button className={styles.sidebarButton}>Więcej</button>
//           </nav>
//         </aside>

//         {/* Główna oś czasu z tweetami */}
//         <section className={styles.feed}>
//           {/* Tutaj będzie iteracja po tweetach i ich wyświetlanie */}
//         </section>

//         {/* Prawy panel z trendami, sugestiami itp. */}
//         <aside className={styles.rightSidebar}>
//           {/* Trendy */}
//           {/* Może jakieś ankiety? */}
//         </aside>
//       </main>

//       <footer className={styles.footer}>
//         {/* Informacje o prawach autorskich, linki itp. */}
//       </footer>
//     </div>
//   );
// }






// export default function Page() {
//   return (
//     <main className="flex min-h-screen flex-col p-6">
//       <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
//       </div>
//       <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
//         <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          
//           <div
//             className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"
//           />
          
//           <Link
//             href="/login"
//             className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
//           >
//             <span>Log in</span> 
//           </Link>
//         </div>
//       </div>
//     </main>
//   );
// }
