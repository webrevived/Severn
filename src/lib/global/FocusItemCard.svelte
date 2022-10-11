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
		<h6 class="card__subtitle text-brown-1200">{category}</h6>
		<h4 class="card__title font-tiempos text-black-600 text-18px">{title}</h4>
		<h6 class="card__price text-brown-1200">${price}</h6>
	</div>
</a>

<style lang="scss">
	.thumbnail {
		width: 100%;
		overflow: hidden;

		img {
			object-fit: cover;
			object-position: center;
			height: 100%;
			width: 100%;
			// @include imageZoom;
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

		&__title {
			font-size: 18px;
		}
	}

	@media only screen and (max-width: 425px) {
		.card {
			gap: 0.5rem;

			&__details {
				gap: 0.1rem;
			}

			&__title {
				font-size: 16px;
			}
		}
	}
</style>
