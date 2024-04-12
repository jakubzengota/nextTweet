
interface AccountProfileProps {
    children: React.ReactNode;
    className?: string;
}
const AccountProfile = () => {
    return (
        <div className="AccountProfileMain">
            
                  <img
                    src="https://picsum.photos/536/354"
                    alt="Avatar"
                    className="AccountProfileAvatar"
                  />
                  <div>
                    <div className="AccountProfileName">
                            <h2>Jane Doe</h2>
                            <span>San Froancisco</span>
                    </div>
                    <div className="AccountProfileMainStats">
                        <div className="AccountProfileStat">
                            <span>15</span>
                            <span>Latest tweets</span>
                        </div>
                        <div className="AccountProfileStat">
                            <span>2</span>
                            <span>Trending</span>
                        </div>
                        <div className="AccountProfileStat">
                            <span>50</span>
                            <span>Notifications</span>
                        </div>
                    </div>
                  </div>
                  
        </div>
    )
}
export default AccountProfile;