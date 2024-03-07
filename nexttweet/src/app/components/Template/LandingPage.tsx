import Image from "next/image";
import Children from "../Elements/Children/Children";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./LandingPage.module.css";
import WelcomeImg from "../../../assets/welcome.png";
type TLandingPage = {
    children?: React.ReactNode;
};

const LandingPage = ({ children }: TLandingPage) => {
    return (
        <main className={styles.main}>
            <Header className={styles.header} />
                <Children className={styles.children}>
                    {
                        children?
                        <>{children}</>
                        :
                        <>
                        <section className={styles.children_default}>
                            <div className={styles.children_default_left}>
                                <span className={styles.children_default_left_mainText}>
                                    Stwórzmy wspołną sieć informacji
                                </span>
                                <span className={styles.children_default_left_secondText}>
                                    Dziel się swoimi informacjami z innymi.
                                </span>
                                <div className={styles.children_default_left_divButton}>
                                    <button className={styles.buttonWelcome}>Zarejestruj się</button>
                                </div>
                            </div>
                            <div className={styles.children_default_right}>
                                <Image src={WelcomeImg} alt="welcome" id={styles.welcome}/>
                            </div>

                        </section>
                        <section className={styles.opinion}>
a
                        </section>
                        
                        </>
                        
                    }
                </Children>
            <Footer className={styles.footer} />
        </main>
    );
}

export default LandingPage;
