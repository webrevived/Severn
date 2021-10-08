import { writable } from "svelte/store";

export const newsTags = writable<string[]>(["FREE SHIPPING IN THE FLORIDA. ON ALL ORDERS OVER $25", "FAST DELIVERY | 15 DAYS REFUND POLICY"])
export const searchValue = writable('')

export interface toggles {
    mobile: boolean,
    search: boolean,
    cart: boolean,
    shop: boolean,
}

export const navToggles = writable<toggles>({
    mobile: false,
    search: false,
    cart: false,
    shop: false
})