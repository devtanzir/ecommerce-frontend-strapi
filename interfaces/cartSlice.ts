export interface CartItem {
    id: string;
    image: string;
    strapiId: number;
    title: string;
    slug: string;
    price: number;
    quantity: number;
    availableQty: number;
    width: number;
    height: number;
}
export interface CartQty {

    slug: string;
    price: number;
}

export interface CartState {
    items: CartItem[];
}
