import { useAppSelector } from "@/lib/store/hooks";

const useTotalPrice = () => {
    const cartItems = useAppSelector((state) => state.cart.items);
    const totalPrice = cartItems.reduce((acc, cur ) => {
         return acc + cur.price 
     },0)

     return totalPrice;
 
};

export default useTotalPrice;