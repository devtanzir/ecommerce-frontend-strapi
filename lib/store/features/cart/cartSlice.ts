import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import Swal from 'sweetalert2'
import { toast } from "react-toastify";
import { CartItem, CartQty, CartState } from "@/interfaces/cartSlice";



const initialState: CartState = {
    items: []
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<CartItem>) => {
            const itemExists = state.items.some(item => item.slug === action.payload.slug);

            if (itemExists) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Already in cart!",
                });
                return;
            }

            state.items.push(action.payload);
            toast.success("Item Added Successfully!",{
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            })
            
        },
        remove: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.slug !== action.payload);
                toast.success("Item removed Successfully!",{
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                })
        },
        addQty: (state, action: PayloadAction<CartQty>) => {
            
            const targetData = state.items.findIndex(item => item.slug === action.payload.slug)
            if (state.items[targetData].availableQty > state.items[targetData].quantity) {
                
                const productPrice = action.payload.price / state.items[targetData].quantity 
                state.items[targetData].price = state.items[targetData].price + productPrice
                state.items[targetData].quantity = state.items[targetData].quantity + 1
            return
        }
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Out Of Stock!",
            });
            
            return
        },
        removeQty: (state, action: PayloadAction<CartQty>) => {
            
            const targetData = state.items.findIndex(item => item.slug === action.payload.slug)
           if (state.items[targetData].quantity > 1) {
            const productPrice = action.payload.price / state.items[targetData].quantity 
                state.items[targetData].price = state.items[targetData].price - productPrice
            state.items[targetData].quantity = state.items[targetData].quantity - 1
            
        return   
        }
        
            return
        },
        clearCart: (state) => {
            state.items = []
            return
        }
    }
})

export const { add, remove, addQty, removeQty, clearCart } = cartSlice.actions;

export default cartSlice.reducer;