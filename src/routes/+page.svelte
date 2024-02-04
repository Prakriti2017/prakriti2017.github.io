<script lang="ts">
	import { assets, base } from "$app/paths";
	import type { PageData } from "./$types";
	import FlowerIcon from "$lib/components/FlowerIcon.svelte";

	export let data: PageData;
</script>

<svelte:head>
	<link rel="icon" type="image/svg" href="{assets}/images/logo.png" />
	<title>Prakriti Speaks Factos </title>
</svelte:head>

<div id="header">
	<div id="flower">
		<FlowerIcon />
	</div>
	<h1>Prakriti Speaks Factos</h1>
</div>

<h3>👋 Hello Everyone! My name is Prakriti.</h3>

<p>I'm a wordsmith and a code conjurer.</p>

<p>
	I revel in weaving poetic verses, crafting profound/political musings, and
	essentially jotting down whatever whimsically dances through my mind at any
	given moment! Delightfully, you'll discover a collection of my creations
	just a scroll below:
</p>

<h3>Scribble Saga</h3>
<ul>
	{#each data.posts as post}
		<li>
			<a href="{base}/writings/{post.path}">{post.title}</a>
		</li>
	{/each}
</ul>

<style>
	#header {
		display: flex;
	}

	#flower {
		width: 30px;
		height: 50px;
		display: flex;
		align-items: center;
	}
</style>
