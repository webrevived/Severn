<script>
	import ActiveOrders from "$lib/orders/Active.svelte"
	import PreviousOrders from "$lib/orders/Previous.svelte"

	let activeOrders = [...Array(3)];
	let pastOrders = [];
</script>

<ActiveOrders {activeOrders} />
<PreviousOrders {pastOrders} />