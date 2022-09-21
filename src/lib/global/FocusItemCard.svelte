<script lang="ts">
	export let price: number;
	export let title: string;
	export let category: string;
	export let imgSrc: string;
	export let href: string;
	export let imgAlt: string = `Product ${title}`;
</script>

<a {href} class="card">
	<div class="thumbnail">
		<img src={imgSrc} alt={imgAlt} />
	</div>

	<div class="card__details">
		<h6 class="text-brown-1200">{category}</h6>
		<h4 class="font-tiempos text-black-600 text-18px">{title}</h4>
		<h6 class="text-brown-1200">${price}</h6>
	</div>
</a>

<style lang="scss">
	.thumbnail {
		width: 100%;

		img {
			width: 100%;
		}
	}
	.card {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;

		&__details {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 0.5rem;
		}
	}

	@media only screen and (max-width: 425px) {
		.card {
			gap: 0.5rem;

			&__details {
				gap: 0.1rem;
			}
		}
	}
</style>
