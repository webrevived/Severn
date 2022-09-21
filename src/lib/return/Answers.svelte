<script>
	import Accordian from '$lib/global/Accordian.svelte';
	import ListItem from '$lib/global/ListItem.svelte';
</script>

<section class="flex flex-col x-container mb-20">
	<Accordian title="What is your return policy?">
		<div class="py-5">
			<ul class="flex max-w-182 flex-col gap-5">
				<ListItem>
					Returns may be made within 30 days of the order date Products must be unused and return in
					their original packaging
				</ListItem>
				<ListItem>
					Customers are responsible for the cost of return shipping Twigs Paper is not responsible
					for products delivered to incorrect addresses supplied by sender
				</ListItem>
				<ListItem>
					Once we have the returned product(s) we will credit your account less the original cost of
					shipping
				</ListItem>
				<ListItem>
					Please note it may take a couple weeks for refunds to be applied to your account due to
					varying processing times of payment providers.
				</ListItem>
				<ListItem>
					Be sure to include the original packing slip or order receipt so we can complete the
					return process quickly
				</ListItem>
				<ListItem>
					Send all returns via FexEx to: Saven Company, 2808 Oakdale Avenue, Okeechobee, Florida
				</ListItem>
			</ul>
		</div>
	</Accordian>
</section>
