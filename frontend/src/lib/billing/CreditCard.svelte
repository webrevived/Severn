<script>
	/* Secuirty is intersting here */
	export let cardData;
</script>

<div class="border-1 rounded-xl flex justify-between p-2 h-250px flex-grow sm:p-5">
	<!-- Top Section Of Card -->
	<div class="flex flex-col justify-between">
		<img src="/icons/CC_Icon.svg" alt="Credit Card Icon" class="max-w-60px" />
		<!-- Card Number -->
		<span class="text-1 text-brown-1200 text-2xl"> *** **** **** {cardData.last} </span>
		<span class="text-1">
			{Object.values(cardData.name).join(' ')} 
			<span class="ml-7">{cardData.exp}</span>
		</span>
	</div>

	<div class="flex flex-col text-right">
		{#if cardData.primary}
			<span>
				<img class="inline mr-1" src="/icons/Checkmark.svg" alt="Checkmark Icon" /> Primary
			</span>
		{:else}
			<span class="text-brown-600">Make Primary</span>
			<span>Remove</span>
		{/if}
		
		<img src="/icons/Mastercard_icon.svg" alt="Credit Card Icon" class="max-w-60px mt-auto self-end" />
	</div>
</div>
