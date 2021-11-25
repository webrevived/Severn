import { HOST } from "$lib/api/index"
import type { RequestHandler } from "@sveltejs/kit";
import * as cookie from "cookie"

interface Inputs {
    first: string;
    last: string;
    email: string;
    password: string;
}

export const post: RequestHandler<Record<string, any>, Inputs, any> = async (req) => {
    
    const body = {
        email: req.body.email,
        password: req.body.password
    }

    const register = await fetch(`${HOST}/auth/local/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify( body )
    }).then( res => res.json() )

    if ( register.error ) return {
        status: register.statusCode,
        body: register
    }
    
    const user = register.user
    const profile = await fetch(`${HOST}/user-profiles/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${register.jwt}`,
        },
        body: JSON.stringify({ first: req.body.first, last: req.body.last, user: user.id })
    }).then( res => res.json() )

    return {
        status: 200,
        headers: {
            "Set-Cookie": cookie.serialize("token", register.jwt, {
                httpOnly: true,
                sameSite: "lax",
                maxAge: 60*60*24,
                path: "/",
            })
        },
        body: { ok: "confirmed", user: { ...user, profile } }
    }
}