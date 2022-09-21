<script lang="ts">
	import Input from '$lib/global/Form/Input.svelte';
	import type { Writable } from 'svelte/store';

	export let errors: Writable<any>;
	export let title: string = 'Shipping Address';
</script>

<div class="flex flex-col gap-5">
	<h3 class="heading-3 font-semibold">{title}</h3>

	<div class="flex flex-col gap-8">
		<Input name="street" value="" placeholder="Street Address" error={$errors.street} />
		<Input name="street_2" value="" placeholder="Street Address 2" error={$errors.street_2} />
		<Input name="city" value="" placeholder="City" error={$errors.city} />
		<div class="grid grid-cols-3 gap-8">
			<Input name="state" value="" placeholder="State/Province" error={$errors.state} />
			<Input name="zip" value="" placeholder="Zip/Postal Code" error={$errors.zip} />
			<Input name="country" value="" placeholder="Country" error={$errors.country} />
		</div>
	</div>
</div>

<style lang="scss">
</style>
