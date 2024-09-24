"use client";
import useToggler from "@/hooks/toggler";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import Link from "next/link";
import CartIcon from "../../../public/icons/cart";
import ChevronDown from "../../../public/icons/chevron-down";
import { remove } from "@/lib/store/features/cart/cartSlice";
import Delete from "../../../public/icons/delete";
import Swal from "sweetalert2";

const CartHeader = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const { handleToggle, open } = useToggler();
  const dispatch = useAppDispatch();
  const handleDelete = (slug: string) => {
    Swal.fire({
      title: "Are you sure?",
      showDenyButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `cancel`
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(remove(slug));
      }
    });
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
          }  absolute top-[75px] right-0 w-[293px] translate-x-[96px] z-10 mx-auto max-w-sm space-y-4 overflow-hidden rounded-lg bg-white p-4 antialiased shadow-lg`}
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
                    {item.price} BDT
                  </p>
                </div>

                <div className="flex items-center justify-end gap-6">
                  <p className="text-sm font-normal leading-none text-gray-500 ">
                    Qty: {item.quantity}
                  </p>

                  <button
                    onClick={() => handleDelete(item.slug)}
                    className="text-red-600 hover:text-red-700 "
                  >
                    <span className="sr-only"> Remove </span>
                    <Delete className="h-4 w-4"/>
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
