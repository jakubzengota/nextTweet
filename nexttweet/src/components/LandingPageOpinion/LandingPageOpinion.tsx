import Image from "next/image";
import Avatar from "../../assets/avatar.png";
const LandingPageOpinion = () => {
    return (
        <div className="landingPageOpinion">
            <div className="landingPageOpinion_opinion">
                <span>&quot;Najlepszy portal tego typu w Polsce!&quot;</span>
            </div>
            <div className="landingPageOpinion_person">
                <Image src={Avatar} alt="avatar" className="landingPageOpinion_personImg"/>
                <span className="landingPageOpinion_personName">Adam Nowak</span>
            </div>
        </div>
    )
}
export default LandingPageOpinion;