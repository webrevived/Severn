import type { Typify } from "$lib/api"
import { fuzzySearch } from "$lib/api/products"
import type { ProductsApi } from "$lib/api/products"
import type { RequestHandler } from "@sveltejs/kit"

export let get: RequestHandler<Record<string, any>, unknown, Typify<ProductsApi[]>> = async ({ params }) => {
    const results = await fuzzySearch( params.term )
    
    return {
        body: results 
    }
}