"use client"
import Lottie from 'lottie-react';
import NoData from "@/lottie/nodata.json"

const NoDataFound = () => {
    return (
        <div className='col-span-4 text-center'>
            <div className='w-[400px] m-auto text-center inline-block'>
            <Lottie animationData={NoData} loop autoplay />
            <h6 style={{wordSpacing: "7px"}} className='text-gray-400 text-center font-bold text-[20px] uppercase mb-5'>No Product Found !</h6>
            </div>
        </div>
    );
};

export default NoDataFound;
