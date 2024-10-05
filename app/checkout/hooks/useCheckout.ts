import { initialData } from "@/constants/checkout";
import useTotalPrice from "@/hooks/totalPrice";
import useGetUser from "@/hooks/useGetUser";
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
import { ChangeEvent, useEffect, useMemo, useState } from "react";

// Define a type for the delivery cost keys
type DeliveryMethod = "pay-on-delivery" | "credit-card" | "dhl" | "fedex" | "express";

// Initial delivery cost map
const deliveryCostMap: Record<DeliveryMethod, number> = {
  "pay-on-delivery": 15,
  "credit-card": 0,
  dhl: 15,
  fedex: 0,
  express: 49,
};

const useCheckout = () => {
  const router = useRouter();
  const totalPrice = useTotalPrice();
  const dispatch = useAppDispatch();
  const { user } = useUser();
  const cartItems = useAppSelector((state) => state.cart.items);
  const [state, setState] = useState({ ...initialData });
  const [userId, setUserId] = useState<number | null>(null);

  // Fetch user ID on mount
  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const data = await useGetUser();
        if (data) {
          const matchedUser = data.find((item: any) => item.attributes.email === user?.primaryEmailAddress?.emailAddress);
          if (matchedUser) setUserId(matchedUser.id);
        }
      } catch (error) {
        console.error("Failed to fetch user", error);
      }
    };
    fetchUserId();
  }, [user]);

  // Calculate shipping cost based on selected payment and delivery methods
  const shipping = useMemo(() => {
    // Type guarding to ensure state values match `DeliveryMethod` type
    const paymentMethodValue = deliveryCostMap[state.paymentMethod as DeliveryMethod] || 0;
    const deliveryMethodValue = deliveryCostMap[state.deliveryMethod as DeliveryMethod] ?? 15;
    return paymentMethodValue + deliveryMethodValue;
  }, [state.paymentMethod, state.deliveryMethod]);

  // Calculate the final cost
  const cost = useMemo(() => totalPrice + shipping + totalPrice * 0.05, [totalPrice, shipping]);

  // Handle form input change
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!userId) {
      console.error("User ID is missing. Something went wrong.");
      return;
    }

    const orderData = {
      username: user?.fullName,
      email: user?.primaryEmailAddress?.emailAddress,
      amount: cost,
      products: cartItems.map((item) => ({
        name: item.title,
        price: item.price,
        quantity: item.quantity,
      })),
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
      customer: userId,
    };

    dispatch(addShippingCost(shipping));
    dispatch(updateTotalCost(cost));
    dispatch(updateUserInfo(state));
    dispatch(setOrder(orderData));

    // Navigate to the next page based on the payment method
    router.push(state.paymentMethod === "pay-on-delivery" ? "/payment/payment-success" : "/payment");

    // Reset state
    setState(initialData);
  };

  return { totalPrice, handleSubmit, handleChange, state, shipping, cost };
};

export default useCheckout;
