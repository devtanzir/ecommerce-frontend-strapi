
import Filter from "./filter";
import Sort from "./sort";
import ProductList from "./product-list";
import BreadCrumbComponents from "@/components/shared/breadCrumbComponents";


const Products = async () => {
  return (
    <>
      <BreadCrumbComponents/>
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
          <ProductList/>
        </div>
      </section>
    </>
  );
};



export default Products;