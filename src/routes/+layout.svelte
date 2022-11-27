<script lang="ts">
    import { onMount } from "svelte";
	import "../styles.css"
    import Nav from "./Nav.svelte";

	onMount(() => {
		setTimeout(() => {
			window.scrollTo(0, 0)
			console.log('huh');
		}, 0)
	})
</script>

<Nav/>
<slot />