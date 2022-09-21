<script lang="ts">
    import Button from "$lib/global/Button.svelte";
    import ProgressBar from "$lib/products/ProgressBar.svelte";
    import Rating from "$lib/products/Rating.svelte"
    import UserReview from "$lib/products/UserReview.svelte";
    import mock from "$lib/products/mock"
    import type { ProductsApi } from "$lib/api/products";
    import ReviewModal from "./ReviewModal.svelte";

    export let product: ProductsApi
    let reviews = product.prouct_reviews
    
    let modal = false

    let avg = reviews.reduce( (acc, curr) => acc + curr.rating, 0 ) / reviews.length
    if (isNaN(avg)) avg = 0
    
    const occurrence = reviews.reduce( (acc, curr) => {
        return { ...acc, [curr.rating]: (acc[curr.rating] ?? 0) + 1  }
    }, { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 } )

    const total = reviews.length 
</script>

<section class="w-full x-container my-25 flex flex-col">
    <div class="text-center">
        <h1 class="heading-1 font-medium text-black-600 ">See why others love our product</h1>
        <p class="text-2 text-brown-1200">
            We have lots of five star reviews, take a look into why our customers choose Seven Company
        </p>
    </div>

    <div class="w-full mt-10.5 max-w-221 self-center">
        <div class="items-center" grid="~ rows-2 md:rows-1 cols-[max-content_max-content_1fr] gap-x-2.5">
            <p class="heading-3 text-black-600">{avg.toFixed(1)}</p>
            <div grid="<md:col-start-2 <md:col-end-3">
                <Rating rating={Math.round( avg )} />
            </div>

            <div class="w-max md:justify-self-end" grid="<md:(row-start-2 row-end-3 col-span-3)">
                <Button on:click={ () => modal = true }>Write a Review</Button>
            </div>  
        </div>
        <p class="text-2 text-brown-1200">{reviews.length} Reviews</p>
    
        <div class="flex flex-col gap-3 mt-10">
            {#each Object.keys(occurrence).sort( (a, b) => parseInt(b) - parseInt(a) ) as key}
                <ProgressBar {key} value={occurrence[key]} total={total > 0 ? total : 1} />
            {/each}
        </div>


        <div class="mt-10">
            {#each reviews as review}
                <UserReview {review} />
            {/each}
        </div>
    </div>

    <ReviewModal {product} bind:modal={modal} />
</section>