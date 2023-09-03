<script>
	/**
	 * @type {string}
	 */
	export let title;

	/**
	 * @type {string[]}
	 */
	export let badges = [];
	import Badge from "$lib/components/Badge.svelte";
</script>

<svelte:head>
	<title>{title ? title + " - " : ""}Prakriti Speaks Factos</title>
</svelte:head>

<slot />

<div id="badge-list">
	{#each badges as badge}
		<Badge>
			{badge}
		</Badge>
	{/each}
</div>

<style>
	#badge-list {
		margin-top: 50px;
		display: flex;
		flex-wrap: wrap;
	}
</style>
