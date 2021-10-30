<script>
import ArmLeft from "./ArmLeft.svelte";
import ArmRight from "./ArmRight.svelte";
import Head from "./Head.svelte";
import Pants from "./Pants.svelte";
import Shirt from "./Shirt.svelte";

</script>
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
width="794.000000pt" height="1476.000000pt" viewBox="0 0 794.000000 1476.000000"
>
	<ArmLeft/>
	<ArmRight/>
	<Pants/>
	<Head/>
	<Shirt/>
</svg>

<style>
	svg {
		position: absolute;
		/* bottom: 15vh; */
		/* top: 0; */

		z-index: 0;
		height: 80vh;
		width: 100%;
		opacity: 40%;

		/* transform: translate(0, -10%); */
	}
</style>