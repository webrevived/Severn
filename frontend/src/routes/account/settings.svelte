<script lang="ts">
	import Button from "$lib/global/Button.svelte"
	import Input from '$lib/global/Form/Input.svelte';
	import AddressCard from '$lib/settings/AddressCard.svelte';
	import type { Address } from '$lib/interfaces/Address';

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

<section class="x-container">
	<h1 class="heading-2 font-medium text-black-600">Account Settings</h1>
	<p class="text-1 text-brown-1200">Change your addresses or password (if necessary) before placing an order</p>

	<div class="inputs flex flex-col gap-8 grid grid-cols-2 mt-17.5">
		<Input bind:value={mockUserData.email} placeholder="Email Address" />
		<Input bind:value={mockUserData.phone} placeholder="Password" />
	
		<Input value="" placeholder="Current Password" />
		<Input value="" placeholder="New Password" />
	</div>
	
	<div class="w-full flex mt-11.5 justify-end">
		<Button>Save Changes</Button>
	</div>

	<h2 class="text-xl font-semibold mt-15">Shipping Address</h2>
	
	<div class="flex gap-6 my-10">
		{#each mockAddress as address (address.primary)}
			<AddressCard data={address} on:markPrimary={markPrimary} />
		{/each}
	</div>
</section>