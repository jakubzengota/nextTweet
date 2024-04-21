
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
                        <img
                            src="https://picsum.photos/536/354"
                            alt="Avatar"
                            className="followAvatar"
                        />
                        <span>John Smith</span>
                    </div>
                    <div>
                        <span> + / - </span>
                    </div>
                </div>
                <div className="follow">
                    <div className="followName">
                        <img
                            src="https://picsum.photos/536/514"
                            alt="Avatar"
                            className="followAvatar"
                        />
                        <span>John Smith</span>
                    </div>
                    <div>
                        <span> + / - </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Following;