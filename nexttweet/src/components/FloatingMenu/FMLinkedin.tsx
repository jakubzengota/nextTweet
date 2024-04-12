import React, { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FloatingMenu, MainButton, ChildButton, Directions } from 'react-floating-button-menu'; // Assuming you have a component library
import userData, { GithubProfile, LinkedinProfile } from './data';
import Image from 'next/image';

interface IImageIconProps {
    src: string;
    alt: string;
}

const ImageIcon = ({ src, alt }: IImageIconProps) => {
    console.log("src: ", src);
    console.log("alt: ", alt);

    return (
        <div className="imageIcon">
            <Image src={src} alt={alt} width={25} height={25} />
        </div>
    );
};

const FMLinkedin = () => {
    const [isOpen, setIsOpen] = useState(false);
    const linkedinProfiles: LinkedinProfile[] = userData.profile.linkedin;
    console.log("linkedinProfiles: ", linkedinProfiles);

    const openMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClickProfile = (linkedinUrl: string) => {
        window.open(linkedinUrl, '_blank');
    }
    return (
        <>
            <FloatingMenu
                slideSpeed={500}
                direction={Directions.Up}
                spacing={8}
                isOpen={isOpen}
                className="floatingMenu"
            >
                <MainButton
                    iconResting={<FaLinkedin style={{ fontSize: 20 }} />}
                    iconActive={<FaLinkedin style={{ fontSize: 20 }} />}
                    onClick={() => openMenu()}
                    size={26}
                />
                {linkedinProfiles.map((profile, index) => (
                    <ChildButton
                        key={index}
                        icon={<FaLinkedin />}
                        background="white"
                        size={40}
                        onClick={() => handleClickProfile(profile.linkedinUrl)}
                        className="floatingChildGithub"
                        title={profile.displayName}
                    />
                ))}
            </FloatingMenu>
        </>
    );
};

export default FMLinkedin;
