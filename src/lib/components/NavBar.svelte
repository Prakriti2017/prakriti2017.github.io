<script lang="ts">
	import { base } from "$app/paths";
	let header: HTMLElement;
</script>

<header bind:this={header}  tabindex="-1">
	<div>
		<nav>
			<a href="#top" class="skip-to-content">Skip to content</a>
			<ul>
				<li><a href="{base}/">Home</a></li>
				<li><a href="{base}/writings">Writings</a></li>
			</ul>
		</nav>
	</div>
</header>
