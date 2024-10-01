"use client"
import Lottie from 'lottie-react';
import NotFound from "@/lottie/thanks.json"
import Link from 'next/link';

const Thanks = () => {
    return (
        <div className='flex flex-col items-center w-full h-[90vh]'>
            <div className='w-[200px] mx-auto mt-14 text-center'>
            <Lottie animationData={NotFound} loop autoplay />
            
            </div>
            <div className='text-center flex flex-col gap-5'>
            <h6 style={{wordSpacing: "7px"}} className='text-gray-400 text-center font-bold text-[20px] uppercase'>Thanks For Shopping</h6>
            <h4 className='text-2xl font-bold'>Please Check Your Email</h4>
            <Link href={"/products"} className='text-black bg-[#9BF6FF] border-0 py-2 px-8 focus:outline-none hover:bg-[#84e4ed] rounded text-base font-semibold'>Continue Shopping</Link>
            </div>
        </div>
    );
};

export default Thanks;
