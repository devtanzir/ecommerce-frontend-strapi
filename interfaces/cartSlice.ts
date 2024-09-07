export interface CartItem {
    id: string;
    title: string;
    slug: string;
    price: number;
}

export interface CartState {
    items: CartItem[];
}
