<script lang="ts">
	import "../styles.css"
</script>

<main>
	<slot />
</main>

<style>
	main {
		max-width: 820px;
		margin-inline: auto;
		padding: 12px;

		height: 100%;
	}
</style>