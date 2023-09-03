<script lang="ts">
	import { base } from "$app/paths";
	import type { PageData } from "./$types";
	import PostCard from "$lib/components/PostCard.svelte";

	export let data: PageData;
</script>

<svelte:head>
	<title>Writings - Prakriti Speaks Factos</title>
</svelte:head>

<h1>Scribble Saga</h1>

{#each data.posts as post}
	<PostCard {post} />
{/each}
