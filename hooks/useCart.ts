import { remove } from "@/lib/store/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import Swal from "sweetalert2";

const useCart = () => {
    const cartItems = useAppSelector((state) => state.cart.items);
    const dispatch = useAppDispatch();
    const handleDelete = (slug: string) => {
      Swal.fire({
        title: "Are you sure?",
        showDenyButton: true,
        confirmButtonText: "Delete",
        denyButtonText: `cancel`
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(remove(slug));
        }
      });
    };
    return { cartItems, handleDelete, dispatch };
};

export default useCart;