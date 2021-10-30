<script lang="ts">
	import { fly } from 'svelte/transition'

	export let active = true;
</script>

<main in:fly={{y: 200}} out:fly={{y: -200}} class:active>
	<h1> <slot name='title'/> </h1>

	<body>
		<slot/>
	</body>
</main>

<style>
	main {
		position: relative;
		background-color: var(--secondary); 
		padding: 3em;
		border-radius: 1em;
		transition: all 0.4s ease;
	}

	.active {
		/* position: relative; */
		/* transform: translate(0, -50%); */
		opacity: 0%;
	}
</style>