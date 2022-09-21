<script lang="ts">
	import { fade, fly, slide } from 'svelte/transition';
	import { newsTags } from '$lib/stores';
	import NewsHeader from '$lib/global/NewsHeader.svelte';
	import Input from '$lib/global/Form/Input.svelte';
	import CloseIcon from './CloseIcon.svelte';
	import SearchIcon from './SearchIcon.svelte';
	import { navToggles, searchValue } from '$lib/stores';
	import { gsap } from '$lib/utils/gsap';

	const navbarInAnimation = (node: HTMLElement) => {
		const timeline = gsap.timeline();

		timeline.set(node, { xPercent: 100 });

		timeline.to(node, {
			duration: 0.35,
			xPercent: 0
		});

		return {
			duration: timeline.duration() * 1000,
			tick: (t: number) => {
				timeline.progress(t);
			}
		};
	};

	const navbarOutAnimation = (node: HTMLElement) => {
		const timeline = gsap.timeline();

		timeline.from(node, {
			duration: 0.35,
			xPercent: 100
		});

		return {
			duration: timeline.duration() * 1000,
			tick: (t: number) => {
				timeline.progress(t);
			}
		};
	};

	const onKeyDown = (e: KeyboardEvent) => {
		if ($navToggles.mobile && e.key != 'Escape') return;
		$navToggles.mobile = false;
	};
</script>

<svelte:window on:keydown={onKeyDown} />

{#if $navToggles.mobile}
	<div
		in:navbarInAnimation
		out:navbarOutAnimation
		pos="fixed top-0 right-0 w-screen h-screen"
		class="nav-wrapper bg-white-100 z-3 overflow-scroll flex flex-col"
	>
		<div class="flex-shrink-0">
			<NewsHeader tags={$newsTags} />
		</div>

		<div class="w-full h-full" p="x-7 y-6">
			<div class="w-full flex flex-wrap justify-between" m="b-10.5">
				<h1 class="heading-2 font-semibold">Seven</h1>
				<button on:click={() => ($navToggles.mobile = false)}>
					<CloseIcon />
				</button>
			</div>

			<div class="flex flex-col gap-7.5">
				<a class="text-black-600" href="/about">About</a>
				<a class="text-black-600" href="/contact">Contact</a>
				<a class="text-black-600" href="/shop">Shop</a>
				<a class="text-black-600" href="/account">My Account</a>
				<hr class="text-brown-1200" />
				<a class="text-brown-1200" href="/contact">Contact Us</a>
				<a class="text-brown-1200" href="/return">Returns & Exchanges</a>
			</div>

			<div class="flex gap-5 mt-13">
				<Input bind:value={$searchValue} placeholder="E.g Thanks You Card" />
				<button class="bg-black-600 rounded-full text-white-100 p-2">
					<SearchIcon --width="17px" --height="17px" />
				</button>
			</div>
		</div>
	</div>
{/if}

<style>
	.nav-wrapper {
		will-change: contents;
		text-rendering: optimizeSpeed;
		shape-rendering: optimizeSpeed;
	}
	a {
		@apply heading-1 font-medium max-w-max;
	}
</style>
