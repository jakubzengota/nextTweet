import { Fab, Action } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";
import Image from 'next/image';

interface IData{
    username?: string;
    avatarUrl?: string;
    displayName?: string;
    bio?: string;
    githubUrl?: string;
    linkedinUrl?: string;
}

interface FloatingActionButtonProps {
    icon: JSX.Element;
    data: IData[];
    iconAlt?: JSX.Element;
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
                    {item?.avatarUrl && (
                        <Image
                            src={item?.avatarUrl}
                            width={50}
                            height={50}
                            alt={item.displayName || "Picture"}
                        />
                    )}
                </Action>
            ))}
        </Fab>
    );
};

export default FloatingActionButton;
