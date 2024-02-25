import { Fab, Action } from "react-tiny-fab";
import { FaSquareGithub  } from "react-icons/fa6";
import Image from 'next/image';

interface IData{
    username?: string;
    avatarUrl?: string;
    displayName?: string;
    bio?: string;
    githubUrl?: string;
}

interface IFabGitHub{
    data: IData[];
}

const FabGitHub = ({data}: IFabGitHub) =>{
    console.log("data:",data)
    return(
        <Fab
            icon={<FaSquareGithub/>}
            alwaysShowTitle={true}
            onClick={() => alert("Clicked")}
            mainButtonStyles={{position:"absolute"}}

        >
            {data.map((item, index) => (
                <Action
                    key={index}
                    text={item.displayName}
                    onClick={() => window.open(item.githubUrl, "_blank")}
                >
                    {item.avatarUrl && (
                        <Image
                            src={item?.avatarUrl}
                            width={50}
                            height={50}
                            alt={item.displayName || "Picture"}
                            title={item.bio}
                        />
                    )}
                </Action>
            ))}
        </Fab>
    )
}
export default FabGitHub;