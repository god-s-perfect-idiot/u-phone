<script>
// @ts-nocheck

    import Clock from "./utils/Clock.svelte";
    import {createEventDispatcher} from 'svelte';
    const dispatch = createEventDispatcher();
    let clicker = 0;
    let passGrid = false;
    let password = "";
    let errorMessage = "Uno, Password?"
    let passwordPlaceholder = ""

    const passwordCheck = () => {
        if (password == "2211") {
            dispatch('message', {
                text: 'passed!'
            });
        } else {
            if (password.length > 3) {
                errorMessage = "You've got no idea, do you?"
            }
        }
    }

    $: password && passwordCheck();

</script>

<div class='lock'>
    <Clock fontSize='4rem' top="6rem"/>

    <div class='password'>
        <span class="er-text">
            {errorMessage}
        </span>
        <span class='pb' 
            on:click={() => passGrid = true}  
            on:keydown={undefined}
            on:keyup={undefined}
            on:keypress={undefined}
        >
            {passwordPlaceholder}
        </span>
    </div>
    {#if passGrid}
        <div class="password-grid">
            {#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] as num}
                <span 
                    on:click={() => {
                        password += num
                        // add a dot to the placeholder
                        passwordPlaceholder += "•"
                    }}
                    on:keydown={undefined}
                    on:keyup={undefined}
                    on:keypress={undefined}
                    >{num}</span>
            {/each}
        </div>
        <div class="password-controls">
            <span class="clear"
                on:click={() => {
                    password = ""
                    passwordPlaceholder = ""
                    errorMessage = "Let's try again, shall we?"
                }}
                on:keydown={undefined}
                on:keyup={undefined}
                on:keypress={undefined}
            >Clear</span>
            <span class="hide">Hide</span>
        </div>
    {/if}
</div>


<style>
    .password-controls {
        display: flex;
        justify-content: space-between;
        width: 70%;
        margin-left: 2rem;
        margin-right: 2rem;
        font-size: 1.3rem;
        color: white;
    }
    .password-grid {
        margin-top: 3rem;
        margin-left: 2rem;
        margin-right: 2rem;
        justify-content: center;
        display: flex;
        flex-direction: 
        row;
        flex-wrap: wrap;
        gap: 1.5rem 3.4rem;
    }
    .password-grid > span {
        font-size: 1.4rem;
        color: white;
        height: 3rem;
        width: 3rem;
        background-color: rgba(0, 0, 0, 0.41);
        border-radius: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .er-text {
        color: white;
        font-size: 1.2rem;
        font-weight: bold;
        margin-left: 2rem;
        margin-right: 2rem;
    }
    .unlocker {
        margin-top: 10rem;
        width: 3rem;
        height: 3rem;
        border-radius: 3rem;
        background-color: rgb(255, 255, 255, 0.5);
    }
    .password {
        margin-top: 4rem;
        display: flex;
        align-items: center;
        flex-direction: column;
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
        font-size: 2.3rem;
        display: flex;
        align-items: center;   
        justify-content: center;
    }
    .password > span {
        color: white;
        font-weight: bold;
    }
    .lock {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    
</style>