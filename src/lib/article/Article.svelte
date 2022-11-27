<script lang="ts">
    import Back from "$lib/Back.svelte";
    import { dateOptions } from "$lib/globals";
    import Outline from "./Outline.svelte";

	export let title: string
	export let date: Date | undefined = undefined
	export let subtitle: string | undefined = undefined
	export let outlineDepth = 0

	export let content: any

	export let dateFormatter = (date: Date) => date.toLocaleDateString(undefined, dateOptions)

	let articleElement: HTMLElement
</script>

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

	<Outline {outlineDepth} {articleElement}/>
</div>

<style>
	.wrapper {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
	}

	section {
		margin-top: 1em;
	}
</style>