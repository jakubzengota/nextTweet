import Children from "../Elements/Children/Children";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./LandingPage.module.css";
type TLandingPage = {
    children?: React.ReactNode;
};

const LandingPage = ({ children }: TLandingPage) => {
    return (
        <main className={styles.main}>
            <Header className="h-[100px] bg-yellow" />
            <div className="flex-grow bg-blue overflow-auto" style={{height: `calc(100vh - 100px - 150px)`}}>
                <Children>
                    {children}
                </Children>
            </div>
            <Footer className="h-[150px] bg-red" />
        </main>
    );
}

export default LandingPage;
