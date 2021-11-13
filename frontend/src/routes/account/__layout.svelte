<script>
	import Header from '$lib/global/HeaderHR.svelte';
	import Bar from '$lib/global/Navigation/Bar.svelte';
</script>

<section class="x-container pt-6">
	<Bar dark />
</section>

<Header title="Reset Password" align="center">
	Come join us for fast check and track your orders.
</Header>

<section class="x-container pt-6">
	<div class="flex justify-center font-semibold capitalize justify-between max-w-650px mx-auto mb-15 capitalize">
		<a href="/account/orders">Your orders</a>
		<a href="/account/buyagain">Buy again</a>
		<a href="/account/settings">Account settings</a>
		<a href="/account/billing">Payment Methods</a>
		<a href="/signout">Sign out</a>
	</div>

    <slot />
</section>

