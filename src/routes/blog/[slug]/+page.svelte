<script lang="ts">
    import Back from "$lib/Back.svelte";
    import { dateOptions } from "$lib/globals";
    import type { PageData } from "./$types";

	import "./markdown-style.css"

	export let data: PageData
</script>

<main class='content'>
	<Back />
	<h1>{ data.title }</h1>
	<p class='faint'>{new Date(data.date).toLocaleDateString(undefined, dateOptions)}</p>
	<svelte:component this={data.content} />
</main>