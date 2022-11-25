<script lang="ts">
	import "../styles.css"
    import Nav from "./Nav.svelte";
</script>

<Nav/>
<div>
	<slot />
</div>

<style>
	div {
		min-height: calc(100% - 56px);
	}
</style>