"use client";
import Close from "@/public/icons/close";
import Minus from "@/public/icons/minus";
import Plus from "@/public/icons/plus";
import { addQty, removeQty } from "@/lib/store/features/cart/cartSlice";
import Link from "next/link";
import useCart from "@/hooks/useCart";
import Image from "next/image";

const CartItem = () => {
  const {cartItems,handleDelete, dispatch} = useCart()
  return (
    <>
      {cartItems?.map((item) => (
        <div
          key={item.id}
          className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6"
        >
          <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
            <div className="shrink-0 md:order-1 h-20 w-20 text-center flex justify-center items-center">
              <Image
              width={item.width}
              height={item.height}
              loading="lazy"
                className={` ${item.width > item.height ? "w-20 h-auto" : "h-20 w-auto"} inline-block`}
                src={item.image}
                alt={item.slug}
              />
            </div>

            <label htmlFor="counter-input" className="sr-only">
              Choose quantity:
            </label>
            <div className="flex items-center justify-between md:order-3 md:justify-end">
              {/* INPUT START */}
              <div className="flex items-center">
                <button
                  onClick={() =>
                    dispatch(
                      removeQty({
                        slug: item.slug,
                        price: item.price,
                      })
                    )
                  }
                  className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
                >
                  <Minus className="h-2.5 w-2.5 text-gray-900 " />
                </button>
                <input
                  type="text"
                  className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 "
                  placeholder=""
                  value={item.quantity}
                  required
                  readOnly
                />
                <button
                  onClick={() =>
                    dispatch(
                      addQty({
                        slug: item.slug,
                        price: item.price,
                      })
                    )
                  }
                  className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100    "
                >
                  <Plus className="h-2.5 w-2.5 text-gray-900 " />
                </button>
              </div>
              {/* INPUT START */}
              <div className="text-end md:order-4 md:w-32">
                <p className="text-base font-bold text-gray-900 ">
                  ${item.price.toLocaleString()}
                </p>
              </div>
            </div>

            <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
              <Link
                href={`/products/${item.slug}`}
                className="text-base font-medium text-gray-900 hover:underline "
              >
                {item.title}
              </Link>

              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => handleDelete(item.slug)}
                  className="inline-flex items-center text-sm font-medium text-red-600 hover:underline "
                >
                  <Close className=" h-6 w-6" fill="#ff0000" />
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartItem;
