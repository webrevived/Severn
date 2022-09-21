<script lang="ts">
	export let src: string;
</script>

<div class="product-icon w-max flex flex-col items-center gap-2.5">
	<div
		class="icon-wrap w-15 h-15 bg-white-300 rounded-full text-black-600 grid place-content-center"
	>
		<img class="icon w-8 h-8" {src} alt="" />
	</div>

	<p class="text-2 text-black-600 uppercase">
		<slot>Default</slot>
	</p>
</div>

<style>
	p {
		width: 100%;
		text-align: center;
		max-width: 70px;
	}

	@media only screen and (max-width: 425px) {
		/* LAST LEFT OFF: Make icon size smaller for mobile */
		.icon {
			@apply w-6 h-6;
		}
		.product-icon {
			@apply w-auto h-auto;
		}
		.icon-wrap {
			@apply w-12 h-12;
		}
	}
</style>
