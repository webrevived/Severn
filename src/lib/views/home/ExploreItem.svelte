<script lang="ts">
	export let src: string;
	export let alt = '';
</script>

<div class="gap-5 justify-center items-center flex flex-col">
	<img {src} {alt} />
	<p class="text-1 text-black-600"><slot /></p>
</div>

<style>
	img {
		width: 100%;
		max-width: 80px;
		height: 100%;
	}
</style>
