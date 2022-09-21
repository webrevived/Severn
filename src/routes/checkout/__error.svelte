<script context="module" lang="ts">
	export const load: Load = ({ error, status }) => {
		return {
			props: {
				message: error.message,
				name: error.name,
				stack: error.stack,
				status
			}
		};
	};
</script>

<script lang="ts">
	import Button from '$lib/global/Button.svelte';
	import Bar from '$lib/components/navigation/Bar.svelte';
	import type { Load } from '@sveltejs/kit';

	export let message: string;
	export let name: string;
	export let stack: string;
	export let status: number;

	interface ErrorData {
		text: string;
		href: string;
		description: string;
	}

	const actionMap = new Map<number, ErrorData>();
	actionMap.set(442, {
		text: 'Add products',
		href: '/shop',
		description: 'You must add items into your cart before checking out.'
	});

	const getActionFromCode = (httpStatus: number): ErrorData => {
		const DEFAULT_ERROR_DATA: ErrorData = {
			text: 'Shop Products',
			href: '/shop',
			description: 'Something went wrong. Please try refreshing the page.'
		};

		return actionMap.get(httpStatus) || DEFAULT_ERROR_DATA;
	};

	$: errorData = getActionFromCode(status);
</script>

<header class="x-container pt-6">
	<Bar dark />
</header>

<main>
	<div class="error">
		<img class="error-icon" src="/images/NotFound.png" alt="" />
		<div class="error-data">
			<h3 class="heading-2">{message}</h3>
			<p>{errorData.description}</p>
		</div>
		<Button href={errorData.href}>{errorData.text}</Button>
	</div>
</main>

<style lang="scss">
	.error-icon {
		max-width: 200px;
	}
	main {
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 70vh;
	}
	.error {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		transform: translateY(-10%);
		gap: 1.5rem;
		text-align: center;
	}
	.error-data {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 0.5rem;
	}
</style>
