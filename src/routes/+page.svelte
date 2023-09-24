<script>
// @ts-nocheck

	import HomeScreen from './HomeScreen.svelte';
    import Lockscreen from './Lockscreen.svelte';

	const passMsg = (event) => {
		if(event.detail.text === 'passed!') {
			document.querySelector('.lock').style.display = 'none';
			document.querySelector('.home').style.display = 'block';
		}
	}

</script>

<svelte:head>
	<title>Uno Phone</title>
	<meta name="description" content="Uno Phone" />
</svelte:head>

<div class="home">
	<HomeScreen/>
</div>
<div class="lock">
	<Lockscreen on:message={passMsg}/>
</div>

<style>
	.home {
		display: none;
	}
	.lock {
		height: 100%;
	}
</style>
