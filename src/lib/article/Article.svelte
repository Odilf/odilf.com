<script lang="ts">
    import Back from "$lib/Back.svelte";
    import { dateOptions } from "$lib/globals";
    import { onMount } from "svelte";
    import { current_component, custom_event } from "svelte/internal";

	// import "./markdown-style.css"

	export let title: string
	export let date: Date | undefined = undefined
	export let subtitle: string | undefined = undefined

	export let content: any
	export let outlineDepth = 0;

	export let dateFormatter = (date: Date) => date.toLocaleDateString(undefined, dateOptions)

	let headings: Element[] = []
	let articleElement: HTMLElement
	let selectedHeading: Element

	onMount(() => {
		if (outlineDepth == 0) {
			return
		}

		headings = [...articleElement.querySelectorAll([...new Array(outlineDepth).keys()].map(i => `h${i + 1}`).join(", "))]
	})
</script>

<svelte:body on:scroll={() => {
	const heading = headings
		.filter(heading => {
			const cutoff = window.innerHeight * (document.body.scrollTop / (articleElement.getBoundingClientRect().height - window.innerHeight))
			return heading.getBoundingClientRect().y < cutoff
		})
		.at(-1) || headings[0]

	selectedHeading = heading
}} />

<div class='wrapper'>
	<div/>
	<main class='content'>
		<Back />
		<h1>{ title }</h1>

		{#if subtitle}
			<p class='faint'>{subtitle}</p>
		{/if}

		{#if date}
			<p class='faint'>{dateFormatter(new Date(date))}</p>
		{/if}

		<section bind:this={articleElement}>
			<svelte:component this={content} />
		</section>
	</main>

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
</div>

<style>
	.wrapper {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
	}

	section {
		margin-top: 1em;
	}

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