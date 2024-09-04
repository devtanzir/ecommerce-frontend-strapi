"use client"
import { useAppSelector } from "@/lib/store/hooks";
import Link from "next/link";

const CartHeader = () => {
    const cartItems = useAppSelector((state) => state.cart.items);
    return (
        <Link href={"/cart"} className="mr-5 hover:text-gray-900">Cart ({cartItems.length})</Link>
    );
};

export default CartHeader;