<script lang="ts">
    import Back from "$lib/Back.svelte";
    import BlogEntry from "$lib/article/Entry.svelte";
    import type { PageData } from "./$types";

	export let data: PageData
</script>

<main class='content'>
	<Back />

	<h1> Historias de cuarentena, y Don Dani </h1>

	<p class='faint'>
		Un conjunto de historias y escrituras que hice en cuarentena, a finales de 4 de la ESO, en 2020. 
	</p>

	<ul>
		{#each data.stories as escritura}
			<li>
				<BlogEntry 
				title={escritura.titulo} 
				subtitle={new Date(escritura.fecha).toLocaleDateString("es-es", { dateStyle: "long" })}
				link="cuarentena-y-don-dani/{escritura.path}"/>
			</li>
		{/each}
	</ul>
</main>

<style>
	ul {
		padding: 0;
		margin-top: 1em;
	}
	
	li {
		margin: 0;
	}
</style>