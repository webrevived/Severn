
<script lang="ts">
    export let src: string;
    import Button from '$lib/global/Button.svelte'
    import NavBar from '$lib/global/Navigation/Bar.svelte';
    import Feedback from '$lib/home/Feedback.svelte';
</script>

<header 
    flex="~ col"
    class="relative x-container w-full min-h-213 justify-center bg-header" 
    p="t-6"
    style="--src: url('{src}')"
>

    <NavBar />

    <div 
        class="max-w-129.5 h-full justify-center" 
        flex="~ grow col"
    >
        <div 
            class="gap-2.5"
            transform="~ -translate-y-30/100" 
            flex="~ col" 
        >
            <h1 class="text-1 text-white-100">NATURE-INSPIRED SKINCARE FOR MEN</h1>
            <h2 class="heading-1 text-white-100 mb-2.5">Self Love is an Action, And It’s Time to Act</h2>
            <div>
                <Button>Shop Now</Button>
            </div>
        </div>
    </div>

    <div 
        class="absolute bottom-0 left-50/100"
        transform="~ -translate-x-50/100 translate-y-50/100"
    >
        <Feedback />
    </div>
</header>

<style>
    .bg-header {
        background: var(--src) no-repeat;
        background-size: cover;
    }
</style>