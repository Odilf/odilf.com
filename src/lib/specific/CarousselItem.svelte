<script lang="ts">
	export let selected = 0
	export let index
	export let peaking = 0

	function getClass(selected: number, selection: number, peaking = null): string {
		let cssClass = ''

		// peaking = null;

		if (selection == selected) {
			return 'active'
		} else {
			if (selection < selected) cssClass = 'before'
			if (selection > selected) cssClass = 'after'
			cssClass += ' hidden'
		}
		

		if (peaking === selection) {
			cssClass += ' peaking'
		}

		return cssClass
	}
</script>

<body class={getClass(selected, index, peaking)} >
	<slot/>
</body>

<style>
	:root {
		--distance: 100%;
		--peak-factor: 0.95;
	}

	body {
		position: absolute;
		box-sizing: border-box;
		width: 100%;
		height: 100%;

		overflow: scroll;
		background-color: var(--secondary); 
		padding: 3em;
		border-radius: 1em;

		box-shadow: 0 0 10px black;

		transition: all 0.5s ease;
		transition: z-index 0.1s none 0.5s;


		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.active {
		opacity: 100%;
	}

	.hidden {
		/* z-index: 1; */
		transform: translate(0, var(--real-distance));
		opacity: 0%;
	}

	.before {
		--real-distance: calc(var(--distance) * -1);
	}

	.after {
		--real-distance: var(--distance)
	}

	.peaking {
		transform: translate(0, calc(var(--real-distance) * var(--peak-factor)));
		opacity: 100%;
	}
</style>