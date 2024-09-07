"use client";
import useToggler from "@/hooks/toggler";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import Link from "next/link";
import CartIcon from "../icons/cart";
import ChevronDown from "../icons/chevron-down";
import { remove } from "@/lib/store/features/cart/cartSlice";

const CartHeader = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const { handleToggle, open } = useToggler();
  const dispatch = useAppDispatch();
  const handleDelete = (slug: string) => {
    dispatch(remove(slug));
  };
  return (
    <>
      <div className="relative">
        <button
          onClick={handleToggle}
          className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100  text-sm font-medium leading-none text-gray-900 "
        >
          <span className="sr-only">Cart</span>
          <CartIcon />
          <span className="hidden sm:flex">My Cart</span>
          <ChevronDown className="hidden sm:flex text-gray-900  ms-1" />
        </button>

        <div
          className={`${
            !open && "hidden"
          }  absolute top-[75px] right-0 w-[293px] translate-x-[152px] z-10 mx-auto max-w-sm space-y-4 overflow-hidden rounded-lg bg-white p-4 antialiased shadow-lg`}
        >
          {cartItems.length === 0 ? (
            <p className="text-center">No Product in Cart</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="grid grid-cols-2">
                <div>
                  <Link
                    href="/cart"
                    title={item.title}
                    className="w-[167px] inline-block truncate text-sm font-semibold leading-none text-gray-900  hover:underline"
                  >
                    {item.title}
                  </Link>
                  <p className="mt-0.5 truncate text-sm font-normal text-gray-500 ">
                    ${item.price}
                  </p>
                </div>

                <div className="flex items-center justify-end gap-6">
                  <p className="text-sm font-normal leading-none text-gray-500 ">
                    Qty: 1
                  </p>

                  <button
                    onClick={() => handleDelete(item.slug)}
                    className="text-red-600 hover:text-red-700 "
                  >
                    <span className="sr-only"> Remove </span>
                    <svg
                      className="h-4 w-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))
          )}

          {cartItems.length !== 0 && (
            <div className="flex mt-3 w-full justify-between items-center">
            <Link
              href={"/cart"}
              className=" text-center text-black bg-[#9BF6FF] border-0 py-2 px-5 focus:outline-none hover:bg-[#84e4ed] rounded text-base"
            >
              View Cart
            </Link>
            <Link
              href={"/checkout"}
              className=" text-center text-black bg-[#9BF6FF] border-0 py-2 px-5  focus:outline-none hover:bg-[#84e4ed] rounded text-base"
            >
              Checkout
            </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartHeader;
