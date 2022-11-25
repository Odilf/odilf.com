<script lang="ts">
    import { dateOptions } from "$lib/globals";
    import type { PageData } from "./$types";

	export let data: PageData
</script>

<main class='content'>
	<h1> Blog </h1>

	<ul>
		{#each data.posts as post}
			<li>
				<a href="blog/{post.path}">
					<h2> {post.title} </h2>
					<p class='faint'> {new Date(post.date).toLocaleDateString(undefined, dateOptions)} </p>
				</a>
			</li>
		{/each}
	</ul>
</main>

<style>
	ul {
		padding: 0;
	}

	li {
		transition: 200ms all ease;
		margin: 0.5em 0;
	}
	
	li:hover {
		background-color: var(--neutral-hover);
	}

	a {
		display: block;
		padding: 0.5em 1em;
	}

	a:hover {
		text-decoration: none;
	}

	a:hover > h2 {
		text-decoration: underline;
	}
</style>