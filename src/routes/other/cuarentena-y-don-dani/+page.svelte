<script lang="ts">
    import type { PageData } from "./$types";

	export let data: PageData
</script>

<main class='content'>
	<h1> Historias de quarentena, y Don Dani </h1>

	<p class='faint'>
		Un conjunto de historias y escrituras que hice en cuarentena, a finales de 4 de la ESO, en 2020. 
	</p>

	<ul>
		{#each data.stories as escritura}
			<li>
				<a href="cuarentena-y-don-dani/{escritura.path}">
					<h2> {escritura.titulo}</h2>
					<p class='faint'> {new Date(escritura.fecha).toLocaleDateString("es-es", { dateStyle: "long" })}</p>
				</a>
			</li>
		{/each}
	</ul>
</main>

<style>
	ul {
		padding: 0;
	}
	a {
		display: block;
		padding: 0.5em 1em;
		transition: 100ms all ease;
	}

	a:hover {
		background-color: var(--neutral-hover);
	}
</style>