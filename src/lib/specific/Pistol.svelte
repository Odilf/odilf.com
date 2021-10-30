<script lang="ts">
	import CarousselItem from '$lib/specific/CarousselItem.svelte';

	export let selected: number
	export let peaking: number
</script>

<CarousselItem {selected} index={0} {peaking}>
	<h1> <a href='https://www.pistoltimer.com/' target="_blank"> Pistol </a> </h1>
	

	<body>

		<h3> A Rubik's cube timer </h3>
		<p>
			I have been solving Rubik's cubes since I was 10 years old, and something I noticed is that all timer apps sucked. I always thought how I could improve their design, so once I learned how to develop websites, I got to work and built Pistol. 
		</p>
		<p>
			Pistol is an open source speedcubing timer that brings a modern aproach and desing. Focused on the best possible user expirience: elegancy, simplicity, ease of use, performance and customization.
		</p>
		
		<p>
			Built with SvelteKit, still under development.
		</p>
	</body>
	
	<img src='pistol-demo.gif' alt='pistol demo' loading='lazy'/>
	<footer> 
		<button on:click={() => window.open('https://www.pistoltimer.com/')}> Visit site </button>
		<button on:click={() => window.open('https://www.github.com/')}> GitHub </button>
	</footer>
	
</CarousselItem>

<style>
	body {
		width: min(600px, 100%)
	}

	a {
		color: white;
	}

	footer {
		margin-top: 1em;
	}
</style>