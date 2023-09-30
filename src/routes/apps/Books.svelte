<script>
    // @ts-nocheck
    import Loader from '../utils/Loader.svelte';
    import IoIosSearch from 'svelte-icons/io/IoIosSearch.svelte'
    let promise;
    $: books = [];

    const searchBook = async () => {
        const kw = document.getElementById('src-inp').value;
        const res = await fetch(`https://openlibrary.org/search.json?q=${kw}`)
        books = (await res.json()).docs;
        console.log(books)
    }

</script>
    
<div class="main-page">
    <div class="search">
        <input type="text" id="src-inp" placeholder="search for a book, Uno"/>
        <div class="src-btn" on:click={() => promise = searchBook()} on:keydown={console.log('idk')}>
            <IoIosSearch></IoIosSearch>
        </div>
    </div>

    {#await promise}
        <Loader/>
    {:then}
        <div class="results">
            {#if books.length}
                {#each books as book}
                    <div class='book-meta'>
                        <span class='title'>{book.title}</span>
                        <span class='author'>{book.author_name ? book.author_name[0] : "Unknown Author"}</span>
                        <span class='year'>{book.publish_year ? book.publish_year[0] : "Unknown Year"}</span>
                    </div>
                {/each}
            {:else}
                <div class="no-book">
                    search for a book
                </div>
            {/if}
        </div>
    {/await}
</div>

<style>
    .no-book {
        font-size: 1.3rem;
        display: flex;
        height: 100%;
    }
    .results span {
        height: 1.5rem;
        overflow: hidden;
    }
    .results > .book-meta {
        display: flex;
        flex-direction: column;
    }
    .book-meta > .title {
        font-size: 1.2rem;
    }
    .results {
        margin-top: 2rem;
        gap: 1rem;
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow-y: scroll;
    }
    .main-page {
        display: flex;
        flex-direction: column;
        margin-left: 2rem;
        margin-right: 2rem;
        height: 100%;
    }
    .src-btn {
        width: 2rem;
        height: 2rem;
        border: 2px solid black;
        margin-left: 1rem;
    }
    .search {
        display: flex;
    }
    .search input {
        width:70%;
        height: 2rem;
        background: none;
        border: none;
        font-size: 1rem;
        color: black;
        border: 2px solid black;
        padding-left: 2rem;
    }
    .search input::placeholder {
        color: black;
    }
</style>