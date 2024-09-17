
import { getData } from "@/hooks/getData";
import { Product } from '@/interfaces/products';
import ProductItem from "./product-item";
import { createId } from "@/utils/utils";
import Filter from "./filter";
import Sort from "./sort";


const Products = async () => {
  const {data} = await getData({url: process.env.NEXT_GET_PRODUCTS ?? "http://localhost:8080/api/products?populate=*"});
  return (
    <>
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
              data.map((product: Product) => (
                <ProductItem key={createId()} product={product}/>
              ))
            }
          </div>
          {
            data.length > 8 && <div className="w-full text-center">
            <button
              type="button"
              className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 "
            >
              Show more
            </button>
          </div>
          }    
        </div>
      </section>
    </>
  );
};



export default Products;