"use client";
import { getDayAfterOneWeek } from "@/lib/utils/utils";
import useCheckout from "./hooks/useCheckout";
import BreadCrumbComponents from "@/components/shared/breadCrumbComponents";



const Checkout = () => {
  const { handleChange, handleSubmit, totalPrice, state,shipping,cost } = useCheckout();

  if (!cost) {
    return
  }


  return (
    <>
      <BreadCrumbComponents />
      <section className="bg-white py-8 antialiased md:py-16">
        <form
          onSubmit={handleSubmit}
          action="#"
          className="mx-auto max-w-screen-xl px-4 2xl:px-0"
        >
          <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
            <div className="min-w-0 flex-1 space-y-8">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 ">
                  Delivery Details
                </h2>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="username"
                      className="mb-2 block text-sm font-medium text-gray-900 "
                    >
                      {" "}
                      Your name{" "}
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      onChange={handleChange}
                      value={state.username}
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-900 "
                    >
                      {" "}
                      Your email*{" "}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onChange={handleChange}
                      value={state.email}
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500    "
                      placeholder="johndoe@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="address"
                      className="mb-2 block text-sm font-medium text-gray-900 "
                    >
                      {" "}
                      Address*{" "}
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      onChange={handleChange}
                      value={state.address}
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500    "
                      placeholder="house #82, (5th floor), banani, 1213"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-gray-900 "
                    >
                      {" "}
                      Phone Number*{" "}
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      onChange={handleChange}
                      value={state.phone}
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500    "
                      placeholder="+88 01234-567891"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 ">
                  Payment
                </h3>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4  ">
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="credit-card"
                          type="radio"
                          name="paymentMethod"
                          value="credit-card"
                          onChange={handleChange}
                          className="h-4 w-4 border-gray-300 bg-white"
                          defaultChecked
                        />
                      </div>

                      <div className="ms-4 text-sm">
                        <label
                          htmlFor="credit-card"
                          className="font-medium leading-none text-gray-900 "
                        >
                          {" "}
                          Credit Card{" "}
                        </label>
                        <p
                          id="credit-card-text"
                          className="mt-1 text-xs font-normal text-gray-500 "
                        >
                          Pay with your credit card
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4  ">
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="pay-on-delivery"
                          type="radio"
                          name="paymentMethod"
                          value="pay-on-delivery"
                          onChange={handleChange}
                          className="h-4 w-4 border-gray-300 bg-white     "
                        />
                      </div>

                      <div className="ms-4 text-sm">
                        <label
                          htmlFor="pay-on-delivery"
                          className="font-medium leading-none text-gray-900 "
                        >
                          {" "}
                          Payment on delivery{" "}
                        </label>
                        <p
                          id="pay-on-delivery-text"
                          className="mt-1 text-xs font-normal text-gray-500 "
                        >
                          +$15 payment processing fee
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 ">
                  Delivery Methods
                </h3>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4  ">
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="dhl"
                          type="radio"
                          name="deliveryMethod"
                          value="dhl"
                          onChange={handleChange}
                          className="h-4 w-4 border-gray-300 bg-white     "
                          defaultChecked
                        />
                      </div>

                      <div className="ms-4 text-sm">
                        <label
                          htmlFor="dhl"
                          className="font-medium leading-none text-gray-900 "
                        >
                          {" "}
                          $15 - DHL Fast Delivery{" "}
                        </label>
                        <p
                          id="dhl-text"
                          className="mt-1 text-xs font-normal text-gray-500 "
                        >
                          Get it by Tommorow
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4  ">
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="fedex"
                          type="radio"
                          name="deliveryMethod"
                          value="fedex"
                          onChange={handleChange}
                          className="h-4 w-4 border-gray-300 bg-white     "
                        />
                      </div>

                      <div className="ms-4 text-sm">
                        <label
                          htmlFor="fedex"
                          className="font-medium leading-none text-gray-900 "
                        >
                          {" "}
                          Free Delivery - FedEx{" "}
                        </label>
                        <p
                          id="fedex-text"
                          className="mt-1 text-xs font-normal text-gray-500 "
                        >
                        Get it by {getDayAfterOneWeek()}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4  ">
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="express"
                          type="radio"
                          name="deliveryMethod"
                          value="express"
                          onChange={handleChange}
                          className="h-4 w-4 border-gray-300 bg-white     "
                        />
                      </div>

                      <div className="ms-4 text-sm">
                        <label
                          htmlFor="express"
                          className="font-medium leading-none text-gray-900 "
                        >
                          {" "}
                          $49 - Express Delivery{" "}
                        </label>
                        <p
                          id="express-text"
                          className="mt-1 text-xs font-normal text-gray-500 "
                        >
                          Get it today
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
              <div className="flow-root">
                <div className="-my-3 divide-y divide-gray-200">
                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-normal text-gray-500 ">
                      Subtotal
                    </dt>
                    <dd className="text-base font-medium text-gray-900 ">
                      ${totalPrice.toLocaleString()}
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-normal text-gray-500 ">
                      Savings
                    </dt>
                    <dd className="text-base font-medium text-green-500">0</dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-normal text-gray-500 ">
                      Shipping
                    </dt>
                    <dd className="text-base font-medium text-gray-900 ">${shipping}</dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-normal text-gray-500 ">
                      Tax
                    </dt>
                    <dd className="text-base font-medium text-gray-900 ">${(cost - totalPrice).toFixed(2)}</dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-bold text-gray-900 ">
                      Total
                    </dt>
                    <dd className="text-base font-bold text-gray-900 ">
                      ${cost.toLocaleString()}
                    </dd>
                  </dl>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-lg bg-[#9BF6FF] px-5 py-2.5 text-sm text-black font-semibold hover:bg-[#84E4ED] focus:outline-none focus:ring-4  focus:ring-blue-300"
                >
                  Proceed to Payment
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Checkout;
