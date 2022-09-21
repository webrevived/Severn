<script lang="ts">
    import type { ProductReviews } from "$lib/api/products";
    import Rating from "$lib/products/Rating.svelte"


    export let review: ProductReviews
</script>

<div border="t-1px brown-1200" class="flex flex-col py-5">
    <div class="flex items-center gap-2.5">
        <Rating rating={review.rating} />
        <p class="heading-3 text-black-600 transform translate-y-0.2">{review.user.name}</p>
    </div>

    <p class="text-1 text-black-600 mt-5 leading-[1.5em]">{review.review}</p>
</div>