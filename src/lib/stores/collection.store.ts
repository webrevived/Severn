import { derived, get, readable, writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import dataAccess from '$lib/data-access';
import type { Category } from '@chec/commerce.js/types/category';
import { browser } from '$app/env';
import type { Asset } from '@chec/commerce.js/types/asset';

type AsyncStoreStatus = 'loading' | 'sucess' | 'error';
interface AsyncStoreReturn<T> {
	data: T;
	status: AsyncStoreStatus;
}

const LOCAL_STORAGE_KEY = 'categories';

export type CategoryWithAssets = Category & { assets?: Asset[] };

const createCategoriesStore = () => {
	const store = writable<AsyncStoreReturn<CategoryWithAssets[]>>(
		{ data: [], status: 'loading' },
		() => {
			fetchCategories();
		}
	);

	const status = derived(store, ($store) => {
		$store.status;
	});
	const isLoading = derived(store, ($store) => {
		$store.status === 'loading';
	});
	const isSuccess = derived(store, ($store) => {
		$store.status === 'sucess';
	});

	const fetchCategories = async () => {
		try {
			setCategories(getLocalStorageCategories());
			const categories = await dataAccess.products.getAllCategories({ depth: 1 });
			setCategories(categories.data);
		} catch (error) {
			console.error(error);
			updateStatus('error');
		}
	};

	const setCategories = (categories: Category[]) => {
		store.update((data) => {
			data.data = categories;
			data.status = 'sucess';
			return data;
		});
	};

	const updateStatus = (status: AsyncStoreStatus) => {
		store.update((data) => {
			data.status = status;
			return data;
		});
	};

	return {
		subscribe: store.subscribe,
		refresh: fetchCategories,
		update: store.update,
		status: status,
		isLoading,
		isSuccess
	};
};

export const categoriesStore = createCategoriesStore();

const getLocalStorageCategories = (): Category[] => {
	if (!browser) return;
	const categories = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY));

	return categories || [];
};

categoriesStore.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(value.data));
	}
});
