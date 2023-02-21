<script>
// @ts-nocheck
    import Loader from '../utils/Loader.svelte';
    import {onMount} from 'svelte';
    let quote;
    let promise;

    const getQuote = async () => {
        const res = await fetch('https://v2.jokeapi.dev/joke/Pun?type=single');
        const Quote = await res.json();
        quote = Quote.joke;
    }

    onMount(() => {
        promise = getQuote();
    })
</script>

{#await promise}
    <Loader/>
{:then} 
    <div class="quote">
        {quote}
    </div>
{/await}

<style>
    .quote {
        color: white;
        font-size: 1.3rem;
        margin-top: 10rem;
        margin-left: 2rem;
        margin-right: 2rem;
    }
</style>