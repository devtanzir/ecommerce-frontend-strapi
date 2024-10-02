import { initialData } from "@/constants/checkout";
import useTotalPrice from "@/hooks/totalPrice";
import {
  addShippingCost,
  updateTotalCost,
  updateUserInfo,
} from "@/lib/store/features/cost/costSlice";
import { setOrder } from "@/lib/store/features/order/orderSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { generateOrderId } from "@/lib/utils/utils";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

const useCheckout = () => {
  const router = useRouter();
  const totalPrice = useTotalPrice();
  const dispatch = useAppDispatch();
  const { user } = useUser();
  const data: any = {
    "pay-on-delivery": 15,
    "credit-card": 0,
    dhl: 15,
    fedex: 0,
    express: 49,
  };
  const [state, setState] = useState({ ...initialData });
  const [shipping, setShipping] = useState(15);
  const [cost, setCost] = useState<number>();
  const cartItems = useAppSelector((state) => state.cart.items);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    const paymentMethodValue = data[state.paymentMethod] || 0;
    const deliveryMethodValue = data[state.deliveryMethod] ?? 15;

    setShipping(paymentMethodValue + deliveryMethodValue);
  }, [state, dispatch]);

  useEffect(() => {
    const finalCost = totalPrice + shipping + totalPrice * 0.05;
    setCost(finalCost);
  }, [shipping, totalPrice]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(addShippingCost(shipping));
    dispatch(updateTotalCost(cost ?? 0));
    dispatch(updateUserInfo(state));
    setOrderToDB();
    if (state.paymentMethod === "pay-on-delivery") {
      router.push("/payment/payment-success");
    } else {
      router.push("/payment");
    }
    setState(initialData);
  };

  const setOrderToDB = () => {
    const orderData = {
      user: user?.fullName,
      email: user?.primaryEmailAddress?.emailAddress,
      totalCost: cost,
      products: cartItems,
      deliveryDetails: {
        customerName: state.username,
        customerEmail: state.email,
        address: state.address,
        phone: state.phone,
        paymentMethod: state.paymentMethod || "credit-card",
        deliveryMethod: state.deliveryMethod || "dhl",
        shippingCost: shipping,
      },
      orderId: generateOrderId(),
    };
    dispatch(setOrder(orderData));
  };

  return { totalPrice, handleSubmit, handleChange, state, shipping, cost };
};

export default useCheckout;
