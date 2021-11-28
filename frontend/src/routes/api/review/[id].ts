import { HOST } from "$lib/api"
import type { RequestHandler } from "@sveltejs/kit"
import * as cookie from "cookie"

const err = (message: string) => ({
    status: 403,
    body: { 
        error: { message }
    }
})

export let post: RequestHandler<Record<string, any>, unknown, any> = async (req) => {
    const { token } = cookie.parse( req.headers?.cookie )
    
    if ( !token ) return err("Unathenicated User")

    const product = parseInt( req.params.id )
    if ( isNaN(product) ) return err("Product ID must be a number")
    
    const body = typeof req.body === "object" ? (req.body as object) : JSON.parse( req.body )
    if ( !body?.user ) return err("No User ID found")
    if ( !body?.rating ) return err("No Rating found")
    if ( !body?.review ) return err("No Review content found")

    const reqBody = JSON.stringify({
        product,
        user: body.user,
        rating: body.rating,
        review: body.review
    })

    const response = await fetch( `${HOST}/prouct-reviews`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: reqBody,
    } ).then( res => res.json() )
       .catch( err => err )

    if (response.error) return err( response.error )  
    
    return {
        status: 200,
        body: { ok: true }
    }
}