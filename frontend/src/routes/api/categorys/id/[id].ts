import { findOneByID } from "$lib/api/categorys";
import type { RequestHandler } from "@sveltejs/kit";
import type { CategoriesApi } from "$lib/api/categorys";
import type { Typify } from "$lib/api/index"

export const get: RequestHandler<Record<string, any>, unknown, Typify<CategoriesApi | string>> = async ({ params }) => {
    const id = parseInt( params.id )
    if ( isNaN(id) ) return { status: 404, body: "ID must be a valid number" }
    
    const category = await findOneByID( id )

    return {
        body: category
    }
}