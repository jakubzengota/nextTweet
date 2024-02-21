import { Fab, Action } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";
import Image from 'next/image';

interface ILinkedinData {
    displayName?: string;
    linkedinUrl?: string;
}

interface IGithubData {
    username?: string;
    avatarUrl?: string;
    bio?: string;
    displayName?: string;
    githubUrl?: string;
}

interface FloatingActionButtonProps {
    icon: JSX.Element;
    data: (ILinkedinData | IGithubData)[];
}

const FloatingActionButton = ({ icon, data }: FloatingActionButtonProps) => {
    return (
        <Fab
            icon={icon}
            alwaysShowTitle={true}
            onClick={() => alert("Clicked")}
        >
            {data.map((item, index) => (
                <Action
                    key={index}
                    text={item.displayName}
                    onClick={() => window.open(item.linkedinUrl || item.githubUrl || "", "_blank")}
                >
                    {item.avatarUrl && (
                        <Image
                            src={item.avatarUrl}
                            width={500}
                            height={500}
                            alt={item.displayName || "Picture"}
                        />
                    )}
                </Action>
            ))}
        </Fab>
    );
};

export default FloatingActionButton;
