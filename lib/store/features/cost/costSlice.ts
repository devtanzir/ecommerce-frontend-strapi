import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CheckoutState {
  userInfo: {
    username: string;
    email: string;
    address: string;
    phone: string;
    paymentMethod: string;
    deliveryMethod: string;
  };
  shippingCost: number;
  totalCost: number;
}

const initialState: CheckoutState = {
  userInfo: {
    username: "",
    email: "",
    address: "",
    phone: "",
    paymentMethod: "",
    deliveryMethod: "",
  },
  shippingCost: 0,
  totalCost: 0,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    updateUserInfo: (state, action: PayloadAction<CheckoutState["userInfo"]>) => {
      state.userInfo = action.payload;
    },
    addShippingCost: (state, action: PayloadAction<number>) => {
      state.shippingCost = action.payload;
    },
    updateTotalCost: (state, action: PayloadAction<number>) => {
      state.totalCost = action.payload;
    },
  },
});

export const { updateUserInfo, addShippingCost, updateTotalCost } = checkoutSlice.actions;

export default checkoutSlice.reducer;
