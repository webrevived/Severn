<script lang="ts">
	type IconType = 'next';
	export let icon: IconType;
	export let color: string = 'black';
	export let size: number = 20;
    export let transform: number = 0;;
</script>

<div class="icon-wrap" style="width: {size}px; height: {size}px; transform: rotate({transform}deg)">
	{#if icon === 'next'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			role="img"
			width="100%"
			height="100%"
			preserveAspectRatio="xMidYMid meet"
			viewBox="0 0 24 24"
		>
			<path
				fill={color}
				d="M9.31 6.71a.996.996 0 0 0 0 1.41L13.19 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.72 6.7c-.38-.38-1.02-.38-1.41.01z"
			/>
		</svg>
	{/if}
</div>

<style lang="scss">
	.icon-wrap {
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
