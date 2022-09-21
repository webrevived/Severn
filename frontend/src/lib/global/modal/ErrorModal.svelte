<script lang="ts">
	import { goto } from '$app/navigation';
	import ErrorIcon from '../ErrorIcon.svelte';
	import Modal from './Modal.svelte';

	const refreshPage = () => {
		window.location.reload();
	};
</script>

<Modal on:close>
	<div class="wrapper">
		<div class="error-icon">
			<ErrorIcon size="25px" />
		</div>
		<div class="description">
			<h2>Something went wrong</h2>
			<p>
				We were unable to process your order. This isn't a payment issue, please try
				<span class="action" on:click={refreshPage}>refreshing the page.</span>
				If the issue persists please
				<span class="action" on:click={() => goto('/contact')}>contact us.</span> for support.
			</p>
		</div>
	</div>
</Modal>

<style lang="scss">
	.wrapper {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 1rem;
	}
	.action {
		@apply text-brown-600 underline;
	}
	.error-icon {
		background-color: rgba(220, 96, 98, 0.2);
		height: min-content;
		padding: 8px;
		border-radius: 50%;
	}
	.description {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.2rem;
	}
	h2 {
		@apply font-tiempos  font-medium;
	}
</style>
