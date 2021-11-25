import type { Handle } from "@sveltejs/kit";
import * as cookie from "cookie"
import { HOST } from "$lib/api/index"

export const getUser: Handle = async ({ request, resolve }) => {
    if ( request.path.includes("/api") ) return await resolve(request)
 
    const infomration = cookie.parse( request.headers.cookie ?? "" )
    const res = await fetch( `${HOST}/users/me`, { headers: { "Authorization": `Bearer ${infomration.token}` } } )
        .then( res => res.json() )
    
    if (!res.error) request.locals.user = res
    
    return await resolve(request)
}