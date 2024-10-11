import { createId } from "@/lib/utils/utils";
import ProductItem from "./product-item";
import { Product } from "@/interfaces/products";
import { getData } from "@/lib/getData";

const ProductList = async () => {
    const {data} = await getData({url: `${process.env.NEXT_PUBLIC_ROOT_LINK}/api/products?populate=*`});
    

    return (
        <>
           <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
            {
              data.map((product: Product) => (
                <ProductItem key={createId()} product={product}/>
              ))
            }
          </div>
        </>
    );
};

export default ProductList;