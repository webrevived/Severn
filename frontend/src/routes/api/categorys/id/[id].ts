import { findOneByID } from "$lib/api/categorys";
import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler<any,any, any> = async ({ params }) => {
    const id = parseInt( params.id )
    if ( isNaN(id) ) return { status: 404, body: "ID must be a valid number" }
    
    const category = await findOneByID( id )
    
    return {
        body: category
    }
}