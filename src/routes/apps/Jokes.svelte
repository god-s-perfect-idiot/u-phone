<script>
// @ts-nocheck
    import Loader from '../utils/Loader.svelte';
    import {onMount} from 'svelte';
    import {getJoke} from '../store/jokes';
    let quote;
    let promise;

    // const getQuote = async () => {
    //     const res = await fetch('https://icanhazdadjoke.com/', {
    //         headers: {
    //             Accept: "application/json"
    //         }
    //     });
    //     const Quote = await res.json();
    //     quote = Quote.joke;
    // }

    // onMount(() => {
    //     promise = getQuote();
    // })
    quote = getJoke();
</script>

<!-- {#await promise}
    <Loader/> -->
<!-- {:then}  -->
<div class="quote">
    {quote}
</div>
<!-- {/await} -->

<style>
    .quote {
        font-size: 1.3rem;
        margin-top: 10rem;
        margin-left: 2rem;
        margin-right: 2rem;
    }
</style>