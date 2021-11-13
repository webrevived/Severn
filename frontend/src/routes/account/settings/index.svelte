<script lang="ts">
	import Input from '$lib/global/Form/Input.svelte';
	import HeaderSection from '../HeaderSection.svelte';
	import AddressCard from './AddressCard.svelte';
	import type { Address } from '$lib/interfaces/Address';
	import { dataset_dev } from 'svelte/internal';

	export let mockUserData = {
		email: 'adam@webrevived.com',
		phone: '407-924-6902'
	};

	let mockAddress: Array<Address> = [
		{
			id: 0,
			company: 'Web Revived',
			street: '1020 Waverly Dr',
			city: 'Longwood',
			state: 'FL',
			zip: '32750',
			primary: true
		},
		{
			id: 1,
			company: 'New Age Marketing',
			street: '1020 Waverly Dr',
			city: 'Longwood',
			state: 'FL',
			zip: '32750',
			primary: false
		}
	];

	const markPrimary = (event) => {
		mockAddress.forEach((address, index) =>
			address.id != event.detail
				? (mockAddress[index].primary = false)
				: (mockAddress[index].primary = true)
		);
		console.log(mockAddress);
	};
</script>

<HeaderSection
	title="Account Settings"
	desc="Change your addresses or password (if necessary) before placing an order"
/>

<div class="inputs flex flex-col gap-8 grid grid-cols-2 my-10">
	<Input bind:value={mockUserData.email} placeholder="Email Address" />
	<Input bind:value={mockUserData.phone} placeholder="Password" />

	<Input value="" placeholder="Current Password" />
	<Input value="" placeholder="New Password" />
</div>

<h2 class="text-xl font-semibold">Shipping Address</h2>

<div class="flex gap-6 my-10">
	{#each mockAddress as address (address.primary)}
		<AddressCard data={address} on:markPrimary={markPrimary} />
	{/each}
</div>
