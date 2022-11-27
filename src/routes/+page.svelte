<main>
	<img src="/logo.svg" alt='Logo'>
	<h1> Welcome! 👋 </h1>

	<p>
		I'm Ody, this is my personal website. 
	</p>
		
	<p>
		You can start by checking out my <a href="/projects"> projects</a>.
	</p>

	<p>
		You can also take a look at the <a href='/blog'>blog</a> I apparently now have.
	</p>
</main>

<svelte:head>
	<title> Home </title>
</svelte:head>

<style>
	main { 
		display: grid;
		place-items: center;
		place-content: center;

		height: calc(100% - var(--navbar-height));
		position: relative;
		overflow: hidden;
	}

	a {
		color: var(--accent)
	}

	img {
		position: absolute;
		z-index: -10;
		opacity: 10%;
		height:100%;

		animation: 40s ease 0s infinite rotate;
	}

	@keyframes rotate {
		from {
			transform: rotate(0deg)
		}

		to {
			transform: rotate(360deg);
		}
	}
</style>
