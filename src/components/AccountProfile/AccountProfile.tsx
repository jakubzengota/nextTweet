
import Image from 'next/image';
interface AccountProfileProps {
    children: React.ReactNode;
    className?: string;
}
const AccountProfile = () => {
    return (
        <div className="AccountProfileMain">
            
                  <Image
                    src={"https://picsum.photos/536/354"}
                    alt="Avatar"
                    height={250}
                    width={250}
                    className="AccountProfileAvatar"
                  />
                  <div>
                    <div className="AccountProfileName">
                            <h2>EmilyJones</h2>
                            <span>San Froancisco</span>
                    </div>
                    
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
    )
}
export default AccountProfile;