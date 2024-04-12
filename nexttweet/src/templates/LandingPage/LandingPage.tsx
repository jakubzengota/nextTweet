import Header from "../../components/Header/Header";
import Child from "../../components/Child/Child";
import Footer from "../../components/Footer/Footer";
import LandingPageWelcome from "@/components/LandingPageWelcome/LandingPageWelcome";
import LandingPageOpinion from "@/components/LandingPageOpinion/LandingPageOpinion";
const LandingPage = () => {
    return(
        <main className="main_landingPage">
            <Header />
                <Child className="child1">
                    <LandingPageWelcome />
                </Child>
                <Child>
                    <LandingPageOpinion />
                </Child>
            <Footer />
        </main>
    )
}

export default LandingPage;