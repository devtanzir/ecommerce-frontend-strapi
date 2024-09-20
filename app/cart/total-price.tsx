"use client"
import useTotalPrice from "@/hooks/totalPrice";

const TotalPrice = () => {
const totalPrice = useTotalPrice()
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