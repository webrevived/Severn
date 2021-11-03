<script lang="ts">
    import BackButton from "$lib/products/BackButton.svelte";
    import ProductsIcons from "$lib/products/ProductsIcons.svelte";
    import QuantityInput from "$lib/products/QuantityInput.svelte";
    import RadioContainer from "$lib/products/RadioContainer.svelte";
    import RadioItem from "$lib/products/RadioItem.svelte";
    import Tabs from "$lib/products/Tabs.svelte";

    let quantity = 1
    let colors: string
    let moreinfo = ""
    let _sets: string
    
    $: sets = parseInt( _sets ?? "1" )
</script>

<main class="w-full min-h-350px">
    <form class="flex flex-col gap-6" on:submit|preventDefault>
        <QuantityInput bind:value={quantity} />

        <RadioContainer bind:value={_sets} let:key>
            <RadioItem value="1" {key} checked>Set of 1</RadioItem>
            <RadioItem value="2" {key}>Set of 2</RadioItem>
            <RadioItem value="4" {key}>Set of 4</RadioItem>
            <RadioItem value="8" {key}>Set of 8</RadioItem>
        </RadioContainer>

        <RadioContainer bind:value={colors} let:key>
            <RadioItem value={"none"}  {key} checked>None</RadioItem>
            <RadioItem value={"pink"}  {key}>Pink</RadioItem>
            <RadioItem value={"red"}   {key}>Red</RadioItem>
            <RadioItem value={"black"} {key}>Black</RadioItem>
        </RadioContainer>

        <div>
            <BackButton />
        </div>

        <div class="flex gap-6">
            <ProductsIcons src="/icons/GiftPack.svg">
                free gift pack
            </ProductsIcons>
        </div>

        <div class="w-full max-w-182 mb-6 place-self-center">
            <Tabs bind:value={moreinfo} options={["Product Details", "Product Gallery", "Why Our Candles",]} />
        </div>
    </form>
</main>