<script>
	/**
	 * @type {string}
	 */
	export let title;

	/**
	 * @type {string[]}
	 */
	export let badges = [];
</script>

<svelte:head>
	<title>{title ? title + " - " : ""}Prakriti Speaks Factos</title>
</svelte:head>

<slot />

<div id="badge-list">
	{#each badges as badge}
		<span>
			{badge}
		</span>
	{/each}
</div>

<style>
	#badge-list {
		margin-top: 50px;
		display: flex;
		flex-wrap: wrap;
	}
	#badge-list > span {
		font-size: small;
		margin: 3px 5px;
		padding: 6px 12px;
		background-color: var(--primary-dark1);
		color: white;
		border-radius: 20px;
	}
</style>
