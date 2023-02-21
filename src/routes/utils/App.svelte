<script>
// @ts-nocheck

export let appName;
export let color;
</script>

<div class='app'>
    <div class='icon-holder' style="background-color: {color}">
        <div class='icon' style="background-color: {color}">
            <slot></slot>
        </div>
    </div>
    <div class='app-label'>
        {appName}
    </div>
</div>

<style>
    .app {
        margin-left: 2rem;
        margin-top: 1rem;
        height: 4rem;
        display: flex;
        align-items: center;
    }
    .icon-holder {
        width: 3rem;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 1rem;
    }
    .icon {
        width: 1.5rem;
        height: 1.5rem;
        color: white;

    }
    .app-label {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 1rem;
        height: 100%;
        font-weight: bold;
    }
</style>