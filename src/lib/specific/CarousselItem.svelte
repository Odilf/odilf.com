<script lang="ts">
	export let selected = 0
	export let index: number
	export let peaking = 0

	function getClass(selected: number, selection: number, peaking = null): string {
		let cssClass = ''

		if (selection == selected) {
			cssClass = 'active'
			if (peaking !== null && peaking !== index) {
				cssClass += ' peaked'
				if (peaking < selected) cssClass += ' before'
				if (peaking > selected) cssClass += ' after'
			}
			return cssClass
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
		--distance: 90%;
		--peak-factor: 0.95;
		--peak-delay: 0.3s;
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
		/* justify-content: center; */
		align-items: center;
	}

	.active {
		opacity: 100%;
	}

	.hidden {
		/* z-index: 1; */
		transform: translate(-2em, var(--real-distance)) rotate(5deg);
		opacity: 0%;
	}

	.before {
		--real-distance: calc(var(--distance) * -1);
	}

	.after {
		--real-distance: var(--distance)
	}

	.peaking {
		/* transition: all 0.5s ease var(--peak-delay); */
		transform: translate(0, calc(var(--real-distance) * var(--peak-factor)));
		opacity: 30%;
	}

	.peaked {
		/* transition: all 0.5s ease var(--peak-delay); */
		opacity: 90%;
		/* margin: var(--real-distance); */
		transform: translate(0, calc(calc(var(--peak-factor) - 1) * var(--real-distance)));
	}
</style>