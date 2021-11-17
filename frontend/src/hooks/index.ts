import type { GetSession, Handle } from "@sveltejs/kit";
import { prerequests } from "./prerequests";
import { getUser } from "./getUsers";
import { sequence } from "@sveltejs/kit/hooks";

export const handle: Handle = sequence(prerequests, getUser)

export const getSession: GetSession = (request) => {    
    return {
        products: request.locals.products,
        categorys: request.locals.categorys,
        user: request.locals.user
    }
}