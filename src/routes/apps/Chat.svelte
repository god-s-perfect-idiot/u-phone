<script>
// @ts-nocheck

    import { Configuration, OpenAIApi } from 'openai';
    import Loader from '../utils/Loader.svelte';

    const configuration = new Configuration({
    apiKey: import.meta.env.VITE_APIKEY,
    });
    const openai = new OpenAIApi(configuration);

    let promise;
    let response='Hi..!!';

    const ask = async () => {
        const question = document.getElementById('query').value;
        console.log("aaa",question)
        const res = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: question,
            temperature: 0.7,
            max_tokens: 100,
        });
        response = res.data.choices[0].text
    }

    
</script>

<div class='container'>
    <div class="prompt">
        <input type='text' placeholder="talk to gpt" id='query'/>
        <button on:click={() => promise = ask()}>Ask!</button>
    </div>
    {#await promise}
        <Loader/>
    {:then}
        <div class="response">
            <span>{response}</span>
        </div>
    {/await}
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .prompt {
        margin-top: 15rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .prompt > input {
        background-color: transparent;
        width: 15rem;
        height: 2rem;
        font-size: 1.2rem;
        border: none;
        border-bottom: 1px solid white;
        padding-left: 2rem;
        color: white;
    }
    .prompt > input::placeholder {
        color: white;
    }
    button {
        margin-left: 1rem;
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
    .response {
        margin-top: 3rem;
        width: 20rem;
        height: 15rem;
        background-color: rgb(255, 255, 255, 0.5);
        border-radius: 1rem;
        color: black;
        font-size: 1.1rem;
        padding: 1rem;
        overflow-y: scroll;
    }
</style>