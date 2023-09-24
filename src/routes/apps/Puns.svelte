<script>
    // @ts-nocheck
    import Loader from '../utils/Loader.svelte';
    import { getPun } from '../store/puns';
    import {onMount} from 'svelte';
    let quote;

    // const getQuote = async () => {
    //     const res = await fetch('https://v2.jokeapi.dev/joke/Pun?type=single');
    //     const Quote = await res.json();
    //     quote = Quote.joke;
    // }

    // onMount(() => {
    //     promise = getQuote();
    // })
    quote = getPun();
</script>


<div class="quote">
    {quote}
</div>

<style>
    .quote {
        color: white;
        font-size: 1.3rem;
        margin-top: 10rem;
        margin-left: 2rem;
        margin-right: 2rem;
    }
</style>