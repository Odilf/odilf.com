<script lang=ts>
	import Pistol from "./Pistol.svelte"
	import Barbarosa from "./Barbarosa.svelte"
	import Fam from "./FAM.svelte"
	
	import smoothscroll from 'smoothscroll-polyfill';
	smoothscroll.polyfill();

	let peek_delay = 300
	let timeout

	let selected = 0
	let projects = ['Pistol', 'Barbarosa', 'FAM']
	let peaking = null

	let main



	function handleKeydown(e) {
		if (e.key === 'ArrowUp') {
			if (selected !== 0) selected -= 1
			e.preventDefault()
		}
		if (e.key === 'ArrowDown') {
			if (selected !== projects.length - 1) selected += 1
			e.preventDefault()
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<main bind:this={main}>
	<nav>
		{#each projects as project, i}
			<button 
				on:click={() => selected = i} 
				on:click={() => main.scrollIntoView({block: 'center', behavior: 'smooth'})} 
				on:mouseover={() => timeout = setTimeout(() => peaking = i, peek_delay)} 
				on:focus={() => timeout = setTimeout(() => peaking = i, peek_delay)} 
				on:mouseleave={() => {peaking = null; clearTimeout(timeout)}}
				class={selected === i ? 'active' : ''}
			> 
				{project} 
			</button>
		{/each}
	</nav>

	<body>
		
		<Pistol {selected} {peaking} />
		
		<Barbarosa {selected} {peaking} />

		<Fam {selected} {peaking} />

	</body>
</main>

<style>
	main {
		display: flex;
		align-items: center;
		flex-direction: column;

		width: 100%;
		height: 85vh;
	}

	nav {
		z-index: 2;
		position: sticky;
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
	.active {
		background-color: hsla(var(--accent-hsl), 70%);
	}

</style>