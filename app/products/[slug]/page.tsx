import { getData } from "@/lib/getData";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

import AddToCart from "@/components/shared/addToCart";
import Link from "next/link";
import BreadCrumbComponents from "@/components/shared/breadCrumbComponents";
import Star from "@/public/icons/star";

const Slug = async ({ params }: { params: Params }) => {
  const { slug } = params;

  const data = await getData({
    url: `http://localhost:8080/api/products?filters[slug]=${slug}&populate=*`,
  });
  if (!slug) {
    return
  }

  const product = data.data[0].attributes;
  const productImage = product.image.data.attributes.formats.small;

  return (
    <>
      <BreadCrumbComponents />
      <section className="py-8 bg-white md:py-16 antialiased">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
              <img className="w-full" src={productImage?.url} alt={product.slug} />
            </div>

            <div className="mt-6 sm:mt-8 lg:mt-0">
              <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl ">
                {product.title}
              </h1>
              <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl ">
                  ${product.price}
                </p>

                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-300" />
                    <Star className="w-4 h-4 text-yellow-300" />
                    <Star className="w-4 h-4 text-yellow-300" />
                    <Star className="w-4 h-4 text-yellow-300" />
                    <Star className="w-4 h-4 text-yellow-300" />
                  </div>
                  <p className="text-sm font-medium leading-none text-gray-500 ">
                    (5.0)
                  </p>
                  <Link
                    href="#"
                    className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline "
                  >
                    345 Reviews
                  </Link>
                </div>
              </div>

              <div className="mt-6 gap-4 items-center flex sm:mt-8">
                <AddToCart
                  slug={product.slug}
                  title={product.title}
                  strapiId={data.data[0].id}
                  image={productImage?.url}
                  availableQty={product.availableQty}
                  price={product.price}
                  width={productImage?.width}
                  height={productImage?.height}
                />
                <Link
                  className="text-black bg-[#9BF6FF] border-0 py-2 px-8 focus:outline-none hover:bg-[#84e4ed] rounded text-base "
                  href={"/checkout"}
                >
                  Checkout
                </Link>
              </div>

              <hr className="my-6 md:my-8 border-gray-200" />

              <p className="text-gray-500 ">{product.description}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slug;
