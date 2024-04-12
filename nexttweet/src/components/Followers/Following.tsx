
interface FollowersProps {
    children: React.ReactNode;
    className?: string;
}
const Followers = () => {
    return (
        <div className="FollowingMain">
            <h2>Followers</h2>
            <div className="followingBox">
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
                        <span>Connect</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Followers;