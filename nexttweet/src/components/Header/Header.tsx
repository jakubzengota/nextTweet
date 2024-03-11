import Image from "next/image"
import { useTranslation } from "react-i18next";
import LogoImg from "../../assets/logo.png"
import Link from "next/link";

const Header = () => {
    const { t : translate } = useTranslation();
    return(
        <header className="header_landingpage">
            <section className="header_section_logo">
                <Image src={LogoImg} alt={translate("LogoAlt")} />
            </section>
            <section>
                <div className="header_section_nav">
                    <nav>
                        <Link href="/login">{translate("LoginLink")}</Link>
                        <Link href="/register">{translate("RegisterLink")}</Link>
                    </nav>
                    <div className="header_section_nav_lang">
                        <Image src={} alt={} />
                    </div>
                </div>
                <div className="header_section_nav">

                </div>
            </section>
        </header>
    )
}