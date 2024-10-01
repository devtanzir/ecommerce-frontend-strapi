
import useTotalPrice from "@/hooks/totalPrice";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

const useCheckout = () => {
  const router = useRouter()

  const totalPrice = useTotalPrice()
  const initialData = {
    username: "",
    email: "",
    address: "",
    phone: "",
    paymentMethod: "",
    deliveryMethod: "",
  };
  const data:any = {
    "pay-on-delivery": 15,
    "credit-card": 0,
    "dhl" : 15,
    "fedex": 0,
    "express": 49
  }
  const [state, setState] = useState({ ...initialData });
  const [shipping, setShipping] = useState(15);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  
  // useEffect to watch changes in `state`
  useEffect(() => {
    const paymentMethodValue = data[state.paymentMethod] || 0;
    const deliveryMethodValue = data[state.deliveryMethod] ?? 15;
  
    // Calculate and set shipping only if either method is provided
    setShipping(paymentMethodValue + deliveryMethodValue);
  }, [state]);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(state);
    if (state.paymentMethod === "pay-on-delivery") {
      router.push("/payment/payment-success")
    }else{
      router.push("/payment")
    }
    setState(initialData)
  };
 

  return {totalPrice, handleSubmit, handleChange, state, shipping }
};

export default useCheckout;