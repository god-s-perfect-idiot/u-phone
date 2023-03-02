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
        <input type="text" id="src-inp" placeholder="Search for a book, Uno"/>
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
                    Search for a book
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
        justify-content: center;
        align-items: center;
        font-weight: bold;
        color: white;
    }
    .results span {
        margin-left: 2rem;
        height: 1.5rem;
        overflow: hidden;
    }
    .results .title {
        margin-top: 1rem;
    }
    .results .year {
        margin-bottom: 1rem;
    }
    .results > .book-meta {
        display: flex;
        width: 20rem;
        height: 8rem;
        background-color: rgb(255, 255, 255, 0.5);
        border-radius: 0.7rem;
        margin-top: 1rem;
        flex-direction: column;
    }
    .results {
        margin-top: 2rem;
        display: flex;
        align-items: center;
        flex-direction: column;
        height: 45rem;
        overflow-y: scroll;
    }
    .main-page {
        display: flex;
        flex-direction: column;
    }
    .src-btn {
        width: 2rem;
        height: 2rem;
        border: 1px solid black;
        border-radius: 0.4rem;
        margin-left: 2rem;
    }
    .search {
        display: flex;
        justify-content: center;
        margin-top: 2rem;
    }
    .search input {
        width: 15rem;
        height: 2rem;
        background: none;
        border: none;
        font-size: 1rem;
        color: black;
        border-bottom: 1px solid black;
    }
    .search input::placeholder {
        color: black;
    }
</style>