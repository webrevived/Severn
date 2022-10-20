<script lang="ts">
	import Gallary from '$lib/global/Gallary.svelte';
	import About from '$lib/views/home/About.svelte';
	import BestSellersNew from '$lib/views/home/BestSellers-New.svelte';
	import DeliverSmile from '$lib/views/home/DeliverSmile.svelte';
	import Explore from '$lib/views/home/Explore.svelte';
	import Heading from '$lib/views/home/Heading.svelte';
	import Quotes from '$lib/views/home/Quotes.svelte';
</script>

<Heading src="/images/skin_care_hero.jpg" />

<main>
	<DeliverSmile />
	<BestSellersNew />
	<Explore />
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
