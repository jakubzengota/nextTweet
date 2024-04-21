import AccountProfile from "@/components/AccountProfile/AccountProfile";
import Footer from "../../components/Footer/Footer";
import Following from "@/components/Following/Following";
import Followers from "@/components/Followers/Followers";
import Link from "next/link";
import { useEffect, useState } from "react";


const Profile = () => {

    const [followers, setFollowers] = useState([])
    const [followings, setFollowings] = useState([])

    const getFollowers = async (userId:number) => {
        const url = `/api/Follows/getFollowers?user_id=${userId}`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            // body: JSON.stringify({ userId }),
        });

        const data = await response.json();

        if (response.ok) {
            console.log("data :", data.followers)
           setFollowers(data.followers)
           console.log("data :", data)
           console.log("followers :", followers[0])
        } else {
            alert("Błąd : " + data.message);
        }
    };

    const getFollowings = async (userId:number) => {
        const url = `/api/Follows/getFollowings?user_id=${userId}`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            // body: JSON.stringify({ userId }),
        });

        const data = await response.json();

        if (response.ok) {
           console.log("response")
        } else {
            alert("Błąd : " + data.message);
        }
    };

    useEffect(()=>{
        getFollowers(1)
        getFollowings(1)
    },[])

    return(
        <main className="main_Profile">
            <div className="zindexspan">
                <span >YOUR FUTURE</span>
            </div>
            
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