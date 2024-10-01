"use client"
import Lottie from 'lottie-react';
import NotFound from "@/lottie/404.json"
import Link from 'next/link';

const NotFoundComponent = () => {
    return (
        <div className='flex justify-center items-center w-full h-[90vh]'>
            <div className='w-[400px] m-auto text-center'>
            <Lottie animationData={NotFound} loop autoplay />
            <h6 style={{wordSpacing: "7px"}} className='text-gray-400 text-center font-bold text-[20px] uppercase mb-5'>Maybe You Are Lost !</h6>
            <Link href={"/"} className='text-black bg-[#9BF6FF] border-0 py-2 px-8 focus:outline-none hover:bg-[#84e4ed] rounded text-base font-semibold'>Go Home</Link>
            </div>
        </div>
    );
};

export default NotFoundComponent;
