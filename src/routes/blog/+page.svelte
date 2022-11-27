<script lang="ts">
    import Entry from "$lib/article/Entry.svelte";
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

	<h1> Other </h1>
	<p class='faint'> These are some other things I've written </p>

	<ul>
		<li>
			<Entry 
				title="Tales of quarantine (Historias de cuarentena, y Don Dani)"
				subtitle="Some stories and writing I did in quarantine, mostly for Spanish class with my beloved teacher, Don Dani"
				link="./blog/cuarentena-y-don-dani"/>
		</li>
	</ul>
</main>

<style>
	ul {
		padding: 0;
		margin-top: 1em;
		margin-bottom: 2em;
	}
</style>