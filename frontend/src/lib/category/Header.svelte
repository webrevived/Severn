<script lang="ts">
    import type { CategoriesApi } from "$lib/api/categorys";
    import { HOST } from '$lib/api/index'
    import NavBar from '$lib/global/Navigation/Bar.svelte'
    
    export let category: CategoriesApi
</script>

<header class="w-full relative bg-white-300" flex="~ col-reverse md:row" justify="between">
    <div class="z-1 x-container py-6 w-full absolute top-0 left-0">    
        <NavBar dark />
    </div>
    
    <div class="mx-7 md:mx-25.5 py-20 md:py-55 flex flex-col gap-5">
        <h1 class="heading-1 text-50px text-black-600">{category.long_title}</h1>
        <p class="text-1 text-brown-1200">{category.long_description}</p>
    </div>

    <img class="min-w-0 max-w-full h-350px md:h-auto object-cover" src="{HOST}{category.thumbnail.url}" alt="" />
</header>