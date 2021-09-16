<script lang="ts">
    export let href = "/"
    export let src: string;
    export let category: string;
    export let title: string;
    export let price: number;
    
    $: _price = price.toFixed(2)
</script>

<a 
    class="group flex flex-col text-center w-67.5 gap-2.5"
    style = "--src: url('{src}')"
    {href}
>
    <div class="w-full h-67.5 overflow-hidden">
        <div 
            class="w-full h-full bg-src transform group-hover:scale-120"
            transition="~ transform duration-500"
        />
    </div>
    <h1 class="text-2 text-brown-1200 mb-7px">{category}</h1>
    <h2 class="heading-3 text-lg group-hover:italic">{title}</h2>
    <p class="text-1" text="brown-1200 14px">${_price}</p>
</a>

<style>
    .bg-src {
        background: url('/images/ItemFilter.png'), var(--src);
        background-position: center;
    }
</style>