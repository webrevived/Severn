import commerce from './commerce';

interface AllProductsParams {
	category_slug?: string;
	category_id?: string;
	query?: string;
	limit?: number;
	sortBy?: 'created' | 'sort_order' | 'name' | 'price';
	sortDirection?: 'asc' | 'desc';
}

export const getAllProducts = async (params?: AllProductsParams) => {
	const products = await commerce.products.list(params);

	return products;
};


/**
 * Get all products by a category slug
 *
 * @param slug category slug
 * @returns {Product[]} A list of products within a category or undefined
 * @throws 404 Error not found;
 */
export const getProductsByCategorySlug = async (slug: string) => {
	const products = await commerce.products.list({
		category_slug: slug
	});

	return products;
};

/**
 * Get a category by slug.
 *
 * @param slug Category slug
 * @returns
 */
export const getCategoryBySlug = async (slug: string) => {
	const category = await commerce.categories.retrieve(slug, { type: 'slug' });
	return category;
};

interface GetAllCategories {
	depth?: 0 | 1 | 2 | 3;
	parent_id?: number;
}

export const getAllCategories = async (params?: GetAllCategories) => {
	const categories = await commerce.categories.list({})

	return categories;
}

export const getProduct = async (
	indentifer: string,
	idType: 'permalink' | 'id' | 'sku' = 'permalink'
) => {
	const product = await commerce.products.retrieve(indentifer, { type: idType });

	return product;
};
