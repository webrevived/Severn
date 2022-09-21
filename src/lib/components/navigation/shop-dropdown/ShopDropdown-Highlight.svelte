<script lang="ts">
	export let title: string;
	export let imgSrc: string;
	export let imAlt: string = '';
	export let desc: string;
	export let href: string;
</script>

<div class="highlight">
	<h4 class="highlight__title">{title}</h4>

	<a {href} class="image-wrap">
		<img src={imgSrc} alt={imAlt} />
		<h5 class="highlight__desc">{desc}</h5>
	</a>
</div>

<style lang="scss">
	.highlight {
        display: flex;
        flex-direction: column;
        gap: var(--space-xs);
        line-height: 1em;
		color: var(--color-black-600);
		max-width: 200px;

		img {
			display: block;
			padding: 0;
			margin: 0;
			object-fit: cover;
			width: 100%;
			height: 200px;
		}

		&__title {
			text-transform: uppercase;
			font-size: 14px;
            font-family: var(--font-lato);
		}

        &__desc {
            font-size: 14px;
        }
	}

    .image-wrap {
        display: flex;
        flex-direction: column;
        gap: var(--space-2xs);
    }
</style>
