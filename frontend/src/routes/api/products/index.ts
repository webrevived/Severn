import { findAll, ProductsApi } from "$lib/api/products"
import type { Typify } from "$lib/api"
import type { RequestHandler } from "@sveltejs/kit"

export let get: RequestHandler<Record<string, any>, unknown, Typify<ProductsApi[]>> = async () => {
    const products = await findAll()
    
    return {
        body: products
    }
}