<script lang="ts">
	export let title: string
	export let subtitle: string | undefined

	export let link: string | undefined
</script>

<a href={link}>
	<h2> {title} </h2>
	<p class='faint'> {subtitle} </p>
</a>

<style>
	h2 {
		font-weight: 200;
	}
	
	a {
		display: block;
		padding: 0.5em 0em;
		border-radius: var(--rounded);

		transition: 200ms all ease;
		padding-inline-end: 1em;
	}

	a:hover {
		text-decoration: none;
		padding-inline-start: 1em;
		background-color: var(--neutral-hover);
	}

	a:hover > h2 {
		text-decoration: underline;
	}
</style>