<script lang="ts">
	export let small: boolean = false;
</script>

{#if small}
	<span class="small">
		<slot />
	</span>
{:else}
	<span class="medium">
		<slot />
	</span>
{/if}

<style>
	.small {
		font-size: x-small;
		margin: 3px 5px;
		padding: 3px 6px;
		background-color: var(--primary-dark1);
		color: white;
		border-radius: 20px;
	}

	.medium {
		font-size: small;
		margin: 3px 5px;
		padding: 6px 12px;
		background-color: var(--primary-dark1);
		color: white;
		border-radius: 20px;
	}
</style>
