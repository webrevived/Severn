import { findOneByTitle } from "$lib/api/categorys";
import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler<any,any, any> = async ({ params }) => {
    const category = await findOneByTitle( params.title )
    
    return {
        body: category
    }
}