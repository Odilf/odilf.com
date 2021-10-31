<script lang="ts">
	import CarousselItem from './CarousselItem.svelte';

	export let selected: number
	export let peaking: number
</script>

<CarousselItem {selected} {peaking} index={1}>
	<h1> Barbarosa </h1>

	<body>
		<h3> A Rubik's cube solver and scrambler </h3>
		<p>
			Barbarosa is a Rubik's cube solver and scrambler, built on <a href='https://julialang.org/' target="_blank"> Julia </a>. It uses an IDA* algorithm with an AI-enhanced heuristic for optimal performance. 
		</p>
	</body>

	<footer> 
		<button on:click={() => window.open('https://www.barbarosa.odilf.com/')}> Visit site </button>
		<button on:click={() => window.open('https://github.com/Odilf/Barbarosa')}> GitHub </button>
	</footer>
</CarousselItem>

<style>
	body {
		width: min(600px, 100%)
	}
</style>