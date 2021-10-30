<script lang=ts>
	import Spacer from "../Spacer.svelte";

	export let value = 0;
	export let scroll: number;
	
	export let element
	export let objects

	$: console.log( $$slots );

	// $: console.log(element && element.scrollHeight);
	$: console.log(value)

	$: value = Math.floor(3 * scroll / (element && element.scrollHeight)) + 1
	
</script>

<main>
	<button on:click={() => objects[0].scrollIntoView()} class={value == 1 ? "clicked" : ""}> Pistol </button>
	<Spacer/>
	<button on:click={() => objects[1].scrollIntoView()} class={value == 2 ? "clicked" : ""}> Barbarosa </button>
	<Spacer/>
	<button on:click={() => objects[2].scrollIntoView()} class={value == 3 ? "clicked" : ""}> FAM </button>
</main>

<slot this={2}/>

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