import Eye from '@/components/icons/eye';
import Mony from '@/components/icons/mony';
import Star from '@/components/icons/star';
import Truck from '@/components/icons/truck';
import { Product } from '@/interfaces/products';
import Link from 'next/link';
import AddToCart from '../../components/shared/addToCart';
import ViewProduct from './veiw-product';
const ProductItem = ({product}: {product: Product}) => {

    return (
        <>
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm  ">
              <div className="h-56 w-full">
                <Link href={`/product/${product.attributes.slug}`}>
                  <img
                    className="mx-auto h-full "
                    src={`${process.env.NEXT_ROOT_LINK}${product.attributes.image.data.attributes.formats.small.url}`}
                    alt="product-image"
                  />
                </Link>
              </div>
              <div className="pt-6">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800  ">
                    {" "}
                    Up to {Math.floor(Math.random() * 80)}% off{" "}
                  </span>

                  <div className="flex items-center justify-end gap-1">
                    
                    <ViewProduct image={`${process.env.NEXT_ROOT_LINK}${product.attributes.image.data.attributes.formats.small.url}`}/>
                    
                    <AddToCart image={`${process.env.NEXT_ROOT_LINK}${product.attributes.image.data.attributes.formats.small.url}`} price={product.attributes.price} slug={product.attributes.slug} title={product.attributes.title} availableQty={product.attributes.availableQty}/>
                  </div>
                </div>

                <Link
                  href={`/product/${product.attributes.slug}`}
                  className="text-lg font-semibold leading-tight text-gray-900 hover:underline "
                >
                  {product.attributes.title}
                </Link>

                <div className="mt-2 flex items-center gap-2">
                  <div className="flex items-center">
                    {
                        [1,2,3,4,5].map(item =>(
                            <Star key={item} className="h-4 w-4 text-yellow-400"/>
                        ))
                    }
                  </div>

                  <p className="text-sm font-medium text-gray-900 ">5.0</p>
                  <p className="text-sm font-medium text-gray-500 ">(455)</p>
                </div>

                <ul className="mt-2 flex items-center gap-4">
                  <li className="flex items-center gap-2">
                    <Truck className="h-4 w-4 text-gray-500 "/>
                    <p className="text-sm font-medium text-gray-500 ">
                      Fast Delivery
                    </p>
                  </li>

                  <li className="flex items-center gap-2">
                    <Mony className="h-4 w-4 text-gray-500 "/>
                    <p className="text-sm font-medium text-gray-500 ">
                      Best Price
                    </p>
                  </li>
                </ul>

                <div className="mt-4 flex items-center justify-between gap-4">
                  <p className="text-xl font-extrabold leading-tight text-gray-900 ">
                  {product.attributes.price} BDT
                  </p>
                </div>
              </div>
            </div>
        </>
    );
};

export default ProductItem;