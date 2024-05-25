'use client';
import AuthTemplate from '@/templates/Auth/Auth';
import Login from '@/components/Login/Login';
import Profile from '@/templates/ProfilePage/Profile';
import MainTemplate from '@/templates/Main/Main';
import useIsAuth from '@/utils/useIsAuth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
export default function Page() {
    const isAuth = useIsAuth();
    const router = useRouter();

    useEffect(() => {
        console.log("isAtuhaa:", isAuth)
    if (isAuth) {
        const url = "/profile" 
        router.push(url)
    }else{
        const url = "/"

        router.push(url)

    }
  }, [isAuth, router]);
    return(
        <MainTemplate page='profile' >
            <Profile/>
        </MainTemplate>
            
    )
};

