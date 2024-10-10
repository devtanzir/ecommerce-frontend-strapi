"use client"
import BreadCrumbComponents from "@/components/shared/breadCrumbComponents";
import useCustomer from "@/app/account/hooks/useCustomer";
import CartIcon from "@/public/icons/cart";
import Loader from "@/components/shared/loader";
import { FaRegStar } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import Truck from "@/public/icons/truck";
import PhoneNumber from "./phone";
import UserAddress from "./address";
import OrderDetails from "./single-view";

const Profile = () => {

const {userInfo,user, updateDone} = useCustomer()

if (!userInfo || !user) {
    return <Loader/>
}

const address = userInfo[0]?.attributes?.address?.data?.attributes;

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
                    {userInfo[0]?.attributes?.phone ?? <PhoneNumber userId={userInfo[0].id} updateDone={updateDone}/>}
                  </dd>
                </dl>
                <dl>
                  <dt className="font-semibold text-gray-900 ">
                    Delivery Address
                  </dt>
                  <dd className="flex items-center gap-1 text-gray-500 ">
                    {address && <Truck className="hidden h-5 w-5 shrink-0 text-gray-400  lg:inline"/>}
                    {
                  address ? `Road ${address.road}, House ${address.house}, ${address.area}, ${address.city} ${address.postalCode}, ${address.country}`: <UserAddress  userId={userInfo[0].id}  updateDone={updateDone}/>   
                  }
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          {
            userInfo[0].attributes.orders.data.length > 0 && <div className="rounded-lg border border-gray-200 bg-gray-50 p-4   md:p-8">
            <h3 className="mb-4 text-xl font-semibold text-gray-900 ">
              Latest orders
            </h3>
            {userInfo[0].attributes.orders.data.map((order: any) => (
              <div className="flex flex-wrap items-center gap-y-4 border-b border-gray-200 pb-4  md:pb-5">
              <dl className="w-full sm:w-64">
                <dt className="text-base font-medium text-gray-500 ">
                  Order ID:
                </dt>
                <dd className="mt-1.5 text-base font-semibold text-gray-900 ">
                  <span className="hover:underline">
                    {order.attributes.orderId}
                  </span>
                </dd>
              </dl>

              <dl className="w-1/2 sm:w-1/4 md:flex-1 lg:w-auto">
                <dt className="text-base font-medium text-gray-500 ">
                  Date:
                </dt>
                <dd className="mt-1.5 text-base font-semibold text-gray-900 ">
                  {new Date(order.attributes.createdAt).toLocaleDateString()}
                </dd>
              </dl>

              <dl className="w-1/2 sm:w-1/5 md:flex-1 lg:w-auto">
                <dt className="text-base font-medium text-gray-500 ">
                  Price:
                </dt>
                <dd className="mt-1.5 text-base font-semibold text-gray-900 ">
                  ${order.attributes.amount}
                </dd>
              </dl>

              <dl className="w-1/2 sm:w-1/4 sm:flex-1 lg:w-auto">
                <dt className="text-base font-medium text-gray-500 ">
                  Status:
                </dt>
                <dd className="me-2 mt-1.5 inline-flex shrink-0 items-center rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                  Pending
                </dd>
              </dl>
              <dl className="w-1/2 sm:w-1/4 sm:flex-1 lg:w-auto">
                <dt className="text-base font-medium text-gray-500 ">
                  Details:
                </dt>
                <dd className="me-2 mt-1.5 inline-flex shrink-0 items-center px-2.5 py-0.5">
                  <OrderDetails order={order}/>
                </dd>
              </dl>
            </div>
            ))}
            
          </div>
          }
          
        </div>
      </section>
    </>
  );
};

export default Profile;
