import i18n from "@/i18n/index";
import { I18nextProvider } from "react-i18next";

interface IApp{
    children: React.ReactNode
}
const App = ({children}: IApp) => {
    return(
        <I18nextProvider i18n={i18n}>
            {children}
        </I18nextProvider>
    )
}
export default App;