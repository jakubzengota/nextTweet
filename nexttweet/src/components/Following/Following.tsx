import Image from 'next/image';
import { RiUserUnfollowFill } from "react-icons/ri";

interface FollowingProps {
    children: React.ReactNode;
    className?: string;
}
const Following = () => {
    return (
        <div className="FollowingMain">
            
            <div className="followingBox">
            <h2>Following</h2>
                {/* napisać repeata z bazy */}
                <div className="follow">
                    <div className="followName">
                        <Image
                            src={"https://picsum.photos/536/354"}
                            alt="Avatar"
                            width={50}
                            height={50}
                            className="followAvatar"
                        />
                        <span>John Smith</span>
                    </div>
                    <div className="followIcon">
                        <RiUserUnfollowFill />
                    </div>
                </div>
                <div className="follow">
                    <div className="followName">
                        <Image
                            src={"https://picsum.photos/536/353"}
                            alt="Avatar"
                            width={50}
                            height={50}
                            className="followAvatar"
                        />
                        <span>John Smith</span>
                    </div>
                    <div className="followIcon">
                        <RiUserUnfollowFill />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Following;