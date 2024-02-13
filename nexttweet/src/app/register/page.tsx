'use client';
import { useState } from 'react';
import Image from 'next/image';
import banzai from '../../assets/icons/banzai.png'


export default function Page() {
   

    return (
        <>
            <div className="background">
              
                
            </div>


            <div> 
                <Image src={banzai} alt='banzai' /> 
            </div>

            </>
            
    );
};

