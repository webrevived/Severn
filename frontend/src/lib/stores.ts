import { writable as localWritable } from "svelte-local-storage-store"
import { writable } from "svelte/store";

export const newsTags = writable<string[]>(["FREE SHIPPING IN THE FLORIDA. ON ALL ORDERS OVER $25", "FAST DELIVERY | 15 DAYS REFUND POLICY"])
export const searchValue = writable('')

export interface Toggles {
    mobile: boolean,
    search: boolean,
    cart: boolean,
    shop: boolean,
}

export const navToggles = writable<Toggles>({
    mobile: false,
    search: false,
    cart: false,
    shop: false
})

export interface CartItem {
    uid: string;
    id: number;
    quantity: number;
}

export const cartItems = localWritable<CartItem[]>("cart", [])