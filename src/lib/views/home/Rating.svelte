<script lang="ts">
	export let rating = 5;

	$: _rating = Array.from({ length: rating }, () => null);
</script>

<div class="flex gap-1.25">
	{#each _rating as star}
		<img src="/icons/Feedback_Stars.svg" alt="Stars" />
	{/each}
</div>
