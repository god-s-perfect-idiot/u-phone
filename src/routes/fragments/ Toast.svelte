<script>
    //@ts-nocheck
    import { message } from "../store/toaster";    
    let text = "";
    let show;
    $: show
    message.subscribe((value) => {
        text = value.text;
        if (text) {
            setTimeout(() => {
                show = false;
            }, 1000);
            show = true;
        }
    });
</script>

{#if show}
    <div class="toast">
        <span>{text}</span>
    </div>
{/if}

<style>
    .toast {
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        width: 100%;
        height: 5%;
        background-color: var(--accent);
        padding-left: 2rem;
        padding-top: 0.5rem;
        font-size: 1.2rem;
        color: white;
        font-weight: bold;
    }
</style>