<script lang="ts" context="module">
    import type { Review } from '$lib/api/severnReviews';
    import type { Load } from '@sveltejs/kit';
    export const load: Load = async ({ fetch }) => {
        const quotes: Review[] = await fetch("/api/quotes").then( res => res.json() )

        return {
            props: { quotes }
        }
    }
</script>

<script lang="ts">
    import Heading from '$lib/home/Heading.svelte'
    import DeliverSmile from '$lib/home/DeliverSmile.svelte'
    import Explore from '$lib/home/Explore.svelte'
    import Quotes from '$lib/home/Quotes.svelte'
    import About from '$lib/home/About.svelte'
    import BestSeller from '$lib/home/BestSeller.svelte'
    import Gallary from '$lib/global/Gallary.svelte'

    export let quotes: Review[];
</script>

<Heading src="/images/Home_Header.png" />

<main>
    <DeliverSmile />
    <BestSeller />
    <Explore />
    <Quotes {quotes} />
    <About />
    <Gallary --mt="140px" />
</main>