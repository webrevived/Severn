<script lang="ts">
	import Heading from '$lib/home/Heading.svelte';
	import DeliverSmile from '$lib/home/DeliverSmile.svelte';
	import Explore from '$lib/home/Explore.svelte';
	import Quotes from '$lib/home/Quotes.svelte';
	import About from '$lib/home/About.svelte';
	import BestSeller from '$lib/home/BestSeller.svelte';
	import Gallary from '$lib/global/Gallary.svelte';
	import BestSellersNew from '$lib/home/BestSellers-New.svelte';
</script>

<Heading src="/images/Home_Header.png" />
<main>
	<DeliverSmile />
	<!-- <BestSeller /> -->
	<BestSellersNew />
	<!-- <Explore /> -->
	<About />
	<Quotes
		quotes={[
			{
				author: 'Adam G.',
				created_at: '10/17/19',
				id: 1,
				published_at: '10/12/2022',
				rating: 5,
				quote:
					'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo nulla harum nisi enim, eum quae cupiditate at ipsam cumque perspiciatis eius quidem. ',
				updated_at: 'Updated'
			},
			{
				author: 'Jeff W.',
				created_at: '10/17/19',
				id: 1,
				published_at: '10/12/2022',
				rating: 5,
				quote: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.  ',
				updated_at: 'Updated'
			}
		]}
	/>
	<Gallary --mt="140px" />
</main>
