<script>
  // @ts-nocheck
  import { getHex, setTheme } from "../store/themer";
  export let mainColor;
  export let source;
  export let colors;
  let picked = false;
  let color = mainColor;

  const updateColor = (selectedColor) => {
    color = selectedColor;
  }
  const save = () => {
    picked = false;
    setTheme(source, color);
  }
</script>

<div
  class="swatch"
  style="--main-color: {getHex(color)}"
  on:click={() => (picked = !picked)}
  on:keydown={undefined}
  on:keyup={undefined}
  on:keypress={undefined}
/>
{#if picked}
  <div class="picker">
    <span class="title">{color}</span>
    <div class="picks">
      {#each [...colors] as color}
        <div class="swatch-lg" style="--main-color:{getHex(color)}" 
            on:click={() => updateColor(color)}
            on:keydown={undefined}
            on:keyup={undefined}
            on:keypress={undefined}
        />
      {/each}
    </div>
    <span class="btn" 
        on:click={() => save()}
        on:keydown={undefined}
        on:keyup={undefined}
        on:keypress={undefined}
    >save</span>
  </div>
{/if}

<style>
    .btn {
        font-size: 1.4rem;
        padding: 0.2rem 0.5rem;
        border: 2px solid black;
        display: flex;
        width: 4rem;
        align-self: self-end;
        justify-content: center;
        margin-top: 4rem;
    }
  .picks {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    margin-top: 2rem;
  }
  .picker {
    padding: 3rem;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: var(--main);
  }
  .title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  .swatch-lg {
    display: flex;
    width: 4.5rem;
    height: 4.5rem;
    border: 2px solid black;
    background-color: var(--main-color);
  }
  .swatch {
    display: flex;
    width: 2rem;
    height: 2rem;
    border: 2px solid black;
    background-color: var(--main-color);
  }
</style>
