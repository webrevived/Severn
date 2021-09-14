<script>
    import Button from '$lib/global/Button.svelte'
    import ArrowButton from '$lib/global/ArrowButton.svelte'
    import Input from '$lib/global/Form/Input.svelte'
    import TextArea from '$lib/global/Form/TextArea.svelte'

    let text = ""
    $: console.log(text)
</script>

<Input src="/icons/Search.svg" bind:value={text} />
<TextArea bind:value={text} />