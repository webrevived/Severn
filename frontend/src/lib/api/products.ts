import type { BaseCategory } from '$lib/api/categorys'
import type { BaseApiResponse, Media } from '$lib/api/index'
import { HOST } from '$lib/api/index'
import Fuse from 'fuse.js'

export interface BaseProducts extends BaseApiResponse {
    title: string,
    price: number,
    description: string,
    cover: Media,
    gallery: null[]
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

export const findOneByID: (number) => Promise<ProductsApi> = async (id: number) => {
    return await fetch(`${HOST}/products/${id}`)
        .then( res => res.json() )
        .catch( e => {
            console.error(e);
            return null
        } )
}

export const findAll: () => Promise<ProductsApi[]> = async () => {
    return await fetch(`${HOST}/products`)       
        .then( res => res.json() )
        .catch( e => {
            console.error(e);
            return null
        } )
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