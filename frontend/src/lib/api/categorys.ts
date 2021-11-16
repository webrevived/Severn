import { checkCache } from "$lib/api/index"
import type { Cache } from "$lib/api/index"
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

const categoryCache: Cache<CategoriesApi> = {
    dump: null,
    lastUpdated: null
}

export const findOneByID: (number) => Promise<CategoriesApi> = async (id: number) => {
    await checkCache(categoryCache, "/categories")
    return categoryCache.dump.find( item => item.id === id )
}
export const findOneByTitle: (string) => Promise<CategoriesApi> = async (title: string) => {
    await checkCache(categoryCache, "/categories")
    return categoryCache.dump.find( item => item.short_title === title )
}

export const findAll: () => Promise<CategoriesApi[]> = async () => {
    await checkCache(categoryCache, "/categories")
    return categoryCache.dump
}