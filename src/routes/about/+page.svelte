<script lang="ts">
    import Outline from '$lib/article/Outline.svelte';
	import About from './about.md'

	let articleElement: HTMLElement
</script>

<div class='wrapper'>
	<div/>

	<main class='content'>

		<div>
			<h1> About me </h1>	
			<section bind:this={articleElement}>
				<About />
			</section>
		</div>
	</main>

	<Outline {articleElement} outlineDepth={2}/>
</div>


<style>
	.wrapper {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
	}
</style>