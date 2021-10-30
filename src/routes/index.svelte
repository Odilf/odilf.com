<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">

	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte'
	import MainCaroussel from '$lib/specific/MainCaroussel.svelte';

	let show = false
	onMount(() => show = true)
	
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<!-- <svelte:window bind:scrollY={scroll}/> -->

{#if show}

<main>
	<h1 transition:fly={{y: -200, duration: 2000}}> Odilf.com </h1>

	<body transition:fly={{y: 100, duration: 1500}}>
		<MainCaroussel/>

		<p>
			Yoo
		</p>
	</body>
</main>



{/if}

<style>
	h1 {
		color: var(--text-color);
		font-size: min(10em, 20vw);
		font-weight: 700;
		margin: 1em 0;
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
		flex-grow: 1;

		display: flex;
		flex-direction: column;
		align-items: center;

		padding-bottom: 500px;

		box-shadow: var(--shadow)
	}

</style>