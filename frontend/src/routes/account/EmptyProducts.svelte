<script>
import Button from "$lib/global/Button.svelte";

export let title;
export let desc;
export let src = "/images/light_bulb.png";
export let buttonText = "Shop all products";

</script>

<div class="flex flex-col items-center gap-4 my-10">
    <img class="max-w-88px" {src} alt="Light bulb sketched" />
    <h2 class="text-xl font-semibold capitalize">{title}</h2>
    <p class="text-grey-600">{desc}</p>
    <Button>{buttonText}</Button>
</div>