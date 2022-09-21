<script>
	import ActiveOrders from '$lib/views/account/orders/Active.svelte';
	import PreviousOrders from '$lib/views/account/orders/Previous.svelte';

	let activeOrders = [...Array(3)];
	let pastOrders = [];
</script>

<ActiveOrders {activeOrders} />
<PreviousOrders {pastOrders} />
