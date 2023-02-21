<script>
// @ts-nocheck

    import Clock from "./utils/Clock.svelte";
    import {createEventDispatcher} from 'svelte';
    const dispatch = createEventDispatcher();
    let clicker = 0;

    const passCheck = () => {
        clicker++;
        if(document.querySelector('.pb').value == "imawesome" || document.querySelector('.pb').value == "11229899") {
            dispatch('message', {
                text: 'passed!'
            });
        } else {
            if(clicker > 5) document.querySelector('.error').textContent = "stop clicking me, dammit!"
            if(clicker > 10) document.querySelector('.error').textContent = "Uno I swear to god!"
            if(clicker > 15) document.querySelector('.error').textContent = "INAYAT SHERGILL!!!!!!"
            if(clicker > 20) document.querySelector('.error').textContent = "🏳️"
            if(clicker > 25) 
            dispatch('message', {
                text: 'passed!'
            });
            document.querySelector('.error').style.display = "block"
        }
    }

</script>

<div class='lock'>
    <Clock fontSize='3rem'/>

    <div class='password'>
        <span>
            Uno, password?
        </span>
        <input class='pb' type="password">
    </div>
    <div class="error">Wrong Password...</div>
    <div class="unlocker" on:click={() => passCheck()} on:keydown={console.log('idk')}></div>
</div>


<style>
    .error {
        display: none;
        color: #ffebee;
        font-size: 1rem;
        margin-top: 1rem;
    }
    .unlocker {
        margin-top: 10rem;
        width: 3rem;
        height: 3rem;
        border-radius: 3rem;
        background-color: rgb(255, 255, 255, 0.5);
    }
    .password {
        margin-top: 15rem;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .password > span {
        font-size: large;
        color: white;
        font-weight: bold;
    }
    .pb {
        background: transparent;
        width: 15rem;
        margin-top: 1rem;
        height: 2rem;
        padding-left: 1rem;
        border: 1px solid white;
        color: white;
        border-radius: 3rem;
        text-align: center;
    }
    .lock {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    
</style>