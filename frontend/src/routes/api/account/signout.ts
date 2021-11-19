import * as cookie from "cookie"
import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler<Record<string, any>, unknown, any> = () => {
    return {
        headers: {
            "Set-Cookie": cookie.serialize("token", "deleted", {
                httpOnly: true,
                sameSite: "lax",
                maxAge: 0,
                path: "/",
            }),
        }
    }
}