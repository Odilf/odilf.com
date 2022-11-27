<script lang="ts">
    import { browser } from "$app/environment";
    import { onMount } from "svelte";


	export let scrollingElement: HTMLElement | null = browser ? document.body : null
	export let articleElement: HTMLElement 
	let selectedHeading: Element

	export let outlineDepth = 0

	let headings: Element[] = []
	
	$: if (outlineDepth > 0 && articleElement) {
		headings = [...articleElement.querySelectorAll([...new Array(outlineDepth).keys()].map(i => `h${i + 1}`).join(", "))]
		scrollingElement?.addEventListener("scroll", () => {
			const heading = headings
				.filter(heading => {
					const cutoff = window.innerHeight * (document.body.scrollTop / (articleElement.getBoundingClientRect().height - window.innerHeight))
					return heading.getBoundingClientRect().y < cutoff
				})
				.at(-1) || headings[0]

			selectedHeading = heading
		})
	}
</script>

{#if outlineDepth > 0}
	<div class='outline'>
		<h1>
			Outline:
		</h1>
		
		<ul>
			{#each headings as heading}
			<li class:intersecting={selectedHeading == heading} style:padding-left="{parseInt(heading.tagName[1]) - 1 + 0.5}em">
				<a href="#{heading.id}">
					{@html heading.innerHTML}
				</a>
			</li>
			{/each}
		</ul>
	</div>
{/if}


<style>
	.outline {
		position: sticky;
		right: auto;
		top: var(--navbar-height);
		max-height: calc(100vh - var(--navbar-height));
		min-width: 240px;
		margin-inline-end: auto;

		padding-top: 1em;
		margin-left: 1em;
		opacity: 50%;
		transition: all 500ms ease;
	}

	.outline:hover {
		opacity: 100%;
	}

	@media (max-width: 960px) {
		.outline {
			display: none;
		}
	}	

	ul {
		padding: 0;
	}

	li {
		transition: 300ms all ease;
		padding-block: 0.1em;
		width: fit-content;

		border-left: 2px solid;
		font-weight: 300;
	}

	.intersecting {
		padding-inline-start: 0.5em;
		color: var(--primary);
	}
</style>