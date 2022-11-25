<script lang="ts">
    import { dateOptions } from "$lib/globals";
    import type { PageData } from "./$types";

	export let data: PageData
</script>

<main class='content'>
	<h1>{ data.title }</h1>
	<p>Published: {new Date(data.date).toLocaleDateString(undefined, dateOptions)}</p>
	<svelte:component this={data.content} />
</main>