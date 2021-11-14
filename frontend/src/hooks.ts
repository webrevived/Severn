import type { GetSession, Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ request, resolve }) => {

    if ( !request.path.includes("/api") ) {
        const toJson = (res: Response) => res.json()
        const [products, categorys] = await Promise.all([
            fetch("http://localhost:3000/api/products/").then(toJson),
            fetch("http://localhost:3000/api/categorys/").then(toJson),
        ])
        
        request.locals.products = products
        request.locals.categorys = categorys
    }

    const response = await resolve(request)

    return {
        ...response
    }

}

export const getSession: GetSession = (request) => {    
    return {
        products: request.locals.products,
        categorys: request.locals.categorys,
    }
}