<script>
// @ts-nocheck

    import moment from 'moment';
    const timestamp = `${moment().format('HH:mm A - MMM DD, YYYY')}`
    let view = 'all'

    $: journals = {...localStorage}

    let title;
    let content;
    let ts;

    const readJournal = (key) => {
        document.querySelector('.lister').style.display = 'none'
        document.querySelector('.reader').style.display = 'flex'
        const entry = JSON.parse(localStorage.getItem(key));
        title = entry.title;
        content = entry.body;
        ts = entry.timestamp;
    }

    const closeJournal = () => {
        document.querySelector('.lister').style.display = 'block'
        document.querySelector('.reader').style.display = 'none'
    }

    const switchView = () => {
        if(view === 'all') {
            document.querySelector('.all-js').style.display = 'none'
            document.querySelector('.j-entry').style.display = 'flex'
            view = 'new'
        }
        else {
            document.querySelector('.all-js').style.display = 'flex'
            document.querySelector('.j-entry').style.display = 'none'
            view = 'all'
            localStorage.setItem(new Date(), JSON.stringify({
                timestamp: timestamp,
                title: document.getElementById('title').value,
                body: document.getElementById('entry').value,
            }))
            document.getElementById('title').value = "";
            document.getElementById('entry').value = "";
            journals = {...localStorage}
        }
    }
</script>

<div class="all-js">
    <div class="lister">
        <div class="new"><button on:click={() => switchView()}>New Journal</button></div>
        <div class="j-list">
            {#each Object.keys(journals) as key}
                <div class="entry" on:click={() => readJournal(key)} on:keydown={console.log('idk')}>
                    <div class="title">
                        {JSON.parse(localStorage.getItem(key)).title}
                    </div>
                    <div class="ts">{JSON.parse(localStorage.getItem(key)).timestamp}</div>
                </div>
            {/each}
        </div>
    </div>
    <div class="reader">
        <div class="close" on:click={() => closeJournal()} on:keydown={console.log('idk')}>x</div>
        <div class="r-title">{title}</div>
        <div class="r-ts">{ts}</div>
        <div class="r-content">{content}</div>
    </div>
</div>
<div class='j-entry'>
    <div class="timestamp">{timestamp}</div>
    <input type='text' placeholder="Title" id="title">
    <textarea id="entry">

    </textarea>
    <div class="save"><button on:click={() => switchView()}>Save</button></div>
</div>

<style>
    .close {
        margin-top: 0.1rem;
        margin-right: 0.1rem;
        display: flex;
        align-self: flex-end;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 1.3rem;
        font-weight: bolder;
        border-radius: 0.5rem;
        width: 2rem;
        height: 2rem;
        background-color: rgb(0, 0, 0, 0.5);
    }
    .all-js {
        display: flex;
        justify-content: center;
        margin-top: 1rem;
    }
    .j-list {
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        height: 45rem;
    }
    .reader {
        display: none;
        flex-direction: column;
        width: 20rem;
        height: 45rem;
        background-color: rgb(255, 255, 255, 0.5);
        border-radius: 0.6rem;
    }
    .r-title {
        margin-top: 1rem;
        margin-left: 1rem;
        font-size: 1.2rem;
        font-weight: bold;
    }
    .r-ts {
        margin-left: 1rem;
        font-size: 1rem;
    }
    .r-content {
        margin-top: 1rem;
        margin-left: 1rem;
        margin-right: 1rem;
        font-size: 1.2rem;
        font-weight: normal;
        overflow: scroll;
        word-wrap: break-word;
    }
    .entry {
        margin-top: 1rem;
        width: 20rem;
        background-color: rgba(255, 255, 255, 0.5);
        padding: 1rem;
        border-radius: 0.6rem;
    }
    .title {
        font-size: 1.2rem;
        font-weight: bold;
    }
    .new {
        margin-top: 1rem;
    }
    .j-entry input {
        background: transparent;
        width: 20rem;
        margin-top: 2rem;
        border: none;
        border-bottom: 1px solid white;
        font-size: 1.2rem;
        color: white;
        height: 2rem;
    }
    .j-entry input::placeholder {
        color: white
    }
    .j-entry textarea {
        width: 20rem;
        height: 35rem;
        margin-top: 2rem;
        border-radius: 0.3rem;
        background: transparent;
        border: 1px solid white;
        font-size: 1.2rem;
        color: white;
    }
    .j-entry {
        display: none;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .j-entry > .timestamp {
        align-self: end;
    }
    .j-entry > .save {
        align-self: end;
    }
    .timestamp {
        font-size: 1.2rem;
        color: black;
        font-weight: bold;
        text-align: right;
    }
    .save {
        margin-top: 2rem;
    }
    button {
        transition: all .5s ease;
        color: #fff;
        border: 1px solid white;
        text-align: center;
        line-height: 1;
        font-size: 17px;
        background-color : transparent;
        padding: 10px;
        outline: none;
        border-radius: 4px;
    }
    button:hover {
        color: #001F3F;
        background-color: #fff;
    }
</style>