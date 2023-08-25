<script lang="ts">
	import "../app.scss";
	import NavBar from "$lib/components/NavBar.svelte";
	import Year from "$lib/components/Year.svelte";
</script>

<NavBar />

<main id="top">
	<div class="content">
		<slot />
	</div>
</main>

<footer>
	<p>
		Prakriti &copy; <Year from={2020} />
	</p>
</footer>
