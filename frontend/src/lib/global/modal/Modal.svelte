<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import CloseIcon from '../Navigation/CloseIcon.svelte';

	const dispatch = createEventDispatcher();
</script>

<div class="modal">
	<header>
		<div class="close-icon" on:click={() => dispatch('close')}>
			<CloseIcon --w="15px" --h="15px" />
		</div>
	</header>

	<div class="body">
		<slot />
	</div>

	<footer>
		<slot name="footer" />
	</footer>
</div>

<div class="overlay" on:click={() => dispatch('close')} />

<style lang="scss">
	.overlay {
		background-color: rgba(0, 0, 0, 0.337);
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 50;
	}
	.body {
		padding: 2rem;
	}
	.modal {
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		min-width: 350px;
		min-height: 100px;
		background-color: white;
		z-index: 100;
		border-radius: 4px;
	}

	header {
		.close-icon {
			position: absolute;
			right: 0.8rem;
			top: 0.5rem;
		}
	}
</style>
