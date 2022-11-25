<script lang="ts">
	export let clicked = false
</script>

<button on:click={() => clicked = !clicked} class='btn'>
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor"
	style:transform={clicked ? 'rotate(180deg)' : ''}>
		<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
	</svg>
</button>

<style>
	button {
		height: 3em;
		width: 3em;

		padding: 6px;
		margin: 6px;
	}

	svg {
		transition: 400ms all ease;
	}
</style>
  