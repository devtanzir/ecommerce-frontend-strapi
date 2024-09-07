"use client"
import { CartItem } from "@/interfaces/cartSlice";
import { add } from "@/lib/store/features/cart/cartSlice";
import { useAppDispatch } from "@/lib/store/hooks";
import { createId } from "@/utils/utils";


const AddToCart = ({slug, price, title} : {slug: string, price: number, title: string}) => {
    const dispatch = useAppDispatch();
    const handleCart = (item: CartItem) => {

      dispatch(add(item))
    }
    return (
        <>
            <button className="text-black bg-[#9BF6FF] border-0 py-2 px-8 focus:outline-none hover:bg-[#84e4ed] rounded text-base" onClick={() => handleCart({
                id: createId(),
                slug,
                title,
                price
            })}>Add to Cart</button>
        </>
    );
};

export default AddToCart;