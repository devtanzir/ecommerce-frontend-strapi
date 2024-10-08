"use client"
import BreadCrumbComponents from "@/components/shared/breadCrumbComponents";
import useCustomer from "@/app/account/hooks/useCustomer";
import CartIcon from "@/public/icons/cart";
import Loader from "@/components/shared/loader";
import { FaRegStar } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import Close from "@/public/icons/close";
import Truck from "@/public/icons/truck";

const Profile = () => {

const {userInfo,user} = useCustomer()

if (!userInfo || !user) {
    return <Loader/>
}
console.log(user);
  return (
    <>
      <BreadCrumbComponents />
      <section className="bg-white py-8 antialiased md:py-8">
        <div className="mx-auto max-w-screen-lg px-4 2xl:px-0">
          <h2 className="mb-4 text-xl font-semibold text-gray-900  sm:text-2xl md:mb-6">
            General overview
          </h2>
          <div className="grid grid-cols-2 gap-6 border-b border-t border-gray-200 py-4  md:py-8 lg:grid-cols-4 xl:gap-16">
            <div>
                <span>
                <CartIcon className="mb-2 h-8 w-8 text-gray-400"/>
                </span>
              <h3 className="mb-2 text-gray-500 ">
                Orders made
              </h3>
              <span className="flex items-center text-2xl font-bold text-gray-900 ">
                {userInfo[0].attributes.orders?.data?.length}
              </span>
            </div>
            <div>
                <span className="mb-[3px] inline-block text-[32px] text-gray-400 ">
                <FaRegStar />
                </span>
              <h3 className="mb-2 text-gray-500 ">
                Reviews added
              </h3>
              <span className="text-2xl font-bold text-gray-900 ">
                0
              </span>
            </div>
            <div>
                <span className="mb-[3px] inline-block text-[32px] text-gray-400 ">
                <GiReturnArrow />
                </span>
              <h3 className="mb-2 text-gray-500 ">
              Product returns
              </h3>
              <span className="text-2xl font-bold text-gray-900 ">
                0
              </span>
            </div>
          </div>
          <div className="py-4 md:py-8">
            <div className="mb-4 grid gap-4 sm:grid-cols-2 sm:gap-8 lg:gap-16">
              <div className="space-y-4">
                <div className="flex space-x-4">
                  <img
                    className="h-16 w-16 rounded-lg"
                    src={user?.imageUrl}
                    alt={user?.fullName ?? "user avatar"}
                  />
                  <div>
                    <span className="mb-2 inline-block rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                      {" "}
                      Default Account{" "}
                    </span>
                    <h2 className="flex items-center text-xl font-bold leading-none text-gray-900  sm:text-2xl">
                      {user?.fullName}
                    </h2>
                  </div>
                </div>
                <dl className="">
                  <dt className="font-semibold text-gray-900 ">
                    Email Address
                  </dt>
                  <dd className="text-gray-500 ">
                    {user?.primaryEmailAddress?.emailAddress}
                  </dd>
                </dl>
                <dl>
                  <dt className="font-semibold text-gray-900 ">
                    Phone Number
                  </dt>
                  <dd className="text-gray-500 ">
                    +1234 567 890 / +12 345 678
                  </dd>
                </dl>
                <dl>
                  <dt className="font-semibold text-gray-900 ">
                    Delivery Address
                  </dt>
                  <dd className="flex items-center gap-1 text-gray-500 ">
                    <Truck className="hidden h-5 w-5 shrink-0 text-gray-400  lg:inline"/>
                    9th St. PATH Station, New York, United States of America
                  </dd>
                </dl>
              </div>
            </div>
            <button
              className="inline-flex w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto"
            >
              <svg
                className="-ms-0.5 me-1.5 h-4 w-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                ></path>
              </svg>
              Edit your data
            </button>
          </div>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4   md:p-8">
            <h3 className="mb-4 text-xl font-semibold text-gray-900 ">
              Latest orders
            </h3>
            <div className="flex flex-wrap items-center gap-y-4 border-b border-gray-200 pb-4  md:pb-5">
              <dl className="w-1/2 sm:w-48">
                <dt className="text-base font-medium text-gray-500 ">
                  Order ID:
                </dt>
                <dd className="mt-1.5 text-base font-semibold text-gray-900 ">
                  <a href="#" className="hover:underline">
                    #FWB12546798
                  </a>
                </dd>
              </dl>

              <dl className="w-1/2 sm:w-1/4 md:flex-1 lg:w-auto">
                <dt className="text-base font-medium text-gray-500 ">
                  Date:
                </dt>
                <dd className="mt-1.5 text-base font-semibold text-gray-900 ">
                  11.12.2023
                </dd>
              </dl>

              <dl className="w-1/2 sm:w-1/5 md:flex-1 lg:w-auto">
                <dt className="text-base font-medium text-gray-500 ">
                  Price:
                </dt>
                <dd className="mt-1.5 text-base font-semibold text-gray-900 ">
                  $499
                </dd>
              </dl>

              <dl className="w-1/2 sm:w-1/4 sm:flex-1 lg:w-auto">
                <dt className="text-base font-medium text-gray-500 ">
                  Status:
                </dt>
                <dd className="me-2 mt-1.5 inline-flex shrink-0 items-center rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                  <svg
                    className="me-1 h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                    ></path>
                  </svg>
                  In transit
                </dd>
              </dl>

              <div className="w-full sm:flex sm:w-32 sm:items-center sm:justify-end sm:gap-4">
                <button
                  id="actionsMenuDropdownModal10"
                  data-dropdown-toggle="dropdownOrderModal10"
                  type="button"
                  className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 md:w-auto"
                >
                  Actions
                  <svg
                    className="-me-0.5 ms-1.5 h-4 w-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 9-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <div
                  id="dropdownOrderModal10"
                  className="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow "
                  data-popper-reference-hidden=""
                  data-popper-escaped=""
                  data-popper-placement="bottom"
                >
                  <ul
                    className="p-2 text-left text-sm font-medium text-gray-500 "
                    aria-labelledby="actionsMenuDropdown10"
                  >
                    <li>
                      <a
                        href="#"
                        className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900  "
                      >
                        <svg
                          className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900  "
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"
                          ></path>
                        </svg>
                        <span>Order again</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900  "
                      >
                        <svg
                          className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900  "
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-width="2"
                            d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                          ></path>
                          <path
                            stroke="currentColor"
                            stroke-width="2"
                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          ></path>
                        </svg>
                        Order details
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-modal-target="deleteOrderModal"
                        data-modal-toggle="deleteOrderModal"
                        className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-red-600 hover:bg-gray-100 "
                      >
                        <svg
                          className="me-1.5 h-4 w-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                          ></path>
                        </svg>
                        Cancel order
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-y-4 border-b border-gray-200 py-4 pb-4  md:py-5">
              <dl className="w-1/2 sm:w-48">
                <dt className="text-base font-medium text-gray-500 ">
                  Order ID:
                </dt>
                <dd className="mt-1.5 text-base font-semibold text-gray-900 ">
                  <a href="#" className="hover:underline">
                    #FWB12546777
                  </a>
                </dd>
              </dl>

              <dl className="w-1/2 sm:w-1/4 md:flex-1 lg:w-auto">
                <dt className="text-base font-medium text-gray-500 ">
                  Date:
                </dt>
                <dd className="mt-1.5 text-base font-semibold text-gray-900 ">
                  10.11.2024
                </dd>
              </dl>

              <dl className="w-1/2 sm:w-1/5 md:flex-1 lg:w-auto">
                <dt className="text-base font-medium text-gray-500 ">
                  Price:
                </dt>
                <dd className="mt-1.5 text-base font-semibold text-gray-900 ">
                  $3,287
                </dd>
              </dl>

              <dl className="w-1/2 sm:w-1/4 sm:flex-1 lg:w-auto">
                <dt className="text-base font-medium text-gray-500 ">
                  Status:
                </dt>
                <dd className="mt-1.5 inline-flex items-center rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 ">
                  <svg
                    className="me-1 h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18 17.94 6M18 18 6.06 6"
                    ></path>
                  </svg>
                  Cancelled
                </dd>
              </dl>

              <div className="w-full sm:flex sm:w-32 sm:items-center sm:justify-end sm:gap-4">
                <button
                  id="actionsMenuDropdownModal11"
                  data-dropdown-toggle="dropdownOrderModal11"
                  type="button"
                  className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 md:w-auto"
                >
                  Actions
                  <svg
                    className="-me-0.5 ms-1.5 h-4 w-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 9-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <div
                  id="dropdownOrderModal11"
                  className="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow "
                  data-popper-reference-hidden=""
                  data-popper-escaped=""
                  data-popper-placement="bottom"
                >
                  <ul
                    className="p-2 text-left text-sm font-medium text-gray-500 "
                    aria-labelledby="actionsMenuDropdown11"
                  >
                    <li>
                      <a
                        href="#"
                        className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900  "
                      >
                        <svg
                          className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900  "
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"
                          ></path>
                        </svg>
                        <span>Order again</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900  "
                      >
                        <svg
                          className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900  "
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-width="2"
                            d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                          ></path>
                          <path
                            stroke="currentColor"
                            stroke-width="2"
                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          ></path>
                        </svg>
                        Order details
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-y-4 border-b border-gray-200 py-4 pb-4  md:py-5">
              <dl className="w-1/2 sm:w-48">
                <dt className="text-base font-medium text-gray-500 ">
                  Order ID:
                </dt>
                <dd className="mt-1.5 text-base font-semibold text-gray-900 ">
                  <a href="#" className="hover:underline">
                    #FWB12546846
                  </a>
                </dd>
              </dl>

              <dl className="w-1/2 sm:w-1/4 md:flex-1 lg:w-auto">
                <dt className="text-base font-medium text-gray-500 ">
                  Date:
                </dt>
                <dd className="mt-1.5 text-base font-semibold text-gray-900 ">
                  07.11.2024
                </dd>
              </dl>

              <dl className="w-1/2 sm:w-1/5 md:flex-1 lg:w-auto">
                <dt className="text-base font-medium text-gray-500 ">
                  Price:
                </dt>
                <dd className="mt-1.5 text-base font-semibold text-gray-900 ">
                  $111
                </dd>
              </dl>

              <dl className="w-1/2 sm:w-1/4 sm:flex-1 lg:w-auto">
                <dt className="text-base font-medium text-gray-500 ">
                  Status:
                </dt>
                <dd className="mt-1.5 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800  ">
                  <svg
                    className="me-1 h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 11.917 9.724 16.5 19 7.5"
                    ></path>
                  </svg>
                  Completed
                </dd>
              </dl>

              <div className="w-full sm:flex sm:w-32 sm:items-center sm:justify-end sm:gap-4">
                <button
                  id="actionsMenuDropdownModal12"
                  data-dropdown-toggle="dropdownOrderModal12"
                  type="button"
                  className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100  md:w-auto"
                >
                  Actions
                  <svg
                    className="-me-0.5 ms-1.5 h-4 w-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 9-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <div
                  id="dropdownOrderModal12"
                  className="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow "
                  data-popper-reference-hidden=""
                  data-popper-escaped=""
                  data-popper-placement="bottom"
                >
                  <ul
                    className="p-2 text-left text-sm font-medium text-gray-500 "
                    aria-labelledby="actionsMenuDropdown12"
                  >
                    <li>
                      <a
                        href="#"
                        className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900  "
                      >
                        <svg
                          className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900  "
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"
                          ></path>
                        </svg>
                        <span>Order again</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900  "
                      >
                        <svg
                          className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900  "
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-width="2"
                            d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                          ></path>
                          <path
                            stroke="currentColor"
                            stroke-width="2"
                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          ></path>
                        </svg>
                        Order details
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-y-4 pt-4 md:pt-5">
              <dl className="w-1/2 sm:w-48">
                <dt className="text-base font-medium text-gray-500 ">
                  Order ID:
                </dt>
                <dd className="mt-1.5 text-base font-semibold text-gray-900 ">
                  <a href="#" className="hover:underline">
                    #FWB12546212
                  </a>
                </dd>
              </dl>

              <dl className="w-1/2 sm:w-1/4 md:flex-1 lg:w-auto">
                <dt className="text-base font-medium text-gray-500 ">
                  Date:
                </dt>
                <dd className="mt-1.5 text-base font-semibold text-gray-900 ">
                  18.10.2024
                </dd>
              </dl>

              <dl className="w-1/2 sm:w-1/5 md:flex-1 lg:w-auto">
                <dt className="text-base font-medium text-gray-500 ">
                  Price:
                </dt>
                <dd className="mt-1.5 text-base font-semibold text-gray-900 ">
                  $756
                </dd>
              </dl>

              <dl className="w-1/2 sm:w-1/4 sm:flex-1 lg:w-auto">
                <dt className="text-base font-medium text-gray-500 ">
                  Status:
                </dt>
                <dd className="mt-1.5 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800  ">
                  <svg
                    className="me-1 h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 11.917 9.724 16.5 19 7.5"
                    ></path>
                  </svg>
                  Completed
                </dd>
              </dl>

              <div className="w-full sm:flex sm:w-32 sm:items-center sm:justify-end sm:gap-4">
                <button
                  id="actionsMenuDropdownModal13"
                  data-dropdown-toggle="dropdownOrderModal13"
                  type="button"
                  className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100  md:w-auto"
                >
                  Actions
                  <svg
                    className="-me-0.5 ms-1.5 h-4 w-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 9-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <div
                  id="dropdownOrderModal13"
                  className="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow "
                  data-popper-reference-hidden=""
                  data-popper-escaped=""
                  data-popper-placement="bottom"
                >
                  <ul
                    className="p-2 text-left text-sm font-medium text-gray-500 "
                    aria-labelledby="actionsMenuDropdown13"
                  >
                    <li>
                      <a
                        href="#"
                        className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900  "
                      >
                        <svg
                          className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900  "
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"
                          ></path>
                        </svg>
                        <span>Order again</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900  "
                      >
                        <svg
                          className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900  "
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-width="2"
                            d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                          ></path>
                          <path
                            stroke="currentColor"
                            stroke-width="2"
                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          ></path>
                        </svg>
                        Order details
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Account Information Modal --> */}
        {/* //! Handle Leter */}

        {/* <div
          className="max-h-auto fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden antialiased md:inset-0"
        >
            
          <div className="max-h-auto relative max-h-full w-full max-w-lg p-4">
            
            <div className="relative rounded-lg bg-white shadow ">
              
              <div className="flex items-center justify-between rounded-t border-b border-gray-200 p-4  md:p-5">
                <h3 className="text-lg font-semibold text-gray-900 ">
                  Account Information
                </h3>
                <button
                  type="button"
                  className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 "
                >
                    <Close className="h-3 w-3"/>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
            
              <form className="p-4 md:p-5">
                <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="col-span-2">
                    <label
                      htmlFor="pick-up-point-input"
                      className="mb-2 block text-sm font-medium text-gray-900 "
                    >
                      {" "}
                      Pick-up point*{" "}
                    </label>
                    <input
                      type="text"
                      id="pick-up-point-input"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Enter the pick-up point name"
                      required
                    />
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="full_name_info_modal"
                      className="mb-2 block text-sm font-medium text-gray-900 "
                    >
                      {" "}
                      Your Full Name*{" "}
                    </label>
                    <input
                      type="text"
                      id="full_name_info_modal"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="email_info_modal"
                      className="mb-2 block text-sm font-medium text-gray-900 "
                    >
                      {" "}
                      Your Email*{" "}
                    </label>
                    <input
                      type="text"
                      id="email_info_modal"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
                      placeholder="Enter your email here"
                      required
                    />
                  </div>

                  <div className="col-span-2">
                    <label
                      htmlFor="phone-input_billing_modal"
                      className="mb-2 block text-sm font-medium text-gray-900 "
                    >
                      {" "}
                      Phone Number*{" "}
                    </label>
                    <div className="flex items-center">
                      <button
                        id="dropdown_phone_input__button_billing_modal"
                        data-dropdown-toggle="dropdown_phone_input_billing_modal"
                        className="z-10 inline-flex shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100"
                        type="button"
                      >
                        <svg
                          fill="none"
                          aria-hidden="true"
                          className="me-2 h-4 w-4"
                          viewBox="0 0 20 15"
                        >
                          <rect
                            width="19.6"
                            height="14"
                            y=".5"
                            fill="#fff"
                            rx="2"
                          />
                          <mask
                            id="a"
                            style={{ maskType: "luminance" }}
                            width="20"
                            height="15"
                            x="0"
                            y="0"
                            maskUnits="userSpaceOnUse"
                          >
                            <rect
                              width="19.6"
                              height="14"
                              y=".5"
                              fill="#fff"
                              rx="2"
                            />
                          </mask>
                          <g mask="url(#a)">
                            <path
                              fill="#D02F44"
                              fill-rule="evenodd"
                              d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z"
                              clip-rule="evenodd"
                            />
                            <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
                            <g filter="url(#filter0_d_343_121520)">
                              <path
                                fill="url(#paint0_linear_343_121520)"
                                fill-rule="evenodd"
                                d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
                                clip-rule="evenodd"
                              />
                            </g>
                          </g>
                          <defs>
                            <linearGradient
                              id="paint0_linear_343_121520"
                              x1=".933"
                              x2=".933"
                              y1="1.433"
                              y2="6.1"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#fff" />
                              <stop offset="1" stop-color="#F0F0F0" />
                            </linearGradient>
                            <filter
                              id="filter0_d_343_121520"
                              width="6.533"
                              height="5.667"
                              x=".933"
                              y="1.433"
                              color-interpolation-filters="sRGB"
                              filterUnits="userSpaceOnUse"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                result="hardAlpha"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              />
                              <feOffset dy="1" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                              <feBlend
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_343_121520"
                              />
                              <feBlend
                                in="SourceGraphic"
                                in2="effect1_dropShadow_343_121520"
                                result="shape"
                              />
                            </filter>
                          </defs>
                        </svg>
                        +1
                        <svg
                          className="-me-0.5 ms-2 h-4 w-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m19 9-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <div
                        id="dropdown_phone_input_billing_modal"
                        className="z-10 hidden w-56 divide-y divide-gray-100 rounded-lg bg-white shadow "
                      >
                        <ul
                          className="p-2 text-sm font-medium text-gray-700"
                          aria-labelledby="dropdown_phone_input__button_billing_modal"
                        >
                          <li>
                            <button
                              type="button"
                              className="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900  "
                              role="menuitem"
                            >
                              <span className="inline-flex items-center">
                                <svg
                                  fill="none"
                                  aria-hidden="true"
                                  className="me-2 h-4 w-4"
                                  viewBox="0 0 20 15"
                                >
                                  <rect
                                    width="19.6"
                                    height="14"
                                    y=".5"
                                    fill="#fff"
                                    rx="2"
                                  />
                                  <mask
                                    id="a"
                                    style={{ maskType: "luminance" }}
                                    width="20"
                                    height="15"
                                    x="0"
                                    y="0"
                                    maskUnits="userSpaceOnUse"
                                  >
                                    <rect
                                      width="19.6"
                                      height="14"
                                      y=".5"
                                      fill="#fff"
                                      rx="2"
                                    />
                                  </mask>
                                  <g mask="url(#a)">
                                    <path
                                      fill="#D02F44"
                                      fill-rule="evenodd"
                                      d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z"
                                      clip-rule="evenodd"
                                    />
                                    <path
                                      fill="#46467F"
                                      d="M0 .5h8.4v6.533H0z"
                                    />
                                    <g filter="url(#filter0_d_343_121520)">
                                      <path
                                        fill="url(#paint0_linear_343_121520)"
                                        fill-rule="evenodd"
                                        d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
                                        clip-rule="evenodd"
                                      />
                                    </g>
                                  </g>
                                  <defs>
                                    <linearGradient
                                      id="paint0_linear_343_121520"
                                      x1=".933"
                                      x2=".933"
                                      y1="1.433"
                                      y2="6.1"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stop-color="#fff" />
                                      <stop offset="1" stop-color="#F0F0F0" />
                                    </linearGradient>
                                    <filter
                                      id="filter0_d_343_121520"
                                      width="6.533"
                                      height="5.667"
                                      x=".933"
                                      y="1.433"
                                      color-interpolation-filters="sRGB"
                                      filterUnits="userSpaceOnUse"
                                    >
                                      <feFlood
                                        flood-opacity="0"
                                        result="BackgroundImageFix"
                                      />
                                      <feColorMatrix
                                        in="SourceAlpha"
                                        result="hardAlpha"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                      />
                                      <feOffset dy="1" />
                                      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                      <feBlend
                                        in2="BackgroundImageFix"
                                        result="effect1_dropShadow_343_121520"
                                      />
                                      <feBlend
                                        in="SourceGraphic"
                                        in2="effect1_dropShadow_343_121520"
                                        result="shape"
                                      />
                                    </filter>
                                  </defs>
                                </svg>
                                United States (+1)
                              </span>
                            </button>
                          </li>
                          <li>
                            <button
                              type="button"
                              className="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900  "
                              role="menuitem"
                            >
                              <span className="inline-flex items-center">
                                <svg
                                  className="me-2 h-4 w-4"
                                  fill="none"
                                  viewBox="0 0 20 15"
                                >
                                  <rect
                                    width="19.6"
                                    height="14"
                                    y=".5"
                                    fill="#fff"
                                    rx="2"
                                  />
                                  <mask
                                    id="a"
                                    style={{ maskType: "luminance" }}
                                    width="20"
                                    height="15"
                                    x="0"
                                    y="0"
                                    maskUnits="userSpaceOnUse"
                                  >
                                    <rect
                                      width="19.6"
                                      height="14"
                                      y=".5"
                                      fill="#fff"
                                      rx="2"
                                    />
                                  </mask>
                                  <g mask="url(#a)">
                                    <path fill="#0A17A7" d="M0 .5h19.6v14H0z" />
                                    <path
                                      fill="#fff"
                                      fill-rule="evenodd"
                                      d="M-.898-.842L7.467 4.8V-.433h4.667V4.8l8.364-5.642L21.542.706l-6.614 4.46H19.6v4.667h-4.672l6.614 4.46-1.044 1.549-8.365-5.642v5.233H7.467V10.2l-8.365 5.642-1.043-1.548 6.613-4.46H0V5.166h4.672L-1.941.706-.898-.842z"
                                      clip-rule="evenodd"
                                    />
                                    <path
                                      stroke="#DB1F35"
                                      stroke-linecap="round"
                                      stroke-width=".667"
                                      d="M13.067 4.933L21.933-.9M14.009 10.088l7.947 5.357M5.604 4.917L-2.686-.67M6.503 10.024l-9.189 6.093"
                                    />
                                    <path
                                      fill="#E6273E"
                                      fill-rule="evenodd"
                                      d="M0 8.9h8.4v5.6h2.8V8.9h8.4V6.1h-8.4V.5H8.4v5.6H0v2.8z"
                                      clip-rule="evenodd"
                                    />
                                  </g>
                                </svg>
                                United Kingdom (+44)
                              </span>
                            </button>
                          </li>
                          <li>
                            <button
                              type="button"
                              className="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900  "
                              role="menuitem"
                            >
                              <span className="inline-flex items-center">
                                <svg
                                  className="me-2 h-4 w-4"
                                  fill="none"
                                  viewBox="0 0 20 15"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    width="19.6"
                                    height="14"
                                    y=".5"
                                    fill="#fff"
                                    rx="2"
                                  />
                                  <mask
                                    id="a"
                                    style={{ maskType: "luminance" }}
                                    width="20"
                                    height="15"
                                    x="0"
                                    y="0"
                                    maskUnits="userSpaceOnUse"
                                  >
                                    <rect
                                      width="19.6"
                                      height="14"
                                      y=".5"
                                      fill="#fff"
                                      rx="2"
                                    />
                                  </mask>
                                  <g mask="url(#a)">
                                    <path fill="#0A17A7" d="M0 .5h19.6v14H0z" />
                                    <path
                                      fill="#fff"
                                      stroke="#fff"
                                      stroke-width=".667"
                                      d="M0 .167h-.901l.684.586 3.15 2.7v.609L-.194 6.295l-.14.1v1.24l.51-.319L3.83 5.033h.73L7.7 7.276a.488.488 0 00.601-.767L5.467 4.08v-.608l2.987-2.134a.667.667 0 00.28-.543V-.1l-.51.318L4.57 2.5h-.73L.66.229.572.167H0z"
                                    />
                                    <path
                                      fill="url(#paint0_linear_374_135177)"
                                      fill-rule="evenodd"
                                      d="M0 2.833V4.7h3.267v2.133c0 .369.298.667.666.667h.534a.667.667 0 00.666-.667V4.7H8.2a.667.667 0 00.667-.667V3.5a.667.667 0 00-.667-.667H5.133V.5H3.267v2.333H0z"
                                      clip-rule="evenodd"
                                    />
                                    <path
                                      fill="url(#paint1_linear_374_135177)"
                                      fill-rule="evenodd"
                                      d="M0 3.3h3.733V.5h.934v2.8H8.4v.933H4.667v2.8h-.934v-2.8H0V3.3z"
                                      clip-rule="evenodd"
                                    />
                                    <path
                                      fill="#fff"
                                      fill-rule="evenodd"
                                      d="M4.2 11.933l-.823.433.157-.916-.666-.65.92-.133.412-.834.411.834.92.134-.665.649.157.916-.823-.433zm9.8.7l-.66.194.194-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.194zm0-8.866l-.66.193.194-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.193zm2.8 2.8l-.66.193.193-.66-.193-.66.66.193.66-.193-.193.66.193.66-.66-.193zm-5.6.933l-.66.193.193-.66-.193-.66.66.194.66-.194-.193.66.193.66-.66-.193zm4.2 1.167l-.33.096.096-.33-.096-.33.33.097.33-.097-.097.33.097.33-.33-.096z"
                                      clip-rule="evenodd"
                                    />
                                  </g>
                                  <defs>
                                    <linearGradient
                                      id="paint0_linear_374_135177"
                                      x1="0"
                                      x2="0"
                                      y1=".5"
                                      y2="7.5"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stop-color="#fff" />
                                      <stop offset="1" stop-color="#F0F0F0" />
                                    </linearGradient>
                                    <linearGradient
                                      id="paint1_linear_374_135177"
                                      x1="0"
                                      x2="0"
                                      y1=".5"
                                      y2="7.033"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stop-color="#FF2E3B" />
                                      <stop offset="1" stop-color="#FC0D1B" />
                                    </linearGradient>
                                  </defs>
                                </svg>
                                Australia (+61)
                              </span>
                            </button>
                          </li>
                          <li>
                            <button
                              type="button"
                              className="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900  "
                              role="menuitem"
                            >
                              <span className="inline-flex items-center">
                                <svg
                                  className="me-2 h-4 w-4"
                                  fill="none"
                                  viewBox="0 0 20 15"
                                >
                                  <rect
                                    width="19.6"
                                    height="14"
                                    y=".5"
                                    fill="#fff"
                                    rx="2"
                                  />
                                  <mask
                                    id="a"
                                    style={{ maskType: "luminance" }}
                                    width="20"
                                    height="15"
                                    x="0"
                                    y="0"
                                    maskUnits="userSpaceOnUse"
                                  >
                                    <rect
                                      width="19.6"
                                      height="14"
                                      y=".5"
                                      fill="#fff"
                                      rx="2"
                                    />
                                  </mask>
                                  <g mask="url(#a)">
                                    <path
                                      fill="#262626"
                                      fill-rule="evenodd"
                                      d="M0 5.167h19.6V.5H0v4.667z"
                                      clip-rule="evenodd"
                                    />
                                    <g filter="url(#filter0_d_374_135180)">
                                      <path
                                        fill="#F01515"
                                        fill-rule="evenodd"
                                        d="M0 9.833h19.6V5.167H0v4.666z"
                                        clip-rule="evenodd"
                                      />
                                    </g>
                                    <g filter="url(#filter1_d_374_135180)">
                                      <path
                                        fill="#FFD521"
                                        fill-rule="evenodd"
                                        d="M0 14.5h19.6V9.833H0V14.5z"
                                        clip-rule="evenodd"
                                      />
                                    </g>
                                  </g>
                                  <defs>
                                    <filter
                                      id="filter0_d_374_135180"
                                      width="19.6"
                                      height="4.667"
                                      x="0"
                                      y="5.167"
                                      color-interpolation-filters="sRGB"
                                      filterUnits="userSpaceOnUse"
                                    >
                                      <feFlood
                                        flood-opacity="0"
                                        result="BackgroundImageFix"
                                      />
                                      <feColorMatrix
                                        in="SourceAlpha"
                                        result="hardAlpha"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                      />
                                      <feOffset />
                                      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                      <feBlend
                                        in2="BackgroundImageFix"
                                        result="effect1_dropShadow_374_135180"
                                      />
                                      <feBlend
                                        in="SourceGraphic"
                                        in2="effect1_dropShadow_374_135180"
                                        result="shape"
                                      />
                                    </filter>
                                    <filter
                                      id="filter1_d_374_135180"
                                      width="19.6"
                                      height="4.667"
                                      x="0"
                                      y="9.833"
                                      color-interpolation-filters="sRGB"
                                      filterUnits="userSpaceOnUse"
                                    >
                                      <feFlood
                                        flood-opacity="0"
                                        result="BackgroundImageFix"
                                      />
                                      <feColorMatrix
                                        in="SourceAlpha"
                                        result="hardAlpha"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                      />
                                      <feOffset />
                                      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                      <feBlend
                                        in2="BackgroundImageFix"
                                        result="effect1_dropShadow_374_135180"
                                      />
                                      <feBlend
                                        in="SourceGraphic"
                                        in2="effect1_dropShadow_374_135180"
                                        result="shape"
                                      />
                                    </filter>
                                  </defs>
                                </svg>
                                Germany (+49)
                              </span>
                            </button>
                          </li>
                          <li>
                            <button
                              type="button"
                              className="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900  "
                              role="menuitem"
                            >
                              <span className="inline-flex items-center">
                                <svg
                                  className="me-2 h-4 w-4"
                                  fill="none"
                                  viewBox="0 0 20 15"
                                >
                                  <rect
                                    width="19.1"
                                    height="13.5"
                                    x=".25"
                                    y=".75"
                                    fill="#fff"
                                    stroke="#F5F5F5"
                                    stroke-width=".5"
                                    rx="1.75"
                                  />
                                  <mask
                                    id="a"
                                    style={{ maskType: "luminance" }}
                                    width="20"
                                    height="15"
                                    x="0"
                                    y="0"
                                    maskUnits="userSpaceOnUse"
                                  >
                                    <rect
                                      width="19.1"
                                      height="13.5"
                                      x=".25"
                                      y=".75"
                                      fill="#fff"
                                      stroke="#fff"
                                      stroke-width=".5"
                                      rx="1.75"
                                    />
                                  </mask>
                                  <g mask="url(#a)">
                                    <path
                                      fill="#F44653"
                                      d="M13.067.5H19.6v14h-6.533z"
                                    />
                                    <path
                                      fill="#1035BB"
                                      fill-rule="evenodd"
                                      d="M0 14.5h6.533V.5H0v14z"
                                      clip-rule="evenodd"
                                    />
                                  </g>
                                </svg>
                                France (+33)
                              </span>
                            </button>
                          </li>
                          <li>
                            <button
                              type="button"
                              className="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900  "
                              role="menuitem"
                            >
                              <span className="inline-flex items-center">
                                <svg
                                  className="me-2 h-4 w-4"
                                  fill="none"
                                  viewBox="0 0 20 15"
                                >
                                  <rect
                                    width="19.6"
                                    height="14"
                                    y=".5"
                                    fill="#fff"
                                    rx="2"
                                  />
                                  <mask
                                    id="a"
                                    style={{ maskType: "luminance" }}
                                    width="20"
                                    height="15"
                                    x="0"
                                    y="0"
                                    maskUnits="userSpaceOnUse"
                                  >
                                    <rect
                                      width="19.6"
                                      height="14"
                                      y=".5"
                                      fill="#fff"
                                      rx="2"
                                    />
                                  </mask>
                                  <g mask="url(#a)">
                                    <path
                                      fill="#262626"
                                      fill-rule="evenodd"
                                      d="M0 5.167h19.6V.5H0v4.667z"
                                      clip-rule="evenodd"
                                    />
                                    <g filter="url(#filter0_d_374_135180)">
                                      <path
                                        fill="#F01515"
                                        fill-rule="evenodd"
                                        d="M0 9.833h19.6V5.167H0v4.666z"
                                        clip-rule="evenodd"
                                      />
                                    </g>
                                    <g filter="url(#filter1_d_374_135180)">
                                      <path
                                        fill="#FFD521"
                                        fill-rule="evenodd"
                                        d="M0 14.5h19.6V9.833H0V14.5z"
                                        clip-rule="evenodd"
                                      />
                                    </g>
                                  </g>
                                  <defs>
                                    <filter
                                      id="filter0_d_374_135180"
                                      width="19.6"
                                      height="4.667"
                                      x="0"
                                      y="5.167"
                                      color-interpolation-filters="sRGB"
                                      filterUnits="userSpaceOnUse"
                                    >
                                      <feFlood
                                        flood-opacity="0"
                                        result="BackgroundImageFix"
                                      />
                                      <feColorMatrix
                                        in="SourceAlpha"
                                        result="hardAlpha"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                      />
                                      <feOffset />
                                      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                      <feBlend
                                        in2="BackgroundImageFix"
                                        result="effect1_dropShadow_374_135180"
                                      />
                                      <feBlend
                                        in="SourceGraphic"
                                        in2="effect1_dropShadow_374_135180"
                                        result="shape"
                                      />
                                    </filter>
                                    <filter
                                      id="filter1_d_374_135180"
                                      width="19.6"
                                      height="4.667"
                                      x="0"
                                      y="9.833"
                                      color-interpolation-filters="sRGB"
                                      filterUnits="userSpaceOnUse"
                                    >
                                      <feFlood
                                        flood-opacity="0"
                                        result="BackgroundImageFix"
                                      />
                                      <feColorMatrix
                                        in="SourceAlpha"
                                        result="hardAlpha"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                      />
                                      <feOffset />
                                      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                      <feBlend
                                        in2="BackgroundImageFix"
                                        result="effect1_dropShadow_374_135180"
                                      />
                                      <feBlend
                                        in="SourceGraphic"
                                        in2="effect1_dropShadow_374_135180"
                                        result="shape"
                                      />
                                    </filter>
                                  </defs>
                                </svg>
                                Germany (+49)
                              </span>
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div className="relative w-full">
                        <input
                          type="text"
                          id="phone-input"
                          className="z-20 block w-full rounded-e-lg border border-s-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                          placeholder="123-456-7890"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <div className="mb-2 flex items-center gap-2">
                      <label
                        htmlFor="select_country_input_billing_modal"
                        className="block text-sm font-medium text-gray-900 "
                      >
                        {" "}
                        Country*{" "}
                      </label>
                    </div>
                    <select
                      id="select_country_input_billing_modal"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
                    >
                      <option selected>United States</option>
                      <option value="AS">Australia</option>
                      <option value="FR">France</option>
                      <option value="ES">Spain</option>
                      <option value="UK">United Kingdom</option>
                    </select>
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <div className="mb-2 flex items-center gap-2">
                      <label
                        htmlFor="select_city_input_billing_modal"
                        className="block text-sm font-medium text-gray-900 "
                      >
                        {" "}
                        City*{" "}
                      </label>
                    </div>
                    <select
                      id="select_city_input_billing_modal"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
                    >
                      <option selected>San Francisco</option>
                      <option value="NY">New York</option>
                      <option value="LA">Los Angeles</option>
                      <option value="CH">Chicago</option>
                      <option value="HU">Houston</option>
                    </select>
                  </div>

                  <div className="col-span-2">
                    <label
                      htmlFor="address_billing_modal"
                      className="mb-2 block text-sm font-medium text-gray-900 "
                    >
                      {" "}
                      Delivery Address*{" "}
                    </label>
                    <textarea
                      id="address_billing_modal"
                      rows={4}
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
                      placeholder="Enter here your address"
                    ></textarea>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="company_name"
                      className="mb-2 block text-sm font-medium text-gray-900 "
                    >
                      {" "}
                      Company name{" "}
                    </label>
                    <input
                      type="text"
                      id="company_name"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
                      placeholder="Flowbite LLC"
                    />
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="vat_number"
                      className="mb-2 block text-sm font-medium text-gray-900 "
                    >
                      {" "}
                      VAT number{" "}
                    </label>
                    <input
                      type="text"
                      id="vat_number"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
                      placeholder="DE42313253"
                    />
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-4  md:pt-5">
                  <button
                    type="submit"
                    className="me-2 inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    Save information
                  </button>
                  <button
                    type="button"
                    data-modal-toggle="accountInformationModal2"
                    className="me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 "
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div> */}
           {/* //! Handle Leter */}

        {/* <div
          className="fixed left-0 right-0 top-0 z-50 hidden h-modal w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 md:h-full"
        >
          <div className="relative h-full w-full max-w-md p-4 md:h-auto">
         
            <div className="relative rounded-lg bg-white p-4 text-center shadow  sm:p-5">
              <button
                type="button"
                className="absolute right-2.5 top-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 "
                data-modal-toggle="deleteOrderModal"
              >
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 p-2 ">
                <svg
                  className="h-8 w-8 text-gray-500 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                  />
                </svg>
                <span className="sr-only">Danger icon</span>
              </div>
              <p className="mb-3.5 text-gray-900 ">
                <a
                  href="#"
                  className="font-medium text-blue-700 hover:underline"
                >
                  @heleneeng
                </a>
                , are you sure you want to delete this order from your account?
              </p>
              <p className="mb-4 text-gray-500">
                This action cannot be undone.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <button
                  data-modal-toggle="deleteOrderModal"
                  type="button"
                  className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  No, cancel
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-red-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300"
                >
                  Yes, delete
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default Profile;
