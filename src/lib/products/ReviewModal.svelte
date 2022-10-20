<script lang="ts">
	import Modal from '$lib/products/Modal.svelte';
	import InterativeRating from '$lib/products/InterativeRating.svelte';
	import { HOST } from '$lib/api';
	import TextArea from '$lib/global/Form/TextArea.svelte';
	import Button from '$lib/global/Button.svelte';
	import { session } from '$app/stores';
	import type { ProductsApi } from '$lib/api/products';

	let review = '';
	let rating = 5;
	export let product: ProductsApi;
	export let modal = false;

	const onSubmit = async () => {
		const body = JSON.stringify({
			review,
			rating,
			product: product.id,
			user: $session?.user?.id
		});

		fetch(`/api/review/${product.id}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body
		});
	};
</script>

<Modal bind:open={modal}>
	<form
		class="flex flex-col gap-7.5 w-full h-full"
		class:place-content-center={!$session.user}
		p="10 md:15 t-25"
		on:submit|preventDefault={onSubmit}
	>
		{#if $session.user}
			<h1 class="heading-3 text-lg font-medium">You are reviewing</h1>

			<div class="flex gap-x-15">
				<div
					class="w-full max-w-120px h-120px bg-src"
					style="--src: url('{HOST}{product.cover.url}')"
					alt=""
				/>

				<div class="h-full flex flex-col gap-2.5 justify-center">
					<h1 class="text-1 text-brown-1200">{product.category.short_title}</h1>
					<p class="heading-3 text-black-600 max-w-300px">{product.title}</p>
				</div>
			</div>

			<div class="flex flex-col gap-2.5">
				<h1 class="heading-3 font-medium text-lg">Rate Us</h1>
				<InterativeRating bind:rating />
			</div>

			<TextArea bind:value={review} placeholder="What you like/dislike?" />

			<div class="flex self-end">
				<Button>Post A Review</Button>
			</div>
		{:else}
			<h1 class="heading-1 text-black-600 place-self-center">
				Please <a href="/login" class="underline text-brown-600">Sign in</a> to post a review.
			</h1>
		{/if}
	</form>
</Modal>

<style>
	.bg-src {
		background: url('/images/ItemFilter.png'), var(--src) center;
		background-size: auto 120px;
	}
</style>
