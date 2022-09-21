<script lang="ts">
	import Skeleton from './Skeleton.svelte';
</script>

<div class="card">
	<Skeleton width="270px" height="270px" />
	<div class="details">
		<Skeleton width="35px" height="0.7em" />
		<Skeleton width="100px" height="0.7em" />
		<Skeleton width="40px" height="0.7em" />
	</div>
</div>

<style lang="scss">
	.card {
		display: flex;
		flex-direction: column;
		gap: 1em;
	}

	.details {
		display: flex;
		flex-direction: column;
		gap: 1em;
		justify-content: center;
		align-items: center;
	}
</style>
