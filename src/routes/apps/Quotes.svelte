<script>
// @ts-nocheck
    import Loader from '../utils/Loader.svelte';
    import {onMount} from 'svelte';
    let quote;
    let author;
    let promise;

    const getQuote = async () => {
        const res = await fetch('https://api.quotable.io/random', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const Quote = await res.json();
        quote = Quote.content;
        author = Quote.author;
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
    <div class="author">
        -{author}
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
    .author {     
        color: white;
        font-size: 1.3rem;
        margin-top: 2rem;
        margin-left: 2rem;
        margin-right: 2rem;
    }
</style>