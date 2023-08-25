<script>
	import { base } from "$app/paths";
	import FlowerIcon from "$lib/components/FlowerIcon.svelte";
</script>

<svelte:head>
	<title>Prakriti Speaks Factos</title>
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
	<li>
		<a href="{base}/writings/dear-prakriti">Dear Prakriti</a>
	</li>
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
