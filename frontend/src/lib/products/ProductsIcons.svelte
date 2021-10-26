<script lang="ts">
    export let src: string;
</script>

<div class="w-max flex flex-col items-center gap-2.5">
    <div class="w-17.5 h-17.5 bg-white-300 rounded-full text-black-600 grid place-content-center">
        <img {src} alt="">
    </div>

    <p class="text-2 text-black-600 uppercase">
        <slot>
            Default
        </slot>
    </p>
</div>