import type { BaseCategory } from '$lib/api/categorys'
import type { BaseApiResponse, Media } from '$lib/api/index'
import { HOST } from '$lib/api/index'
import Fuse from 'fuse.js'

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

interface Cache {
    dump: ProductsApi[]
    lastUpdated: number
} 

const productsCache: Cache = {
    dump: null,
    lastUpdated: null
}

const checkCache = async () => {
    const cacheDuration = Date.now() - (productsCache.lastUpdated ?? 0)
    if (cacheDuration >= 3600000) {
        productsCache.dump = await fetch(`${HOST}/products`)       
            .then( res => res.json() )
            .catch( e => {
                console.error(e);
                return null
            } )

        productsCache.lastUpdated = Date.now()
    }
}

export const findOneByID: (number) => Promise<ProductsApi> = async (id: number) => {
    await checkCache()
    const product = productsCache.dump.find( item => item.id === id )

    return product
}

export const findAll: () => Promise<ProductsApi[]> = async () => {
    await checkCache()    
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