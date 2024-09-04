import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


export interface CartState {
    items: string[]
}

const initialState: CartState = {
    items: []
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<string>) => {
            state.items.push(action.payload);
        },
        remove: (state, action: PayloadAction<string>) => {
            const index = state.items.indexOf(action.payload);
            if (index !== -1) {
                state.items.splice(index, 1);
            }
        }
    }
})

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;