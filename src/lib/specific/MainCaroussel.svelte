<script lang=ts>
	import CarousselItem from "./CarousselItem.svelte"

	let selected = 0
	let peaking = null
</script>

<main>
	<nav>
		{#each ['Pistol', 'Barbarosa', 'FAM'] as project, i}
			<button on:click={() => selected = i} on:mouseover={() => peaking = i} on:focus={() => peaking = i} on:mouseleave={() => peaking = null}> {project} </button>
		{/each}
	</nav>

	<body>
		
		<CarousselItem {selected} index={0} {peaking}>
			<h1> Virgin generator </h1>
	
			<p>
				Here we generate virgin
			</p>
			
			<p>
				(Coppel)
			</p>
		</CarousselItem>
		
		<CarousselItem {selected} index={1} {peaking}>
			<h1> gay generator </h1>
	
			<p>
				Here we generate gay
			</p>
			
			<p>
				(Coppel)
			</p>
		</CarousselItem>

		<CarousselItem {selected} index={2} {peaking}>
			<h1> AAAAAA </h1>
	
			<p>
				chus
			</p>
			
			<p>
				(im so)
			</p>

			<p>
				<i>funny</i>
			</p>

			<img src='https://images.english.elpais.com/resizer/aMLtrzhSmlQnPrInIaCwJJYuKGE=/414x0/filters:focal(1052x792:1062x802)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/IPZM424KYBEH7IVUKNQZETWHVU.jpg' alt='cat'>
			<img src='https://images.english.elpais.com/resizer/aMLtrzhSmlQnPrInIaCwJJYuKGE=/414x0/filters:focal(1052x792:1062x802)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/IPZM424KYBEH7IVUKNQZETWHVU.jpg' alt='cat'>
			<img src='https://images.english.elpais.com/resizer/aMLtrzhSmlQnPrInIaCwJJYuKGE=/414x0/filters:focal(1052x792:1062x802)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/IPZM424KYBEH7IVUKNQZETWHVU.jpg' alt='cat'>
		</CarousselItem>

	</body>
</main>

<style>

	

	main {
		display: flex;
		align-items: center;

		width: 100%;
		height: 85vh;
	}

	nav {
		margin: 2em;
		width: 20%;
		display: flex;
		flex-direction: column;
	}

	button {
		z-index: 2;
		width: fit-content
	}

	body {
		flex-grow: 5;
		width: 80%;
		height: 100%;
		position: relative;
	}
</style>