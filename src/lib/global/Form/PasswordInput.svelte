<script lang="ts">
	export let placeholder: string;
	export let value: string;
</script>

<input
	type="password"
	bind:value
	class="heading-3 text-lg font-light placeholder-[#888888] bg-[inherit]"
	w="full"
	outline="none"
	border="b-1 black-600"
	{placeholder}
/>
