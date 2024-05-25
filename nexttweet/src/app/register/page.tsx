"use client";
import AuthTemplate from '@/templates/Auth/Auth';
import Register from "@/components/Register/Register";
import useIsAuth from '@/utils/useIsAuth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function RegisterPage() {
    const isAuth = useIsAuth();
    const router = useRouter();

    useEffect(() => {
    if (isAuth) {
        const url = "/dashboard" 
        router.push(url)
    }else{
        const url = "/register"

        router.push(url)

    }
  }, [isAuth, router]);
    return(
        <AuthTemplate page='register'>
            <Register />
        </AuthTemplate>

    );
}
