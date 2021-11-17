import { HOST } from "$lib/api/index"
import * as cookie from "cookie"
import type { RequestHandler } from "@sveltejs/kit";

interface Inputs {
    email: string;
    password: string;
}

export const post: RequestHandler<Record<string, any>, Inputs, any> = async (req) => {
    const body = {
        identifier: req.body.email,
        password: req.body.password
    }

    const login = await fetch(`${HOST}/auth/local`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify( body )
    }).then( res => res.json() )

    return {
        status: 200,
        headers: {
            "Set-Cookie": cookie.serialize("token", login.jwt, {
                httpOnly: true,
                sameSite: "lax",
                maxAge: 60*60*24,
                path: "/",
            })
        },
        body: { ok: "confirmed" }
    }
}