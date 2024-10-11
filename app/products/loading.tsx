import BreadCrumbComponents from '@/components/shared/breadCrumbComponents';
import React from 'react';

const ProductsLoader = () => {
    return (
        <>
        
        <BreadCrumbComponents />
        <section className="bg-gray-50 py-8 antialiased md:py-12">
          <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
            {/* Heading & Filters */}
            <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
              <h2 className="mt-3 text-xl font-semibold text-gray-900 sm:text-2xl">
                Products - ShopBD
              </h2>
              <div className="flex items-center space-x-4">
                <span className='bg-gray-300 w-[111px] h-[38px] animate-pulse'></span>
              </div>
            </div>
  
            <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
        { [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <div
                      key={item}
                      className=" p-6 rounded-md bg-white shadow-md mx-auto max-w-fit"
                    >
                      <div className="animate-pulse">
                        {/* Product Image Skeleton */}
                        <div className="w-[258px] lg:h-56 md:h-52 h-48 rounded-lg bg-gray-300 mb-6"></div>
                        {/* Product Title Skeleton */}
                        <div className="w-[258px] h-9 rounded-lg bg-gray-300 mb-4"></div>
                        {/* product heading skeleton */}
                        <div className="w-[258px] h-[22.5px] rounded-lg bg-gray-300 mb-2"></div>
                        <div className="w-[258px] h-[22.5px] rounded-lg bg-gray-300 mb-4"></div>
                        {/* Product Description Skeleton */}
                        <div className="w-[175px] h-5 rounded-lg bg-gray-300 mb-4"></div>
                        <div className="w-[258px] h-5 rounded-lg bg-gray-300 mb-4"></div>
                        <div className="w-[100px] h-[25px] rounded-lg bg-gray-300 mb-4"></div>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </section>
        </>
    );
};

export default ProductsLoader;