<script lang="ts">
    import Article from "$lib/article/Article.svelte";
    import { dateOptions } from "$lib/globals";
    import { onMount } from "svelte";
    import type { PageData } from "./$types";

	export let data: PageData

	onMount(() => {
		window.scrollTo(0, 0)
	})
</script>

<Article
	title={data.titulo}
	date={data.fecha}
	subtitle={data.asignatura ? `Para ${data.asignatura}` : ""}
	dateFormatter={date => date.toLocaleDateString("es-es", dateOptions)}
	content={data.content}
/>