<script lang="ts">
    import Article from "$lib/article/Article.svelte";
    import type { PageData } from "./$types";

	export let data: PageData
</script>

<svelte:head>
	<title> Blog - {data.title} </title>
</svelte:head>

<Article 
	title={data.title}
	content={data.content}
	date={data.date}
	outlineDepth={data.outlineDepth}
/>