import Image from "next/image";
import Welcome from "../../assets/welcome.png";
const LPWImgage = () =>{
    return (
        <div className="landingPageWelcomeImage">
            <Image src={Welcome} alt="welcome" className="landingPageWelcomeImageImg"/>
        </div>
    )
}

export default LPWImgage;