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
    import FaCog from 'svelte-icons/fa/FaCog.svelte'
    import MdChatBubble from 'svelte-icons/md/MdChatBubble.svelte'
    import MdTimelapse from 'svelte-icons/md/MdTimelapse.svelte'

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
    import Chat from './apps/Chat.svelte';
    import Eleven from './apps/Eleven.svelte';
    import Settings from './apps/Settings.svelte';
    
    let context = "home";
    let greeting;

    const greetings = ["Heya, Uno bird!", "Hi, My love", "Uno pool!", "Hi, Bird!", "Smile MF!", "wink* wink*", 
        "Oh! Uno! You're finally here", "OMGG! UNOOOO!", "You, Shergill...", "My Love! MY LOVE!"]
    greeting = greetings[Math.floor(Math.random() * greetings.length)]

    function changeContext(newContext) {
        greeting = greetings[Math.floor(Math.random() * greetings.length)]
        context = newContext;
    }

    const appList = [
        {
            context: 'quote',
            name: 'A Quote a day',
            color: '#e53935',
            icon: FaQuoteRight,
            app: Quotes
        },
        {
            context: 'gallery',
            name: 'Snaps from the past',
            color: '#1e88e5',
            icon: MdPhotoAlbum,
            app: Gallery
        },
        {
            context: 'jokes',
            name: 'Have a Laugh',
            color: '#00897b',
            icon: FaRegLaughSquint,
            app: Jokes
        },
        {
            context: 'puns',
            name: 'Tearable Puns',
            color: '#f4511e',
            icon: FaSadTear,
            app: Puns
        },
        {
            context: 'journal',
            name: 'A Penny for your Thoughts',
            color: '#01579b',
            icon: FaJournalWhills,
            app: Journal
        },
        {
            context: 'stars',
            name: 'Make a Wish',
            color: '#3949ab',
            icon: FaBraille,
            app: Stars
        },
        {
            context: 'dogs',
            name: 'Good Pupper',
            color: '#c2185b',
            icon: FaDog,
            app: Dogs
        },
        {
            context: 'poems',
            name: 'Mightier Pen',
            color: '#006064',
            icon: FaPenFancy,
            app: Poems
        },
        {
            context: 'books',
            name: 'A Good Book',
            color: '#bf360c',
            icon: FaBookReader,
            app: Books
        },
        // {
        //     context: 'chat',
        //     name: 'Chat with GPT',
        //     color: '#283593',
        //     icon: MdChatBubble,
        //     app: Chat
        // },
        {
            context: 'eleven',
            name: 'Time to Eleven',
            color: '#00796B',
            icon: MdTimelapse,
            app: Eleven
        }, 
        // {
        //     context: 'settings',
        //     name: 'Settings',
        //     color: '#2e7d32',
        //     icon: FaCog,
        //     app: Settings
        // }
    ]
    
</script>

{#if context == "home"}
    <div class="home-container">
        <div class='home'>
            <Clock fontSize='2.6rem' top="3rem"/>
            <div>
                <span>{greeting}</span>
            </div>
        </div>
    
        <div class="applist">
            {#each appList as app}
                <div on:click={() => changeContext(app.context)} on:keydown={console.log('idk')}>
                    <App appName={app.name} color={app.color}>
                        <svelte:component this={app.icon}/>
                    </App>
                </div>
            {/each}
        </div>
    </div>
{/if}
{#each appList as app}
    {#if context == app.context}
        <div class='app-area'>
            <svelte:component this={app.app}/>
        </div>
        <div class='nav' on:click={() => changeContext('home')} on:keydown={console.log('idk')}>
            <Navbar/>
        </div>
    {/if}
{/each}
<style>
    .home-container {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
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
        background: rgba(255, 255, 255, 0.4);
        margin-top: 2rem;
        margin-bottom: 1rem;
        border-radius: 1.2rem;
        overflow: scroll;
        height: 30rem;
        width: 90%;
    }
    .applist::-webkit-scrollbar {
        display: none;
    }
</style>
