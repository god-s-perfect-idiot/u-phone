<script>
// @ts-nocheck
    import Loader from '../utils/Loader.svelte';
    import {onMount} from 'svelte';
    let poem;
    let author;
    let title;
    let promise;

    const getQuote = async () => {
        const res = await fetch('https://poetrydb.org/random');
        const Poem = await res.json();
        poem = Poem[0].lines.join("\n");
        author = Poem[0].author;
        title = Poem[0].title;
    }

    onMount(() => {
        promise = getQuote();
    })
</script>

{#await promise}
    <Loader/>
{:then} 
    <div class="bg">
        <div class="title">
            {title}
        </div>
        <div class="poem">
            {poem}
        </div>
        <div class="author">
            {author}
        </div>
    </div>
{/await}

<style>
    .bg {
        /* position: absolute; */
        background-color: black;
        width: 100vw;
        height: 100%;
        top:0;
        left: 0;
    }
    .title {     
        color: white;
        font-size: 1.3rem;
        margin-left: 2rem;
        margin-right: 2rem;
    }
    .poem {
        color: white;
        font-size: 1.1rem;
        margin-top: 2rem;
        margin-left: 2rem;
        margin-right: 2rem;
        display: flex;
        overflow: scroll;
        height: 70%;
    }
    .author {     
        color: white;
        font-size: 1.3rem;
        margin-top: 2rem;
        margin-left: 2rem;
        margin-right: 2rem;
        margin-bottom: 5rem;
    }
</style>