import Image from "next/image"
import { useTranslation } from "react-i18next";
import LogoImg from "../../assets/logo.png"
import Link from "next/link";
import React from "react";
import { IModalsContext,  ModalsContext } from "@/Context/ModalsContext";
import useIsAuth from "@/utils/useIsAuth";


const Header = () => {

    const isAuth = useIsAuth();

    const { t : translate } = useTranslation();
    const { languageModal } = React.useContext(ModalsContext) as IModalsContext;   
    
    const logoClick= ()=>{
        window.location.href = '/';
    }

    const logout = () => {
        console.log("dodać wylogowywanie")
    }
    return(
        <header className="header">
            <section className="header_section_logo">
                <Image onClick={logoClick} src={LogoImg} priority alt={translate("LogoAlt")} className="header_section_logo_img"/>
            </section>
            {
                isAuth && 
                    <section>
                        <div className="header_section_nav">
                            <nav className="header_section_nav_links">
                                <Link href="/dashboard" className="header_section_nav_link">Dashboard</Link>
                                <Link href="/profile" className="header_section_nav_link">Profile</Link>

                            </nav>
                            <div className="header_section_nav_lang">
                                <button className="header_section_nav_lang_btn" onClick={()=> logout()}>
                                    LOG OUT
                                </button>
                            </div>
                        </div>
                    </section>


            }
            {
                !isAuth && 
                    <section>
                        <div className="header_section_nav">
                            <nav className="header_section_nav_links">
                                <Link href="/login" className="header_section_nav_link">{"Zaloguj się"}</Link>
                                <Link href="/register" className="header_section_nav_link">{"Zarejestruj się"}</Link>
                            </nav>
                            <div className="header_section_nav_lang">
                                <button className="header_section_nav_lang_btn" onClick={languageModal.openModalLanguage}>
                                    PL
                                </button>
                            </div>
                        </div>
                    </section>
            }
            
        </header>
    )
}

export default Header;