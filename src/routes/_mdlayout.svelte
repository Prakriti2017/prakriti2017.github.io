<script >
	export let title
</script>

<svelte:head>
	<title>{title ? title + " - " : ""}Prakriti Speaks Factos</title>
</svelte:head>

<slot />
