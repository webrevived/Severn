<script lang="ts">
	import NavBar from '$lib/components/navigation/Bar.svelte';
	import Content from '$lib/views/terms/Content.svelte';
	import Header from '$lib/global/HeaderHR.svelte';
	const contents = [
		{
			title: 'Content Usage',
			description:
				'Please contact us at customercare@sevencompany.com if you would like to use our content or make a public reference to Seven Company. Once receiving permission, please provide credit for content that was used. If used to online, please hyperlink to sevencompany.com.'
		},
		{
			title: 'Governance Law',
			description:
				'The law of the country, excluding its conflicts of law rules, shall govern this Terms and your use of the service. Your use of the website may also be subject to other local, state, national, or international law.'
		},
		{
			title: 'Community Guidelines',
			description:
				'We reserve the right to block, delete, or restrict comments and posts from our social media pages containing profanity, hateful comments, personal attacks, and political or unrelated business agendas.  '
		}
	];
</script>

<main class="pb-7.5">
	<section class="x-container pt-6">
		<NavBar dark />
	</section>

	<Header title="Privacy Policy">Update on: 26, September, 2021</Header>

	{#each contents as content}
		<Content {...content} />
	{/each}
</main>
