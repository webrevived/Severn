import type { Handle } from "@sveltejs/kit";

export const prerequests: Handle = async ({ request, resolve }) => {
    if ( !request.path.includes("/api") ) {
        const toJson = (res: Response) => res.json()
        const [products, categorys] = await Promise.all([
            fetch("http://localhost:3000/api/products/").then(toJson),
            fetch("http://localhost:3000/api/categorys/").then(toJson),
        ])
        
        request.locals.products = products
        request.locals.categorys = categorys
    }

    return await resolve(request)
}