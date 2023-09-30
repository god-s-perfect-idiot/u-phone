<script>
  import Swatch from "../fragments/Swatch.svelte";
  import Switch from "../fragments/Switch.svelte";
  import { getTheme } from "../store/themer";
  import { toast } from "../store/toaster";
</script>

<div class="settings">
  <div class="menu">
    <span class="section">ui theme</span>
    <div class="item">
      <span>apps as a list</span>
      <Switch title="" />
    </div>
    <div class="item">
      <span>accent</span>
      <Swatch
        mainColor={getTheme("accent")}
        colors={[
          "kavi",
          "choco",
          "jalapeno",
          "peach",
          "lime",
          "blueberry",
          "grape",
          "apple",
        ]}
        source="accent"
      />
    </div>
    <div class="item">
      <span>background</span>
      <Swatch
        mainColor={getTheme("main")}
        colors={[
          "mango",
          "strawberry",
          "moo",
          "latte",
          "mocha",
          "kiwi",
          "tomato",
          "curacao",
        ]}
        source="main"
      />
    </div>
  </div>
  <div class="menu">
    <span class="section">general</span>
    <div class="item-2">
      <span>location</span>
      <input type="text" />
    </div>
  </div>
  <div class="end">
    <span class="btn"
      on:click={() => {
        toast("settings saved");
        }}
      on:keydown={undefined}
      on:keyup={undefined}
      on:keypress={undefined}
    >save</span>
  </div>
</div>

<style>
  .end {
    width: 100%;
    font-size: 1.2rem;
    display: flex;
    justify-content: flex-end;
    margin-top: 2rem;
  }
  .btn {
    padding: 0.2rem 0.5rem;
    border: 2px solid black;
  }
  .menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .settings {
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    margin-right: 2rem;
    height: 100%;
    gap: 2rem;
  }
  .settings .section {
    font-size: 1.7rem;
  }

  .item-2 {
    display: flex;
    flex-direction: column;
    margin-top: 1em;
    font-size: 1.2rem;
  }

  .item-2 input {
    margin-top: 1rem;
    font-size: 1.2rem;
    height: 1.8rem;
    background-color: transparent;
    border: 2px solid black;
    padding-left: 1rem;
    font-family: "Noto Sans", sans-serif;
  }

  .item {
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
    justify-content: space-between;
  }

  .item > span {
    font-size: 1.2rem;
    align-items: center;
    display: flex;
  }
</style>
