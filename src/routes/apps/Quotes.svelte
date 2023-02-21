<script>
// @ts-nocheck
    import Loader from '../utils/Loader.svelte';
    import {onMount} from 'svelte';
    let quote;
    let author;
    let promise;

    const getQuote = async () => {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
            headers: {
                'X-Api-Key': 'h2my79uJd/fy85jowvnT/A==pWIKhp3kGl79hCx2'
            }
        });
        const Quote = await res.json();
        quote = Quote[0].quote;
        author = Quote[0].author;
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