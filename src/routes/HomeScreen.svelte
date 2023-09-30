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
  import { getTheme } from './store/themer';
    
    let context = "home";
    let greeting;

    const greetings = ["Heya, Uno bird!", "Hi, My love", "Uno pool!", "Hi, Bird!", "Smile MF!", "wink* wink*", 
        "Oh! Uno! You're finally here", "OMGG! UNOOOO!", "You, Shergill...", "My Love! MY LOVE!"]
    greeting = greetings[Math.floor(Math.random() * greetings.length)]

    function changeContext(newContext) {
        greeting = greetings[Math.floor(Math.random() * greetings.length)]
        context = newContext;
    }

    // const mainColor = localStorage.getItem('main') || 'mango';
    // const accent = localStorage.getItem('accent') || 'kavi';

    const mainColor = getTheme('main') || 'mango';
    const accent = getTheme('accent') || 'kavi';

    const appList = [
        {
            context: 'quote',
            name: 'A Quote a day',
            color: '#e53935',
            icon: FaQuoteRight,
            app: Quotes,
            customTheme: true
        },
        {
            context: 'gallery',
            name: 'Snaps from the past',
            showTitle: 'you+me',
            color: '#1e88e5',
            icon: MdPhotoAlbum,
            app: Gallery,
            customTheme: true
        },
        {
            context: 'jokes',
            name: 'Have a Laugh',
            color: '#00897b',
            icon: FaRegLaughSquint,
            app: Jokes,
            customTheme: true
        },
        {
            context: 'puns',
            name: 'Tearable Puns',
            color: '#f4511e',
            icon: FaSadTear,
            app: Puns,
            customTheme: true
        },
        {
            context: 'journal',
            name: 'A Penny for your Thoughts',
            showTitle: "Uno's Journal",
            color: '#01579b',
            icon: FaJournalWhills,
            app: Journal,
            customTheme: true
        },
        {
            context: 'stars',
            name: 'Make a Wish',
            color: '#3949ab',
            icon: FaBraille,
            app: Stars,
            customTheme: false,
            theme: {
                text: 'white',
                bg: 'star-bg'
            }
        },
        {
            context: 'dogs',
            name: 'Good Pupper',
            color: '#c2185b',
            icon: FaDog,
            app: Dogs,
            customTheme: false,
            theme: {
                text: 'white',
                bg: 'black-bg'
            }
        },
        {
            context: 'poems',
            name: 'Mightier Pen',
            color: '#006064',
            icon: FaPenFancy,
            app: Poems,
            customTheme: false,
            theme: {
                text: 'white',
                bg: 'black-bg'
            }
        },
        {
            context: 'books',
            name: 'A Good Book',
            color: '#bf360c',
            icon: FaBookReader,
            app: Books,
            customTheme: true
        },
        {
            context: 'eleven',
            name: 'Time to Eleven',
            color: '#00796B',
            icon: MdTimelapse,
            app: Eleven,
            customTheme: false,
            theme: {
                text: 'white',
                bg: 'eleven-bg'
            }
        }, 
        {
            context: 'settings',
            name: 'Settings',
            color: '#2e7d32',
            icon: FaCog,
            app: Settings,
            customTheme: true
        }
    ];

    
</script>

{#if context == "home"}
    <div class="home-container">
        <div class='home'>
            <Clock fontSize='3rem' top="3rem"/>
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
        <div class="app {!app.customTheme ? app.theme.bg : ""}">
            <div class='app-title'>
                <span class={!app.customTheme ? app.theme.text : ""}>{app.showTitle || app.name}</span>
            </div>
            <div class='app-area'>
                <svelte:component this={app.app}/>
            </div>
            <div class='nav {!app.customTheme ? app.theme.text : ""}' on:click={() => changeContext('home')} on:keydown={console.log('idk')}>
                <Navbar/>
            </div>
        </div>
    {/if}
{/each}
<style>
    .app {
        height: 100vh;
        display: flex;
        flex-direction: column;
    }
    .app-title {
        height: 15%;
        /* padding-top: 2rem; */
        font-size: 2.5rem;
        text-transform: lowercase;
        display: flex;
    }
    .app-title > span {
        display: flex;
        align-items: center;
        height: 100%;
        padding-left: 2rem;
        /* padding-top: 2rem; */
    }
    .app-area {
        height: 75%;
    }
    .home-container {
        height: 100%;
        display: flex;
        flex-direction: column;
        margin-left: 2rem;
    }
    .home > div {
        margin-top: 0.5rem;
        display: flex;
    }
    .home span {
        font-size: 1.4rem;
    }
    .nav {
        height: 10%;
        display: flex;
        align-self: center;
        justify-content: center;
    }
    .applist {
        display: flex;
        flex-direction: column;
        margin-top: 2rem;
        margin-bottom: 1rem;
        overflow: scroll;
        height: 28rem;
        width: 90%;
    }
    .applist::-webkit-scrollbar {
        display: none;
    }
</style>
