<script lang="ts">
    import type { PageData } from "./$types";

	export let data: PageData
</script>

<main class='content'>
	<h1>{ data.titulo }</h1>
	<p class='faint'>Escrito el {new Date(data.fecha).toLocaleDateString("es-es", { dateStyle: 'long' })}</p>
	{#if data.asignatura}
		<p class='faint'> Para {data.asignatura} </p>
	{/if}

	<svelte:component this={data.content} />
</main>