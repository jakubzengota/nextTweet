'use client';
import AuthTemplate from '@/templates/Auth/Auth';
import Login from '@/components/Login/Login';
import useIsAuth from '@/utils/useIsAuth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
export default function Page() {

    const isAuth = useIsAuth();
    const router = useRouter();

    useEffect(() => {
        console.log("isAtuhaa:", isAuth)
    if (isAuth) {
        const url = "/dashboard" 
        router.push(url)
    }else{
        const url = "/login"

        router.push(url)

    }
  }, [isAuth, router]);
    return(
        
        <AuthTemplate page='login'>
            <Login />
        </AuthTemplate>
    )
};

