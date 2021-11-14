<script lang="ts">
    import NavBar from '$lib/global/Navigation/Bar.svelte'
    import Header from '$lib/about/Header.svelte';
    import About from '$lib/about/About.svelte';
    import Message from '$lib/about/Message.svelte';
    import Why from '$lib/about/Why.svelte';
    import Products from '$lib/about/Products.svelte';
</script>

<main>
    <section class="x-container pt-6">
        <NavBar dark />
    </section>

    <Header />
    <About />
    <Message />
    <Why />
    <Products />
</main>