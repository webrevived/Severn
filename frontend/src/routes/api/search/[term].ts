import { fuzzySearch } from "$lib/api/products"
import type { RequestHandler } from "@sveltejs/kit"

export let get: RequestHandler<any,any,any> = async ({ params }) => {
    const results = await fuzzySearch( params.term )
    
    return {
        body: results 
    }
}