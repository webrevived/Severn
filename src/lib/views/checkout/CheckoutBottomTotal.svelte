<script lang="ts">
	import TotalLineItem from './TotalLineItem.svelte';

	export let tax: string = '$0.00';
	export let shipping: number = 0;
	export let subtotal: string;
	export let total: string;
</script>

<div class="w-full flex flex-col gap-4">
	<div class="flex flex-col gap-2">
		<TotalLineItem title="Tax" total={tax} />
		<TotalLineItem title="Sub Total" total={subtotal} />
		<TotalLineItem title="Shipping" total={shipping} />
	</div>

	<hr />

	<TotalLineItem title="Total" {total} bold />
</div>

<style lang="scss">
</style>
