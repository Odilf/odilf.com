<script lang="ts">
    import Back from "$lib/Back.svelte";
    import { dateOptions } from "$lib/globals";

	import "./markdown-style.css"

	export let title: string
	export let date: Date | undefined = undefined
	export let subtitle: string | undefined = undefined

	export let content: any

	export let dateFormatter = (date: Date) => date.toLocaleDateString(undefined, dateOptions)
</script>

<main class='content'>
	<Back />
	<h1>{ title }</h1>

	{#if subtitle}
		<p class='faint'>{subtitle}</p>
	{/if}

	{#if date}
		<p class='faint'>{dateFormatter(new Date(date))}</p>
	{/if}

	<section>
		<svelte:component this={content} />
	</section>
</main>

<style>
	section {
		margin-top: 1em;
	}
</style>