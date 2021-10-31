<script lang="ts">
	import CarousselItem from "./CarousselItem.svelte";

	export let selected: number
	export let peaking: number
</script>

<CarousselItem {selected} index={3} {peaking}>
	<h1> <a href='https://www.pistoltimer.com/' target="_blank" rel="noopener"> Odilf.com </a> </h1>
	
	<body>
		<h3> This website! </h3>
		<p>
			
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
		<button on:click={() => window.open('https://github.com/Odilf/Pistol')}> GitHub </button>
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
	img {
		width: 100%;
	}
</style>