import Image from "next/image";
import React from "react";
import Logo from "../../../assets/logo.png";
import styles from "./Header.module.css";
interface IHeaderProps {
  className?: string;
}

const Header: React.FC<IHeaderProps> = ({ className }) => {
  return (
    <header id="header" className={styles.header}>
      <section id="logo_section" className="logo_section">
        <Image src={Logo} alt="logo" id="logo" className={styles.logo} />
      </section>
      <section id="menu_header" className="menu_header">
        <nav className={styles.nav}>
          <button className={styles.button_menu}>Zaloguj się</button>
          <button className={styles.button_menu}>Zarejestruj się</button>
        </nav>
      </section>
    </header>
  );
};

export default Header;
