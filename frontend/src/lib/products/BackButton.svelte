<script lang="ts">
import { afterNavigate, goto } from "$app/navigation";
import Arrow from "$lib/global/Arrow.svelte";

let previousPage: string;
afterNavigate((navigation) => {
    previousPage = navigation.from.pathname;
})

const handleGoBackClick = () => {
    if (!previousPage) return goto('/shop');
    goto(previousPage);
}
</script>

<button class="flex space-x-5 py-2" on:click={handleGoBackClick}>
    <Arrow flipped />
    <p class="heading-1 text-16px">Go Back</p>
</button>