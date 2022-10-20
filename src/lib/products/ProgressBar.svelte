<script lang="ts">
	export let key: number;
	export let value: number;
	export let total: number;

	$: progress = (value / total) * 100;
</script>

<div class="flex gap-5 items-center">
	<p>{key} stars</p>

	<!-- outer -->
	<div class="min-w-213px h-3 bg-[#D6D4CE] rounded-[30px]">
		<!-- inner -->
		<div class="bg-[#83612E] h-full rounded-[30px]" style="width: {progress}%" />
	</div>
</div>
