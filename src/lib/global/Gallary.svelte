<script lang="ts">
	import { onMount } from 'svelte';
</script>

<section class="relative mt-$ mb-30 min-h-225 gap-6.25" flex="~ col" align="items-center">
	<img id="spinning" class="w-max h-max mb-2.5" src="/images/Gallary_Circle.png" alt="" />
	<h1 class="text-1 text-brown-1200">Our Gallery</h1>
	<h2 class="heading-1 font-normal max-w-163" text="20px md:37px center black-600">
		Say hi and follow along for our gallery @savencompany
	</h2>

	<img
		class="scale-img"
		pos="static md:absolute top-85 left-12.5 xl:(top-45 left-29)"
		src="/images/Gallary/1.png"
		alt=""
	/>
	<img
		class="scale-img"
		pos="static md:absolute top-114 left-45 xl:(top-90 left-82.5)"
		src="/images/Gallary/2.png"
		alt=""
	/>
	<img
		class="scale-img"
		pos="static md:absolute top-145 left-12.5 xl:(top-143 left-29)"
		src="/images/Gallary/3.png"
		alt=""
	/>

	<img
		class="scale-img"
		pos="hidden md:block absolute top-135 right-62 xl:(top-126 right-112.5)"
		src="/images/Gallary/4.png"
		alt=""
	/>
	<img
		class="scale-img"
		pos="hidden md:block absolute top-85 right-12.5 xl:(top-143 right-32)"
		src="/images/Gallary/5.png"
		alt=""
	/>
	<img
		class="scale-img"
		pos="hidden md:block absolute top-145 right-12.5 xl:(top-60 right-32)"
		src="/images/Gallary/6.png"
		alt=""
	/>
</section>

<style>
	#spinning {
		animation: spin 4s infinite linear;
	}
	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(359deg);
		}
	}
</style>
