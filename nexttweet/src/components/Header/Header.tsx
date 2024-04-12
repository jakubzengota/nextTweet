import Image from "next/image"
import { useTranslation } from "react-i18next";
import LogoImg from "../../assets/logo.png"
import Link from "next/link";
import React from "react";
import { IInterfaceContext, IModalsContext, InterfaceContext, ModalsContext } from "@/Context/ModalsContext";


const Header = () => {



    const { t : translate } = useTranslation();
    const { languageModal } = React.useContext(ModalsContext) as IModalsContext;    
    return(
        <header className="header">
            <section className="header_section_logo">
                <Image src={LogoImg} priority alt={translate("LogoAlt")} className="header_section_logo_img"/>
            </section>
            <section>
                <div className="header_section_nav">
                    <nav className="header_section_nav_links">
                        <Link href="/login" className="header_section_nav_link">{translate("LoginLink")}</Link>
                        <Link href="/register" className="header_section_nav_link">{translate("RegisterLink")}</Link>
                    </nav>
                    <div className="header_section_nav_lang">
                        <button className="header_section_nav_lang_btn" onClick={languageModal.openModalLanguage}>
                            PL
                        </button>
                    </div>
                </div>
            </section>
        </header>
    )
}

export default Header;