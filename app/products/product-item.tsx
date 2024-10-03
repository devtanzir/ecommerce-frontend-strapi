import Mony from "@/public/icons/mony";
import Star from "@/public/icons/star";
import Truck from "@/public/icons/truck";
import { Product } from "@/interfaces/products";
import Link from "next/link";
import AddToCart from "../../components/shared/addToCart";
import ViewProduct from "./veiw-product";
const ProductItem = ({ product }: { product: Product }) => {

  const productImage = product.attributes.image.data.attributes.formats.small
  return (
    <>
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm  ">
        <div className="h-56 w-full flex justify-center items-center">
          <Link href={`/products/${product.attributes.slug}`}>
            <img
              className={`inline-block ${productImage?.width > productImage?.height ? "w-full" : "h-56"}`}
              src={`${productImage?.url}`}
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
              <ViewProduct
                image={`${productImage?.url}`}
              />

              <AddToCart
                image={`${productImage?.url}`}
                price={product.attributes.price}
                strapiId={product.id}
                slug={product.attributes.slug}
                title={product.attributes.title}
                availableQty={product.attributes.availableQty}
                width={productImage?.width}
                height={productImage?.height}
              />
            </div>
          </div>

          <Link
            href={`/products/${product.attributes.slug}`}
            className="text-lg font-semibold leading-tight text-gray-900 hover:underline line-clamp-2"
          >
            {product.attributes.title}
          </Link>

          <div className="mt-2 flex items-center gap-2">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((item) => (
                <Star key={item} className="h-4 w-4 text-yellow-400" />
              ))}
            </div>

            <p className="text-sm font-medium text-gray-900 ">5.0</p>
            <p className="text-sm font-medium text-gray-500 ">(455)</p>
          </div>

          <ul className="mt-2 flex items-center gap-4">
            <li className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-gray-500 " />
              <p className="text-sm font-medium text-gray-500 ">
                Fast Delivery
              </p>
            </li>

            <li className="flex items-center gap-2">
              <Mony className="h-4 w-4 text-gray-500 " />
              <p className="text-sm font-medium text-gray-500 ">Best Price</p>
            </li>
          </ul>

          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="text-xl font-extrabold leading-tight text-gray-900 ">
              ${product.attributes.price}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
