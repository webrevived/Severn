<script lang="ts">
	import CartIcon from '$lib/components/icons/CartIcon.svelte';
	import HamburgerIcon from '$lib/components/icons/HamburgerIcon.svelte';
	import SearchIcon from '$lib/components/icons/SearchIcon.svelte';
	import Search from '$lib/components/navigation/Search.svelte';
	import { navToggles } from '$lib/stores';
	import Shop from '$lib/components/navigation/Shop.svelte';
	import Cart from './Cart.svelte';
	import MobileBody from './MobileNavbar.svelte';
	import NavShopDropdown from './shop-dropdown/Nav-ShopDropdown.svelte';

	export let dark = false;
	export let position: 'absolute' | 'reletive' | 'fixed' = 'reletive';
	export let backgroundColor: 'transparent' | 'tan' = 'transparent';

	const handleMouseEnter = () => ($navToggles.shop = true);
	const handleMouseLeave = () => ($navToggles.shop = false);
</script>

<div
	class="nav-container backgroundColor--{backgroundColor}"
	style:position
	class:dark
	class:dropdownOpen={$navToggles.shop}
>
	<div class="nav-inner">
		<nav class="justify-center" class:z-5={$navToggles.shop}>
			<button
				class="md:hidden text-white-100 dark:text-black-600"
				on:click={() => ($navToggles.mobile = true)}
			>
				<HamburgerIcon />
			</button>

			<a class="logo" href="/"> Saven ® </a>
			<div class="links text-white-100 dark:black-600 hidden md:flex items-center">
				<div class="links__shop" on:mouseleave={handleMouseLeave} on:mouseenter={handleMouseEnter}>
					<a href="/shop">Shop </a>
					{#if $navToggles.shop}<NavShopDropdown />{/if}
				</div>

				<a href="/about">About</a>
				<a href="/contact">Contact</a>
			</div>

			<div
				class="flex items-center gap-9 text-white-100 dark:text-black-600 col-start-1 col-end-2 md:col-start-3 md:col-end-4 row-start-1 row-end-2"
			>
				<button
					class="hidden md:block focus:outline-none"
					on:click={() => ($navToggles.search = true)}
				>
					<SearchIcon />
				</button>

				<button class="focus:outline-none" on:click={() => ($navToggles.cart = true)}>
					<CartIcon />
				</button>
			</div>
		</nav>
	</div>

	<Search />
	<Cart />
</div>

<MobileBody />

<style lang="scss">
	/* General Navbar Container */
	.nav-container {
		padding: var(--space-xs) 0;
		color: var(--color-black-600);
		width: 100%;
		z-index: 10;
	}

	/* Navbar Inner contents container (for spacing absloute positioned elements) */
	.nav-inner {
		position: relative;
		padding: 0 var(--space-sm);
	}

	nav {
		display: flex;
		justify-content: space-between;

		.links {
			display: flex;
			align-items: center;
			transition: color 0.15s linear;
		}

		.links__shop {
			display: flex;
			align-items: center;
			height: 100%;
		}

		.links a {
			@apply heading-1 text-lg whitespace-nowrap whitespace-nowrap;
			padding: 0 var(--space-sm);
		}

		a:hover {
			transition: font-style 0.15s linear;
			font-style: italic;
		}

		.logo {
			@apply text-white-100 heading-1 text-2xl tracking-[.03em];
			display: flex;
			align-items: center;
		}
	}

	.dark {
		background-color: var(--color-white-300);

		a {
			color: var(--color-black-600);
		}
	}

	/* BACKGROUND COLOR */
	.backgroundColor--tan {
		background-color: var(--color-white-3000);
	}

	.backgroundColor--transparent {
		background-color: transparent;
	}

	.dropdownOpen {
		background-color: var(--color-white-300);
		
		a {
			color: var(--color-black-600);
		}
	}

	@media only screen and (max-width: 767px) {
		.links {
			display: none !important;
		}
	}
</style>
