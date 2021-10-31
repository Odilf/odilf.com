<script lang="ts">
	import CarousselItem from './CarousselItem.svelte';
	
	export let selected: number
	export let peaking: number
</script>

<CarousselItem {selected} {peaking} index={2}>
	<h1> FAM </h1>

	<body>
		<h3> Maggie's fan page </h3>
		<p>
			FAM is the official <a href='https://fam.odilf.com' target='_blank' rel="noopener"> Maggie Fan and Worship Club</a>. 
			If you're wondering who Maggie is, well... Maggie is a cat! Maggie is in fact Javi's cat. 
		</p>

		<p>
			FAM is a lighthearted project where me and my friend, <a href='https://www.instagram.com/claraaagv_/' target="_blank" rel="noopener"> Clara</a>, show our love for Maggie, the cat from our friend, Javi. 
		</p>
	</body>

	<footer> 
		<button on:click={() => window.open('https://www.fam.odilf.com/')}> Visit site </button>
		<button on:click={() => window.open('https://github.com/Odilf/FAM')}> GitHub </button>
	</footer>
</CarousselItem>

<style>
	body {
		width: min(600px, 100%)
	}
</style>