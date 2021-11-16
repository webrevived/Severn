import Fuse from 'fuse.js'
import { checkCache } from "$lib/api/index"
import type { BaseCategory } from '$lib/api/categorys'
import type { BaseApiResponse, Media } from '$lib/api/index'
import type { Cache } from "$lib/api/index"

export interface BaseProducts extends BaseApiResponse {
    title: string,
    price: number,
    description: string,
    cover: Media,
    gallery: Media[]
}

export interface ProductsApi extends BaseProducts {
    category: BaseCategory,
}

// This is what our components expect
export interface ProductItem {
    id: number;
    href?: string;
    src: string;
    category: string;
    title: string;
    price: number;
}


const productsCache: Cache<ProductsApi> = {
    dump: null,
    lastUpdated: null
}

export const findOneByID: (number) => Promise<ProductsApi> = async (id: number) => {
    await checkCache(productsCache, "/products")
    const product = productsCache.dump.find( item => item.id === id )

    return product
}

export const findAll: () => Promise<ProductsApi[]> = async () => {
    await checkCache(productsCache, "/products")  
    return productsCache.dump
}

export const fuzzySearch: (string) => Promise<ProductsApi[]> = async (search: string) => {
    const response = await findAll()

    if (response === null) return null
    const fuse = new Fuse(response, {
        keys: ["title", "category.short_title", "category.long_title"]
    })
    
   return fuse
            .search(search)
            .map( result => result.item )
}