<script>
// @ts-nocheck

    import FaBook from 'svelte-icons/fa/FaBook.svelte'
    import MdPhotoAlbum from 'svelte-icons/md/MdPhotoAlbum.svelte'
    import FaQuoteRight from 'svelte-icons/fa/FaQuoteRight.svelte'
    import FaRegLaughSquint from 'svelte-icons/fa/FaRegLaughSquint.svelte'
    import FaSadTear from 'svelte-icons/fa/FaSadTear.svelte'
    import FaJournalWhills from 'svelte-icons/fa/FaJournalWhills.svelte'
    import FaBraille from 'svelte-icons/fa/FaBraille.svelte'
    import FaDog from 'svelte-icons/fa/FaDog.svelte'
    import FaPenFancy from 'svelte-icons/fa/FaPenFancy.svelte'
    import FaBookReader from 'svelte-icons/fa/FaBookReader.svelte'

    import Clock from './utils/Clock.svelte';
    import App from './utils/App.svelte';

    import Journal from './apps/Journal.svelte';
    import Quotes from './apps/Quotes.svelte';
    import Navbar from './utils/Navbar.svelte';
    import Gallery from './apps/Gallery.svelte';
    import Jokes from './apps/Jokes.svelte';
    import Puns from './apps/Puns.svelte';
    import Breakout from './apps/Breakout.svelte';
    import Stars from './apps/Stars.svelte';
    import Dogs from './apps/Dogs.svelte';
    import Poems from './apps/Poems.svelte';
    import Books from './apps/Books.svelte';
    let context = "home";
    let greeting;

    const greetings = ["Heya, Uno bird!", "Hi, My love", "Uno pool!", "Hi, Bird!", "Smile MF!", "wink* wink*", 
        "Oh! Uno! You're finally here", "OMGG! UNOOOO!", "You, Shergill...", "My Love! MY LOVE!"]
    greeting = greetings[Math.floor(Math.random() * greetings.length)]

    function changeContext(newContext) {
        greeting = greetings[Math.floor(Math.random() * greetings.length)]
        context = newContext;
    }
</script>

{#if context == "home"}
    <div class='home'>
        <Clock fontSize='2.6rem'/>
        <div>
            <span>{greeting}</span>
        </div>
    </div>

    <div class="applist">
        <div on:click={() => changeContext('quote')} on:keydown={console.log('idk')}>
            <App appName="A Quote a day" color="#e53935">
                <FaQuoteRight/>
            </App>
        </div>
        <div on:click={() => changeContext('gallery')} on:keydown={console.log('idk')}>
            <App appName="Snaps from the past" color="#1e88e5">
                <MdPhotoAlbum/>
            </App>
        </div>
        <div on:click={() => changeContext('jokes')} on:keydown={console.log('idk')}>
            <App appName="Have a Laugh" color="#00897b">
                <FaRegLaughSquint/>
            </App>
        </div>
        <div on:click={() => changeContext('puns')} on:keydown={console.log('idk')}>
            <App appName="Tearable Puns" color="#f4511e">
                <FaSadTear/>
            </App>
        </div>
        <div on:click={() => changeContext('journal')} on:keydown={console.log('idk')}>
            <App appName="A Penny for your Thoughts" color="#01579b">
                <FaJournalWhills/>
            </App>
        </div>
        <div on:click={() => changeContext('stars')} on:keydown={console.log('idk')}>
            <App appName="Make a Wish" color="#3949ab">
                <FaBraille/>
            </App>
        </div>
        <div on:click={() => changeContext('dogs')} on:keydown={console.log('idk')}>
            <App appName="Good Pupper" color="#c2185b">
                <FaDog/>
            </App>
        </div>
        <div on:click={() => changeContext('poems')} on:keydown={console.log('idk')}>
            <App appName="Mightier Pen" color="#006064">
                <FaPenFancy/>
            </App>
        </div>
        <div on:click={() => changeContext('books')} on:keydown={console.log('idk')}>
            <App appName="A Good Book" color="#bf360c">
                <FaBookReader/>
            </App>
        </div>
    </div>
{:else if context == "quote"}
    <div class='app-area'>
        <Quotes/>
    </div>
    <div class='nav' on:click={() => changeContext('home')} on:keydown={console.log('idk')}>
        <Navbar/>
    </div>
{:else if context == "gallery"}
    <div class='app-area'>
        <Gallery/>
    </div>
    <div class='nav' on:click={() => changeContext('home')} on:keydown={console.log('idk')}>
        <Navbar/>
    </div>
{:else if context == "jokes"}
    <div class='app-area'>
        <Jokes/>
    </div>
    <div class='nav' on:click={() => changeContext('home')} on:keydown={console.log('idk')}>
        <Navbar/>
    </div>
{:else if context == "puns"}
    <div class='app-area'>
        <Puns/>
    </div>
    <div class='nav' on:click={() => changeContext('home')} on:keydown={console.log('idk')}>
        <Navbar/>
    </div>
{:else if context == "journal"}
    <div class='app-area'>
        <Journal/>
    </div>
    <div class='nav' on:click={() => changeContext('home')} on:keydown={console.log('idk')}>
        <Navbar/>
    </div>
{:else if context == "stars"}
    <div class='app-area'>
        <Stars/>
    </div>
    <div class='nav' on:click={() => changeContext('home')} on:keydown={console.log('idk')}>
        <Navbar/>
    </div>
{:else if context == "dogs"}
    <div class='app-area'>
        <Dogs/>
    </div>
    <div class='nav' on:click={() => changeContext('home')} on:keydown={console.log('idk')}>
        <Navbar/>
    </div>
{:else if context == "poems"}
    <div class='app-area'>
        <Poems/>
    </div>
    <div class='nav' on:click={() => changeContext('home')} on:keydown={console.log('idk')}>
        <Navbar/>
    </div>
{:else if context == "books"}
    <div class='app-area'>
        <Books/>
    </div>
    <div class='nav' on:click={() => changeContext('home')} on:keydown={console.log('idk')}>
        <Navbar/>
    </div>
{/if}

<style>
    .home > div {
        margin-top: 1rem;
        display: flex;
        justify-content: center;
    }
    .home span {
        color: white;
        font-size: 1.2rem;
        font-weight: bold;
    }
    .nav {
        position: fixed;
        bottom: 0;
        display: flex;
        align-self: center;
        margin-bottom: 1.5rem;
    }
    .applist {
        display: flex;
        flex-direction: column;
        height: 31rem;
        background: rgba(255, 255, 255, 0.4);
        margin-top: 6rem;
        border-radius: 1.2rem;
        overflow: scroll;
    }
    .applist::-webkit-scrollbar {
        display: none;
    }
</style>
