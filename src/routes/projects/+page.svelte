<script lang="ts">
	import type { PageData } from './$types';
    import Project from './Project.svelte';
  
	export let data: PageData;
</script>

<svelte:head>
	<title> Projects </title>
</svelte:head>

<main class='content'>
	<h1> Projects </h1>
	<p class='faint'>
		Here are some of the things I've done over the years: 
	</p>

	<ul>
		{#each data.projects as project}
		<li>
			<Project {project}/>
		</li>
		{/each}
	</ul>

	<p style:margin-top="3em" class='faint'>
		..or you could just directly check out my <a href="https://github.com/Odilf"> GitHub </a>
	</p>
</main>

	
<style>
	ul {
		padding: 0;
		display: flex;
		gap: 1em;
		flex-direction: column;

		align-items: center;
		justify-content: space-evenly;
	}

	li {
		margin-block: 1em;
	}
</style>