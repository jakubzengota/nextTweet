import Header from "../../components/Header/Header";
import Child from "../../components/Child/Child";
import Footer from "../../components/Footer/Footer";
interface IAuthTemplate{
    children: React.ReactNode
}

const AuthTemplate = ({children}: IAuthTemplate) => {
    return(
        <main className="main_landingPage">
            <Header />
                <Child className="child1">
                    {children}
                </Child>
            <Footer />
        </main>
    )
}

export default AuthTemplate;