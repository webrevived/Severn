<script lang="ts">
    export let value: number
    const inc = () => value++
    const dec = () => value > 1 ? value-- : value

    $: _value = value.toLocaleString('en-US', {
        minimumIntegerDigits: 2
    })
</script>

<div class="w-max flex gap-6 h-min" p="x-3 y-2.5" border="1px rounded-30px">
   <button on:click={inc}>
        <img src="/images/IncreaseIcon.svg" alt="">
   </button>
   <p class="text-2">{_value}</p>
   <button on:click={dec}>
        <img src="/images/DecreaseIcon.svg" alt="">
   </button>
</div>