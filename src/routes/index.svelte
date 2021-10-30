<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte'
	import MainCaroussel from '$lib/specific/MainCaroussel.svelte';
	import Dude from '$lib/specific/Dude/Dude.svelte';

	let show = false
	onMount(() => show = true)
	
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

{#if show}

<main>
	<header transition:fly={{y: -200, duration: 2000}}>
		<h1> Odilf.com </h1>
		<Dude />
	</header>
	
	<body transition:fly={{y: 100, duration: 1500}}>
		<MainCaroussel />

	</body>
</main>

{/if}

<style>
	@import "@fontsource/caveat";
	
	h1 {
		font-family: 'Caveat';
		color: var(--text-color);
		font-size: min(500px, 25vw);
		padding: 1rem;
		/* height: 70vh; */
		
		/* margin: 20vh 0; */
		z-index: 1;
	}
	header {
		min-height: 80vh;

		display: grid;
		place-content: center;
	}
	main {
		background-color: var(--tertiary);
		position: absolute;
		inset: 0 0 0 0;

		display: flex;
		flex-direction: column;
	}
	body {
		--border: 100% 5%;
		border-top-left-radius: var(--border);
		border-top-right-radius: var(--border);

		padding: 2em;
		padding-top: 10%;
		background: var(--primary);
		color: var(--text-color);
		z-index: 1;

		display: flex;
		flex-direction: column;
		align-items: center;

		padding-bottom: 500px;

		box-shadow: var(--shadow)
	}

</style>