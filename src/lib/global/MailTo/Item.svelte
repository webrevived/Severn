<script lang="ts">
	import Button from '$lib/global/Button.svelte';

	export let title: string;
</script>

<div class="flex flex-col gap-5">
	<h1 class="heading-2 font-medium text-black-600">{title}</h1>
	<p class="text-1 text-brown-1200 mb-2.5">
		<slot />
	</p>

	<div>
		<Button>Mail to</Button>
	</div>
</div>
