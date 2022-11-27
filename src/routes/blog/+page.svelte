<script lang="ts">
    import BlogEntry from "$lib/article/Entry.svelte";
    import { dateOptions } from "$lib/globals";
    import type { PageData } from "./$types";

	export let data: PageData
</script>

<svelte:head>
	<title> Blog </title>
</svelte:head>

<main class='content'>
	<h1> Blog </h1>

	<p class='faint'> I guess I have a blog now </p>

	<ul>
		{#each data.posts as post}
			<li>
				<BlogEntry 
					title={post.title} 
					subtitle={new Date(post.date).toLocaleDateString(undefined, dateOptions)}
					link="blog/{post.path}"/>
			</li>
		{/each}
	</ul>
</main>

<style>
	ul {
		padding: 0;
		margin-top: 1em;
	}
</style>