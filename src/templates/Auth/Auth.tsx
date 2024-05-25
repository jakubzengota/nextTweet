import Header from "../../components/Header/Header";
import Child from "../../components/Child/Child";
import Footer from "../../components/Footer/Footer";
import IsAuth from "@/components/IsAuth/IsAuth";
interface IAuthTemplate{
    children: React.ReactNode
    page: string
}

const AuthTemplate = ({children, page}: IAuthTemplate) => {
    return(
        <IsAuth page={page}>
            <main className="main_landingPage">
                <Header />
                    <Child className="child1">
                        {children}
                    </Child>
                <Footer />
            </main>
        </IsAuth>
    )
}

export default AuthTemplate;