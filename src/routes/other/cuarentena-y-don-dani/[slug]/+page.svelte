<script lang="ts">
    import Back from "$lib/Back.svelte";
    import { onMount } from "svelte";
    import type { PageData } from "./$types";

	export let data: PageData

	import "../../../blog/[slug]/markdown-style.css"

	onMount(() => {
		window.scrollTo(0, 0)
	})
</script>

<main class='content'>
	<Back />
	<h1>{ data.titulo }</h1>
	<div class='metadata'>
		<p class='faint'>Escrito el {new Date(data.fecha).toLocaleDateString("es-es", { dateStyle: 'long' })}</p>
		{#if data.asignatura}
			<p class='faint'> Para {data.asignatura} </p>
		{/if}
	</div>

	<svelte:component this={data.content} />	
</main>

<style>
	/* .metadata {
		margin-bottom: 2em;
	} */

	h1 {
		font-variant-caps: small-caps;
	}
</style>