<script lang="ts">
	export let title: String;
</script>

<svelte:head>
	<title>{title ? title + " - " : ""}SvelteKitTemplate</title>
</svelte:head>

<slot />
