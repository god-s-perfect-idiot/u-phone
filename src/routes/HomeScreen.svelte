<script>
// @ts-nocheck

    import Clock from './utils/Clock.svelte';
    import FaBook from 'svelte-icons/fa/FaBook.svelte'
    import MdPhotoAlbum from 'svelte-icons/md/MdPhotoAlbum.svelte'
    import FaQuoteRight from 'svelte-icons/fa/FaQuoteRight.svelte'
    import FaRegLaughSquint from 'svelte-icons/fa/FaRegLaughSquint.svelte'
    import FaSadTear from 'svelte-icons/fa/FaSadTear.svelte'
    import FaJournalWhills from 'svelte-icons/fa/FaJournalWhills.svelte'
    import App from './utils/App.svelte';
    import Journal from './apps/Journal.svelte';
    import Quotes from './apps/Quotes.svelte';
    import Navbar from './utils/Navbar.svelte';
    import Gallery from './apps/Gallery.svelte';
    import Jokes from './apps/Jokes.svelte';
    import Puns from './apps/Puns.svelte';
    import Breakout from './apps/Breakout.svelte';
    let context = "home";

    function changeContext(newContext) {
        context = newContext;
    }
</script>

{#if context == "home"}
    <div class='home'>
        <Clock fontSize='2.6rem'/>
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
{/if}

<style>
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
    }
</style>
