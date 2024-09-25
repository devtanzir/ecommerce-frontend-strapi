import Breadcrumbs from "@/components/shared/breadcrumbs";
import Filter from "./filter";
import Sort from "./sort";

const Loading = async () => {
  return (
    <>
      <div className=" bg-[#E6FBFF] py-5">
        <div className="mx-auto max-w-screen-xl flex items-center gap-2">
          <Breadcrumbs text={"Home"} icon home href="/" />
          <Breadcrumbs text={"Products"} href="/products" current />
        </div>
      </div>
      <section className="bg-gray-50 py-8 antialiased md:py-12">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          {/* <!-- Heading & Filters --> */}
          <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">       
          <h2 className="mt-3 text-xl font-semibold text-gray-900 sm:text-2xl">Products - ShopBD</h2>    
            <div className="flex items-center space-x-4">
              <Filter/>
              <Sort/>
            </div>
          </div>
          <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
            {
                [1,2,3,4,5,6,7,8].map((item) => (
                    <div key={item} className=" p-6 rounded-md bg-white shadow-md mx-auto max-w-fit">
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
                ))
            }
          

        </div>
        </div>
      </section>
    </>
  );
};

export default Loading;
