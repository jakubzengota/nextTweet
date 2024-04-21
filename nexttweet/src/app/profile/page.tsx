'use client';
import AuthTemplate from '@/templates/Auth/Auth';
import Login from '@/components/Login/Login';
import Profile from '@/templates/ProfilePage/Profile';
export default function Page() {

    return(
        <AuthTemplate>
            <Profile/>
        </AuthTemplate>
            
    )
};

