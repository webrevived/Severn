import type { Typify } from "$lib/api";
import { findOneByID, ProductsApi } from "$lib/api/products";
import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler<Record<string, any>, unknown, Typify<ProductsApi | string>> = async ({ params }) => {
    const id = parseInt( params.id )
    if ( isNaN(id) ) return { status: 404, body: "ID must be a valid number" }
    
    const product = await findOneByID( id )
    
    return {
        body: product
    }
}