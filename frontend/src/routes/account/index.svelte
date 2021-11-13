<script>
	import Button from '$lib/global/Button.svelte';
	import Checkbox from '$lib/global/Form/Checkbox.svelte';
	import Input from '$lib/global/Form/Input.svelte';
	import Header from '$lib/global/HeaderHR.svelte';
	import IconHr from '$lib/global/IconHR.svelte';
	import EmptyProducts from './EmptyProducts.svelte';
	import HeaderSection from './HeaderSection.svelte';
	import ProductPreview from './ProductPreview.svelte';

	let activeOrders = [...Array(3)];
	let pastOrders = [];
</script>

<!-- TODO: Decide Default Account Page -->
<style>
</style>
