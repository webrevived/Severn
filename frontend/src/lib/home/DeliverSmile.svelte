<script lang="ts">
    import Button from "$lib/global/Button.svelte";
</script>


<section 
    class="relative w-full gap-7.5 items-center justify-center overflow-hidden"
    flex="~ col"
    p="x-12 t-40"
    text="center"
>

    <img 
        class="CircleImg w-24.5 h-24.5"
        pos="absolute -left-27px lg:left-101px top-63px lg:top-123px"
        src="/images/CircleImg-1.jpg" 
        alt=""
    >
    <img 
        class="CircleImg w-13.5 h-13.5"
        pos="absolute left-12px lg:left-321px top-227px lg:top-337px" 
        src="/images/CircleImg-1.jpg" 
        alt=""
    >
    <img 
        class="CircleImg w-22 h-22"
        pos="absolute -right-20px lg:right-162px top-220px lg:top-191px"
        src="/images/CircleImg-1.jpg" 
        alt=""
    >

    <h1 class="text-1 <sm:text-11px text-brown-1200 z-2">DELIEVER SMILE TO YOUR LOVED ONES</h1>
    <h2 class="heading-2 <sm:text-lg max-w-131.5 <sm:max-w-69.5 md:mb-12.5 text-black-600 z-2">
        Our smallest choices have the potential for the biggest impact. Let’s make good ones together.
    </h2>

    <div class="z-2">
        <Button outline>
            Shop Now
        </Button>
    </div>
    
</section>

<style>
    .CircleImg {
        @apply rounded-full lg:w-33.5 lg:h-33.5 z-1;
    }
</style>