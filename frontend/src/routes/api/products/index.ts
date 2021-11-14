import { findAll } from "$lib/api/products"
import type { RequestHandler } from "@sveltejs/kit"

export let get: RequestHandler<any,any,any> = async () => {
    const products = await findAll()
    
    return {
        body: products 
    }
}