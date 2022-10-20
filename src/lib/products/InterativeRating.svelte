<script lang="ts">
	export let rating: number;
	const _rating = Array.from({ length: 5 }, () => null);
</script>

<div class="flex gap-1.25">
	{#each _rating as star, index}
		<div class="cursor-pointer" on:click={() => (rating = index + 1)}>
			{#if index + 1 <= rating}
				<img class="w-7 h-7" src="/icons/Feedback_Stars.svg" alt="Stars" />
			{:else}
				<img class="w-7 h-7" src="/icons/EmptyRating.svg" alt="empty" />
			{/if}
		</div>
	{/each}
</div>
