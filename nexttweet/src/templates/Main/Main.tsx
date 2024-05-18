import Header from "../../components/Header/Header";
import Child from "../../components/Child/Child";
import Footer from "../../components/Footer/Footer";

import IsAuth from "@/components/IsAuth/IsAuth";

interface IMainTemplate{
    page: string,
    children: React.ReactNode

}
const MainTemplate = ({page, children}: IMainTemplate) => {


    return(
        <IsAuth page={page}>
            <main className="main_template">
                <Header />
                    <Child className="child_main">
                        {children}
                    </Child>
                    
                <Footer />
            </main>
        </IsAuth>
    )
}

export default MainTemplate;