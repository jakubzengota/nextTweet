import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FloatingMenu, MainButton, ChildButton, Directions } from 'react-floating-button-menu'; // Assuming you have a component library
import userData, { GithubProfile } from './data';
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

const FMGitHub = () => {
    const [isOpen, setIsOpen] = useState(false);
    const githubProfiles: GithubProfile[] = userData.profile.github;
    console.log("githubProfiles: ", githubProfiles);

    const openMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClickProfile = (githubUrl: string) => {
        window.open(githubUrl, '_blank');
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
                    iconResting={<FaGithub style={{ fontSize: 20 }} />}
                    iconActive={<FaGithub style={{ fontSize: 20 }} />}
                    onClick={() => openMenu()}
                    size={26}
                />
                {githubProfiles.map((profile, index) => (
                    <ChildButton
                        key={index}
                        icon={<ImageIcon src={profile.avatarUrl} alt={profile.displayName} />}
                        background="white"
                        size={40}
                        onClick={() => handleClickProfile(profile.githubUrl)}
                        className="floatingChildGithub"
                        title={profile.displayName}
                    />
                ))}
            </FloatingMenu>
        </>
    );
};

export default FMGitHub;
