
import { getData } from '@/hooks/getData';
import { createId } from '@/utils/utils';
import { Product } from '@/interfaces/products';

const Products = async () => {
  const data = await getData({url: process.env.NEXT_GET_PRODUCTS ?? "http://localhost:8080/api/products?populate=*"});

    return (
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Product List - ShopBD</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
    </div>
    <div className="flex flex-wrap -m-4">
      {
        data.data.map((product: Product) => (
          <>
          <div key={createId()} className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src={`${process.env.NEXT_ROOT_LINK}${product.attributes.image.data.attributes.formats.thumbnail.url}`} alt="content"/>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{product.attributes.category}</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{product.attributes.title}</h2>
          <p className="leading-relaxed text-base">{product.attributes.description}</p>
        </div>
      </div>
      </>
        ))
      }
      
    </div>
  </div>
</section>
    );
};

export default Products;