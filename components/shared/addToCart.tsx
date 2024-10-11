"use client";
import AddCart from "@/public/icons/add-cart";
import { CartItem } from "@/interfaces/cartSlice";
import { add } from "@/lib/store/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { createId } from "@/lib/utils/utils";

const AddToCart = ({
  slug,
  price,
  strapiId,
  title,
  image,
  availableQty,
  width,
  height,
}: {
  slug: string;
  price: number;
  strapiId: number; 
  title: string;
  image: string;
  availableQty: number;
  width: number;
  height: number;  
}) => {
  const dispatch = useAppDispatch();
  const handleCart = (item: CartItem) => {
    dispatch(add(item));
  };
  const cartItems = useAppSelector((state) => state.cart.items);
  const activeCart = cartItems.some(item => item.slug === slug)
  return (
    <>
      <button
        type="button"
        title="Add to cart"
        className={`rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 ${activeCart && "bg-gray-100 text-gray-900"}`}
        onClick={() =>
          handleCart({
            id: createId(),
            strapiId,
            slug,
            image,
            title,
            price,
            availableQty,
            quantity: 1,
            width,
            height
          })
        }
      >
        <span className="sr-only"> Add to Cart</span>
        <AddCart className={"h-5 w-5"} />
      </button>
    </>
  );
};

export default AddToCart;
