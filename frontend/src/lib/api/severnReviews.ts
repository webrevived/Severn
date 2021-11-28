import { HOST } from "$lib/api/index"
import type { BaseApiResponse } from "$lib/api/index"

export interface Review extends BaseApiResponse  {
    author: string;
    quote: string;
    rating: number;
}

export const findAll = async (): Promise<Review[]> => {
    return await fetch(`${HOST}/severn-reviews`).then( res => res.json() )
}