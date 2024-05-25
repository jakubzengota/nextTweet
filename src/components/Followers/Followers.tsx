import { SlUserFollow } from "react-icons/sl";
import Image from 'next/image';
interface FollowersProps {
    children: React.ReactNode;
    className?: string;
}
const Followers = () => {
    return (
        <div className="FollowingMain">
            
            <div className="followingBox">
            <span className="followingFollowersSpan">Followers</span>
                {/* napisać repeata z bazy */}
                <div className="follow">
                    
                    <div className="followName">
                        <Image
                            src="https://picsum.photos/536/354"
                            alt="Avatar"
                            width={50}
                            height={50}
                            className="followAvatar"
                        />
                        <span>John Smith</span>
                    </div>
                    <div className="followIcon">
                        <SlUserFollow />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Followers;