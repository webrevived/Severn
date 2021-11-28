import { findAll, Review } from "$lib/api/SevernReviews"
import type { Typify } from "$lib/api";
import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler<Record<string, any>, unknown, Typify<Review[]>> = async () => {
    const quotes = await findAll()
    
    return {
        status: 200,
        body: quotes,
    }
}