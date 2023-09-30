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
    <Clock fontSize='3rem' top="6rem"/>

    <span class="er-text">
        {errorMessage}
    </span>
    <div class='password'>
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
            >clear</span>
            <span class="hide"
                on:click={() => {
                    passGrid = false
                    passwordPlaceholder = ""
                    password = ""
                }}
                on:keydown={undefined}
                on:keyup={undefined}
                on:keypress={undefined}
            >hide</span>
        </div>
    {/if}
</div>


<style>
    .password-controls {
        display: flex;
        justify-content: space-between;
        width: 100%;
        font-size: 1.8rem;
        margin-top: 1rem;
    }
    .password-grid {
        margin-top: 2rem;
        justify-content: center;
        display: flex;
        flex-direction: 
        row;
        flex-wrap: wrap;
        gap: 2rem 6rem;
    }
    .password-grid > span {
        font-size: 1.8rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .er-text {
        font-size: 1.4rem;
        margin-top:1rem;
        font-weight: 300;
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
        width: 100%;
        margin-top: 1rem;
        height: 2rem;
        padding-left: 1rem;
        border-bottom: 2px solid black;
        text-align: center;
        font-size: 2.3rem;
        display: flex;
        align-items: center;   
        justify-content: center;
    }
    .password > span {
        font-weight: bold;
    }
    .lock {
        display: flex;
        flex-direction: column;
        margin-left:3rem;
        margin-right:3rem;
    }
    
</style>