"use client";
import { postData } from "@/lib/postData";
import { clearCart } from "@/lib/store/features/cart/cartSlice";
import { resetOrder } from "@/lib/store/features/order/orderSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

const PaymentSuccess = () => {
  const order = useAppSelector((state) => state.order);
  const dispatch = useAppDispatch();
  const [check, setCheck] = useState(true)


  const submitOrder = async () => {
    if (!order.username || order.products.length == 0) {
      console.error("Order is empty or undefined");
      return;
    }

    if (!process.env.NEXT_PUBLIC_ROOT_LINK) {
      console.error("NEXT_PUBLIC_ROOT_LINK environment variable is not defined.");
      return;
    }

    try {
      const response = await postData({ url: `${process.env.NEXT_PUBLIC_ROOT_LINK}/api/orders`, postData: order });
      toast.success("Order Successful!",{
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    })
      dispatch(clearCart());
    } catch (error) {
      console.error("Error posting order:", error);
    }
  };
if (check) {
  submitOrder();
  setCheck(false);
}
  return (
    <>
      <section className="bg-white py-8 antialiased  md:py-16">
        <div className="mx-auto max-w-2xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900  sm:text-2xl mb-2">
            Thanks for your order!
          </h2>
          <p className="text-gray-500  mb-6 md:mb-8">
            Your order{" "}
            <span className="font-medium text-gray-900  hover:underline">
              {order.orderId}
            </span>{" "}
            will be processed within 24 hours during working days. We will
            notify you by email once your order has been shipped.
          </p>
          <div className="space-y-4 sm:space-y-2 rounded-lg border border-gray-100 bg-gray-50 p-6 mb-6 md:mb-8">
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-gray-500 ">Date</dt>
              <dd className="font-medium text-gray-900  sm:text-end">
                {new Date().toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </dd>
            </dl>
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-gray-500 ">
                Payment Method
              </dt>
              <dd className="font-medium text-gray-900  sm:text-end">
                {order.deliveryDetails.paymentMethod}
              </dd>
            </dl>
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-gray-500 ">Name</dt>
              <dd className="font-medium text-gray-900  sm:text-end">
                {order.deliveryDetails.customerName}
              </dd>
            </dl>
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-gray-500 ">
                Address
              </dt>
              <dd className="font-medium text-gray-900  sm:text-end">
                {order.deliveryDetails.address}
              </dd>
            </dl>
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-gray-500 ">Phone</dt>
              <dd className="font-medium text-gray-900  sm:text-end">
                {order.deliveryDetails.phone}
              </dd>
            </dl>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              onClick={() => dispatch(resetOrder())}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
            >
              Go Home
            </Link>
            <Link
              href="/products"
              onClick={() => dispatch(resetOrder())}
              className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
            >
              Return to shopping
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentSuccess;
