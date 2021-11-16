import { checkCache } from "$lib/api/index"
import type { Cache } from "$lib/api/index"
import type { BaseApiResponse } from "$lib/api/index"

export interface Review extends BaseApiResponse  {
    author: string;
    quote: string;
    rating: number;
}

const cache: Cache<Review> = {
    dump: null,
    lastUpdated: null
}

export const findAll = async () => {
    await checkCache(cache, "/severn-reviews")
    return cache.dump
}