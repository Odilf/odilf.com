<script lang=ts>
	export let width = 10;
</script>

<svg viewBox='0 0 {2*width} 100'>
	<line x1={width} y1=0 x2={width} y2=100 fill='white' style={"stroke-width:" + 2*width}/>
</svg>

<style>
	line {
		stroke: whitesmoke;
		/* stroke-width: {width}; */
	}
</style>