export interface Address {
    id: number
    company?: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    country?: string
    primary: boolean;
}