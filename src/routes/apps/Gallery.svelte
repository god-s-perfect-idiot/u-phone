<script>
// @ts-nocheck

    import Loader from "../utils/Loader.svelte";

    let promise;
    const wait = ms => new Promise(r => setTimeout(r, ms));;
    promise = wait(2000);
    const looper = Array.from(Array(38).keys())
</script>

<div>

</div>
<div class='images'>
    {#await promise}
        <Loader/>
    {:then}
        {#each looper as loop}
            <div class='img'>
                <img src={`./images/${loop+1}.jpg`} alt="alt"/>
            </div>
        {/each}
    {/await}

</div>

<style>
    .img {
        display: flex;
        height: 6rem;
        width: 6rem;
        background-color: rgb(60, 63, 63);
        margin: 0.3rem;
        max-width: 100%;
        max-height: 100%;
        border-radius: 1rem;
    }
    .img > img { 
        width: 100%; /* or any custom size */
        height: 100%; 
        object-fit: cover;
        border-radius: 1rem;
    }
    .images {
        margin-top: 5rem;
        justify-content: center;
        display: flex;
        flex-wrap: wrap;
        height: 45rem;
        overflow-y: scroll;
    }
</style>