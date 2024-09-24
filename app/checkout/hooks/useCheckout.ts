
import useTotalPrice from "@/hooks/totalPrice";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

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
  const [state, setState] = useState({ ...initialData });
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(state);
    router.push("/payment")
    setState(initialData)
  };
 

  return {totalPrice, handleSubmit, handleChange, state, }
};

export default useCheckout;