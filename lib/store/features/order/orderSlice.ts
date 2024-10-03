
import { createSlice, PayloadAction } from '@reduxjs/toolkit';



interface OrderState {
  username: string | null
  email: string | null;
  amount: number;
  products: any[]; 
  deliveryDetails: {
    customerName: string | null;
    customerEmail: string | null;
    address: string | null;
    phone: string | null;
    paymentMethod: string | null;
    deliveryMethod: string | null;
    shippingCost: number;
  }
  orderId: string;
}

// Initial state of the order
const initialState: OrderState = {
    username: '',
    email: '',
    amount: 0,
    products: [],
    deliveryDetails: {
      customerName: "",
      customerEmail: "",
      address: "",
      phone: '',
      paymentMethod: '',
      deliveryMethod: '',
      shippingCost:0
    },
    orderId:''
};

// Create the order slice
const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrder(state, action: PayloadAction<Partial<OrderState>>) {
      return { ...state, ...action.payload };
    },
    resetOrder(state) {
      return { ...initialState };
    },
  },
});

// Export actions
export const { setOrder, resetOrder } = orderSlice.actions;

// Export the reducer
export default orderSlice.reducer;
