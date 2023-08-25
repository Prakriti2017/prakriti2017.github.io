<script lang="ts">
	import { base } from "$app/paths";
	let header: HTMLElement;
	let expanded: boolean;

	function expandHeader() {
		expanded = !expanded;
		const element = document.activeElement as HTMLElement | null;
		if (!expanded && element && (("blur" in element) as any))
			element.blur();
	}
</script>

<header bind:this={header} aria-expanded={expanded} tabindex="-1">
	<div>
		<nav>
			<a href="#top" class="skip-to-content">Skip to content</a>
			<ul>
				<li><a href="{base}/">Home</a></li>
				<li><a href="{base}/writings">Writings</a></li>
			</ul>
			<div
				id="expander"
				tabindex="-1"
				class="expander"
				on:click={expandHeader}
			>
				<svg width="48" height="48">
					<path d="M14,17h20m0,7h-20m0,7h20" />
				</svg>
			</div>
		</nav>
	</div>
</header>
