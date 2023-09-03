<script lang="ts">
	import type { PostMeta } from "$lib/types";
	import Badge from "./Badge.svelte";
	export let post: PostMeta;
</script>

<div class="body">
	<h5>{post.date}</h5>
	<a href="/writings/{post.path}">
		<h3>{post.title}</h3>
	</a>

	<div>
		{#if post.badges.length}
			<Badge small>{post.badges[0]}</Badge>
		{/if}
	</div>
	<hr />
</div>

<style>
	.body {
		padding: 5px 0px;
	}
</style>
