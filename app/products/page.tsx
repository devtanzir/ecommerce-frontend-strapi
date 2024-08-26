
import { getData } from '@/hooks/getData';
import { createId } from '@/utils/utils';
import { Product } from '@/interfaces/products';
import Link from 'next/link';

const Products = async () => {
  const data = await getData({url: process.env.NEXT_GET_PRODUCTS ?? "http://localhost:8080/api/products?populate=*"});

    return (
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Product List - ShopBD</h1>
        <div className="h-1 w-20 bg-[#9BF6FF] rounded"></div>
      </div>
    </div>
    <div className="flex flex-wrap -m-4">
      {
        data.data.map((product: Product) => (
          <>
               <div  key={createId()} className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href={`/product/${product.attributes.slug}`} className="block relative h-96 rounded overflow-hidden cursor-pointer">
          <img alt="ecommerce" className="object-cover object-center mx-auto h-full block" src={`${process.env.NEXT_ROOT_LINK}${product.attributes.image.data.attributes.formats.small.url}`}/>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.attributes.category}</h3>
          <Link href={`/product/${product.attributes.slug}`}>
          <h2 className="text-gray-900 title-font text-lg font-medium cursor-pointer hover:text-[#0ab6c5] transition-all">{product.attributes.title}</h2>
          </Link>
          <p className="mt-1">{product.attributes.price} BDT</p>
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