<script lang="ts">
	export let title: string;
	export let desc: string;
</script>

<header class="header">
	<h2 class="header__title">{title}</h2>
	<p class="header__desc">{desc}</p>
</header>

<style lang="scss">
	.header {
		&__title {
			font-size: var(--text-3xl);
			font-weight: 400;
		}

		&__desc {
            max-width: 50ch;
            color: var(--color-brown-1200);
			font-size: var(--text-xl);
		}
	}
</style>
