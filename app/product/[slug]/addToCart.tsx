"use client"
import { add } from "@/lib/store/features/cart/cartSlice";
import { useAppDispatch } from "@/lib/store/hooks";


const AddToCart = ({slug} : {slug: string}) => {
    const dispatch = useAppDispatch();
    const handleCart = (slug: string) => {
      dispatch(add(slug))
    }
    return (
        <>
            <button className="text-black bg-[#9BF6FF] border-0 py-2 px-8 focus:outline-none hover:bg-[#84e4ed] rounded text-base" onClick={() => handleCart(slug)}>Add to Cart</button>
        </>
    );
};

export default AddToCart;