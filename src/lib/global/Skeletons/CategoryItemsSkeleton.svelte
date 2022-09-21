<script lang="ts">
	import ItemCardSkeleton from './ItemCardSkeleton.svelte';
	import Skeleton from './Skeleton.svelte';
</script>

<div class="wrapper">
	<div class="category">
		<Skeleton width="150px" height="1.3em" />

		<div class="category__desc">
			<Skeleton width="200px" height="0.8em" />
			<Skeleton width="140px" height="0.8em" />
			<Skeleton width="150px" height="0.8em" />
			<Skeleton width="130px" height="0.8em" />
		</div>

		<!-- Button -->
		<Skeleton width="300px" height="52px" borderRadius="20px" />
	</div>

	<div class="items">
		{#each Array(5) as _}
			<ItemCardSkeleton />
		{/each}
	</div>
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		overflow-x: hidden;
		gap: 5.8rem;
	}
	.items {
		display: flex;
		gap: 2.5rem;
	}
	.category {
		display: flex;
		flex-direction: column;
		gap: 40px;

		&__desc {
			display: flex;
			flex-direction: column;
			gap: 12px;
			margin-bottom: 30px;
		}
	}
</style>
