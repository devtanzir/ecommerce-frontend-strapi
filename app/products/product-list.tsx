import { createId } from "@/lib/utils/utils";
import ProductItem from "./product-item";
import { Product } from "@/interfaces/products";
import { getData } from "@/lib/getData";

const ProductList = async () => {
    const {data} = await getData({url: process.env.NEXT_GET_PRODUCTS ?? ""});
    

    return (
        <>
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
        </>
    );
};

export default ProductList;