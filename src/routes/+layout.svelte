<script lang="ts">
    import { afterNavigate } from "$app/navigation";
	import "../styles.css"
    import Nav from "./Nav.svelte";

	afterNavigate(() => {
		document.body.scrollTo(0, 0)
	})
</script>

<Nav/>
<slot />