import { findAll } from "$lib/api/categorys"
import type { RequestHandler } from "@sveltejs/kit"

export let get: RequestHandler<any,any,any> = async () => {
    const categorys = await findAll()
    
    return {
        body: categorys 
    }
}