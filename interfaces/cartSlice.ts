export interface CartItem {
    id: string;
    image: string;
    title: string;
    slug: string;
    price: number;
    quantity: number;
    availableQty: number;
}
export interface CartQty {

    slug: string;
    price: number;
}

export interface CartState {
    items: CartItem[];
}
