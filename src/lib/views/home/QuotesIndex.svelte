<script lang="ts">
	export let active = false;
</script>

<button on:click class="w-4 h-4" class:active border="1 black-600 rounded-full" outline="none" />

<style>
	.active {
		@apply bg-black-600;
	}
</style>
