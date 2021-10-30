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
	<header>
		<h1 transition:fly={{y: -200, duration: 2000}}> Odilf.com </h1>
		<div class=dude transition:fly={{y: 200, duration: 2000}}>
			<Dude />
		</div>
	</header>
	
	<body transition:fly={{y: 100, duration: 1500}}>
		<section>
			<p>
				Hi, I'm Ody! In this website you can see some of the project that are out on the Internet. Take a look!
			</p>
		</section>
		<MainCaroussel />

	</body>
</main>

{/if}

<style>
	@import "@fontsource/caveat";
	.dude {
		position: absolute;
		height: 80vh;
		width: 100%;
	}
	
	h1 {
		font-family: 'Caveat';
		color: var(--text-color);

		font-size: min(500px, 25vw);
		padding: 1rem;
		/* height: 70vh; */
		
		/* margin: 20vh 0; */
		z-index: 1;
		pointer-events: none;
	}
	header {
		min-height: 80vh;

		display: grid;
		place-content: center;
	}

	section {
		width: min(100%, 620px);
		font-size: 1.5em;
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

		padding: min(3em, 6vw);
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