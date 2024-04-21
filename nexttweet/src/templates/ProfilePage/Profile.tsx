import AccountProfile from "@/components/AccountProfile/AccountProfile";
import Footer from "../../components/Footer/Footer";
import Following from "@/components/Following/Following";
import Followers from "@/components/Followers/Following";
import Link from "next/link";


const Profile = () => {
    return(
        <main className="main_Profile">
            {/* <Link href="/dashboard">
                Back
              </Link> */}
            <div className="ProfileLeftSide">
                <AccountProfile/>
            </div>
            <div className="ProfileRightSide">
                <Following/>
                <Followers/>
            </div>
        </main>
    )
}

export default Profile;