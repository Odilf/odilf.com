<script lang="ts">
	// export let articleElement: HTMLElement
</script>


<div>	
	<slot/>
</div>

<style>
	* :global(p), :global(ol) :global(ul) {
		margin-top: 1em;
	}

	* :global(p) {
		text-align: justify;
	}

	* :global(ul) > :global(li) {
		list-style: disc;
	}

	* :global(.heading) {
		padding-block: 0.2em;
		margin-top: 1em;
		transition: all 500ms ease;
	}

	* :global(h1) {
		font-weight: 800;
	}

	* :global(.heading:target) {
		background-color: var(--neutral-hover);
		padding-inline: 0.5em;
		border-radius: var(--rounded);
	}

	:global(.katex-html) {
		overflow-y: hidden;
		overflow-x: scroll;
	}
</style>