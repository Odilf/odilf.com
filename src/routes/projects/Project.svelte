<script lang="ts">
    import Chevron from "$lib/Chevron.svelte";
	import type { Project } from "./projects"

	import { slide } from "svelte/transition";
    import { dateOptions } from "$lib/globals";

	export let project: Project

	$: ({
		name,
		description,
		repo,
		website,
		startDate,
		status,
	} = project)

	function statusText() {
		switch (status) {
			case 'active': return "Project is currently active";
			case 'finished': return "Project is considered finished"
			case 'frozen': return "Project is currently frozen (not finished but not actively worked on)"
		}
	}

	let showDetails = false;
</script>

<div class='wrapper'>
	<div class='main'>
		<h2 style:color={status === 'finished' ? 'var(--accent)' : 'var(--primary)'}> {name} </h2>

		<p> {description} </p>

		<Chevron bind:clicked={showDetails}/>
	</div>

	{#if showDetails}
		<div class='details' transition:slide|local={{}}>
			<div class='links'>
				{#if repo}
				<a href={repo} target="_blank" rel="noreferrer"> GitHub </a>
				{/if}
				
				{#if website}
				<a href={website} target="_blank" rel="noreferrer"> Website </a>
				{/if}
			</div>
			
			<p class='faint'>
				Started on {startDate.toLocaleDateString(undefined, dateOptions)}
			</p>
			
			<p class='faint'>
				{statusText()}
			</p>
		</div>
	{/if}
</div>


<style>
	.wrapper {
		display: flex;
		flex-direction: column;
	}

	.main {
		text-align: center;
	}
	
	h2 {
		font-weight: 900;
		font-size: 2em;
		color: var(--accent)
	}

	.links {
		display: flex;
		justify-content: space-evenly;
		margin-top: 0.5em;
	}

	.details {
		text-align: center;
	}

	p {
		font-weight: 200;
		max-width: 34ch;
	}

	a {
		display: block;
		text-decoration: none;
		padding: 0.8em;
		border-radius: var(--rounded);
		transition: 200ms all ease;
	}

	a:hover {
		background-color: var(--neutral-hover);
	}
</style>