<script>
// @ts-nocheck

	import HomeScreen from './HomeScreen.svelte';
    import Lockscreen from './Lockscreen.svelte';
	import { onMount } from 'svelte';
	import { initTheme } from './store/themer';
  import Toast from './fragments/ Toast.svelte';

	const passMsg = (event) => {
		if(event.detail.text === 'passed!') {
			document.querySelector('.lock').style.display = 'none';
			document.querySelector('.home').style.display = 'block';
		}
	}

	onMount(() => {
		initTheme();
	});

</script>

<svelte:head>
	<title>Uno Phone</title>
	<meta name="description" content="Uno Phone" />
</svelte:head>
  
<Toast/>
<div class="home">
	<HomeScreen/>
</div>
<div class="lock black">
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
