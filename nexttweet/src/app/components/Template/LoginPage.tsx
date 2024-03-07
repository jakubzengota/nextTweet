import Image from "next/image";
import Children from "../Elements/Children/Children";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./LandingPage.module.css";
import stylesLogin from "./LoginPage.module.css";
import Link from "next/link";
import { useState } from "react";

type TLandingPage = {
  children?: React.ReactNode;
};

const LoginPage = ({ children }: TLandingPage) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault(); // Zapobiegaj domyślnej akcji formularza

    const response = await fetch("/api/Auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      // alert('Zalogowano pomyślnie: ' + data.message);
      window.location.href = "/dashboard";
      // Przekieruj użytkownika do /dashboard
    } else {
      alert("Błąd logowania: " + data.message);
    }
  };
  // Update state variables on input change
  const handleInputChange = (event: any) => {
    const { id, value } = event.target;
    if (id === "username") setUsername(value);
    if (id === "password") setPassword(value);
  };

  return (
    <main className={styles.main}>
      <Header className={styles.header} />
      <Children className={styles.children}>
        {children ? (
          <>{children}</>
        ) : (
          <>
            <section>
              <form className="form" onSubmit={handleSubmit}>
                <h3>LOGIN HERE</h3>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  placeholder="Email or Phone"
                  id="username"
                  value={username}
                  onChange={handleInputChange}
                />

                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  value={password}
                  onChange={handleInputChange}
                />
                <div>
                  Don't have an account?{" "}
                  <Link style={{ color: "black" }} href="/register">
                    <span>Sign up</span>
                  </Link>
                </div>

                <button className={stylesLogin.button} type="submit">Log In</button>
              </form>
            </section>
          </>
        )}
      </Children>
      <Footer className={styles.footer} />
    </main>
  );
};

export default LoginPage;
