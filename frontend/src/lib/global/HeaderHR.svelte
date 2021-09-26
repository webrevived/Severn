<script lang="ts">
    import IconHr from "$lib/global/IconHR.svelte";

    export let title: string;
</script>

<section class="x-container mt-30">
    <h1 class="heading-1 text-black-600 text-50px mb-5">{title}</h1>
    <p class="heading-3 font-light text-black-600 mb-17.5"><slot /></p>
    
    <div class="mb-15">
        <IconHr src={'/icons/Cart_HR.svg'} />
    </div>
</section>