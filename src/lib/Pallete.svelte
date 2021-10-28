<script>
	import "../app.css"

	const variables = [
		"primary",
		"secondary",
		"tertiary",
		"accent",
		"text-color",
	]
</script>

<main>
	{#each variables as cvar}
		<div style="background-color: var(--{cvar})"> {cvar} </div>
	{/each}
</main>


<style>
	main {
		display: flex;
		background-color: white;
		/* width: fit-content; */
		flex-direction: column;
	}

	div {
		color: white;
		width: 20%;
		margin: 0.5em;
		padding: 1em;
		/* align-items: center; */
		justify-content: space-evenly;

		transition: all 0.2s;
	}

	div:hover {
		box-shadow: #000 0px 0px 1px ;
		text-shadow: #000 0px 0px 4px;
		transform: scale(110%);
	}
</style>