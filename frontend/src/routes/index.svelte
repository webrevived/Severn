<script>
    import Heading from '$lib/home/Heading.svelte'
    import DeliverSmile from '$lib/home/DeliverSmile.svelte'
    import Explore from '$lib/home/Explore.svelte'
    import Quotes from '$lib/home/Quotes.svelte'
    import About from '$lib/home/About.svelte'
    import BestSeller from '$lib/home/BestSeller.svelte'
    import Gallary from '$lib/global/Gallary.svelte'

    const quotes = [
        { 
            rating: 5,
            quote: "I do not think you will find anything better. I have repurchased this product many times now, it has become a staple in my routine. Definitely recommend and will order again.",
            auther: "Amanda"
        },
        { 
            rating: 2,
            quote: "I do not think you will find anything better. I have repurchased this product many times now, it has become a staple in my routine. Definitely recommend and will order again.",
            auther: "Amanda"
        },
        { 
            rating: 4,
            quote: "I do not think you will find anything better. I have repurchased this product many times now, it has become a staple in my routine. Definitely recommend and will order again.",
            auther: "Amanda"
        },
    ]
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