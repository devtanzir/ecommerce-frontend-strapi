"use client"
import { useAppSelector } from "@/lib/store/hooks";

const TotalPrice = () => {
    const cartItems = useAppSelector((state) => state.cart.items);
   const totalPrice = cartItems.reduce((acc, cur ) => {
        return acc + cur.price 
    },0)
    return (
        <>
              <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 ">
                        Total price
                      </dt>
                      <dd className="text-base font-medium text-gray-900 ">
                        {totalPrice.toLocaleString()} BDT
                      </dd>
                    </dl>
        </>
    );
};

export default TotalPrice;