import { HOST } from '$lib/api/index'
import type { BaseApiResponse, Media } from '$lib/api/index'
import type { BaseProducts, ProductItem } from '$lib/api/products'

export interface BaseCategory extends BaseApiResponse {
    short_title: string,
    short_description: string,
    long_title: string,
    long_description: string,
    thumbnail: Media,
    icon: Media,
}

interface CategoryProducts extends BaseProducts {
    category: number
}

export interface CategoriesApi extends BaseCategory {
    products: CategoryProducts[]
}

// This is what our components expect
export interface CategoryProps {
    category: string,
    description: string,
    button: string,
    items: ProductItem[]
}

interface Cache {
    dump: CategoriesApi[];
    lastUpdated: number;
}

const categoryCache: Cache = {
    dump: null,
    lastUpdated: null
}

const checkCache = async () => {
    const duration = Date.now() - (categoryCache.lastUpdated ?? 0)
    if (duration >= 360000) {
        categoryCache.dump = await fetch(`${HOST}/categories`)       
            .then( res => res.json() )
            .catch( e => {
                console.error(e);
                return null
            } )
            
        categoryCache.lastUpdated = Date.now()
    }
}

export const findOneByID: (number) => Promise<CategoriesApi> = async (id: number) => {
    await checkCache()
    return categoryCache.dump.find( item => item.id === id )
}
export const findOneByTitle: (string) => Promise<CategoriesApi> = async (title: string) => {
    await checkCache()
    return categoryCache.dump.find( item => item.short_title === title )
}

export const findAll: () => Promise<CategoriesApi[]> = async () => {
    await checkCache()
    return categoryCache.dump
}