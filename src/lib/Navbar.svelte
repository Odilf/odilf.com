<script lang=ts>
	import Spacer from "./Spacer.svelte";

	export let value = 0;
	export let scroll: number;
	
	export let element

	// $: console.log(element && element.scrollHeight);
	$: console.log(value)

	$: value = Math.floor(3 * scroll / (element && element.scrollHeight)) + 1
	
</script>

<main>
	<button on:click={() => scroll=20} class={value == 1 ? "clicked" : ""}> Pistol </button>
	<Spacer/>
	<button on:click={() => value = 2} class={value == 2 ? "clicked" : ""}> Barbarosa </button>
	<Spacer/>
	<button on:click={() => value = 3} class={value == 3 ? "clicked" : ""}> FAM </button>
</main>

<style>
	main {
		position: sticky;
		top: 20px;

		/* width: 100%;  */
		height: 3em;
		padding: 1em;

		display: flex;
		justify-content: center;

		background-color: hsla(var(--secondary-hsl), 90%);
		border-radius: 50px;

	}

	.clicked {
		background: hsla(var(--accent-hsl), 40%);
	}
</style>