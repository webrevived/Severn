import { findOneByTitle } from "$lib/api/categorys";
import type { RequestHandler } from "@sveltejs/kit";
import type { CategoriesApi } from "$lib/api/categorys"
import type { Typify } from "$lib/api/index"

export const get: RequestHandler<Record<string, any>, unknown, Typify<CategoriesApi>> = async ({ params }) => {
    const category = await findOneByTitle( params.title )
    
    return {
        body: category
    }
}