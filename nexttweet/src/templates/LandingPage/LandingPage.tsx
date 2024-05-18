import Header from "../../components/Header/Header";
import Child from "../../components/Child/Child";
import Footer from "../../components/Footer/Footer";
import LandingPageWelcome from "@/components/LandingPageWelcome/LandingPageWelcome";
import LandingPageOpinion from "@/components/LandingPageOpinion/LandingPageOpinion";
import useIsAuth from "@/utils/useIsAuth";
import { useEffect } from "react";
import IsAuth from "@/components/IsAuth/IsAuth";
import { useRouter } from "next/navigation";

const LandingPage = () => {

    const isAuth = useIsAuth();
    const router = useRouter();
    let page = "/"
    useEffect(() => {
    if (isAuth) {
      router.push("/dashboard")
    }
  }, [isAuth, router]);

    return(
        <IsAuth page="">
            <main className="main_landingPage">
                <Header />
                    <Child className="child1">
                        <LandingPageWelcome />
                    </Child>
                    {/* <Child>
                        <LandingPageOpinion />
                    </Child> */}
                <Footer />
            </main>
        </IsAuth>
    )
}

export default LandingPage;