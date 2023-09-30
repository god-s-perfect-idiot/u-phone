<script>
  //@ts-nocheck
  export let title;
  let set = false;

  const slide = () => {
    const empty = document.querySelector(".empty");
    const slider = document.querySelector(".slider");
    console.log(empty.style.justifyContent);
    if (!set) {
      console.log(empty.style);
      empty.style.justifyContent = "flex-end";
      empty.style.backgroundColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--accent");
      empty.style.borderLeft = "2px solid black";
      empty.style.borderRight = "none";
      slider.style.borderLeft = "none";
      set = true;
    } else {
      empty.style.justifyContent = "flex-start";
      slider.style.backgroundColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--accent");
      slider.style.borderLeft = "2px solid black";
      empty.style.borderRight = "2px solid black";
      empty.style.borderLeft = "none";
      empty.style.backgroundColor = "transparent";
      set = false;
    }
  };
</script>

<div class="switch">
    <div
    on:click={slide}
    on:keydown={undefined}
    on:keyup={undefined}
    on:keypress={undefined}
  >
    <div class="empty">
      <div class="slider" />
    </div>
  </div>
  <span>
      {set ? "on" : "off"}
  </span>
</div>


<style>
    .switch {
        display: flex;
        gap: 0.5rem;
        font-size: 1.2rem;
    }
  .empty {
    width: 3rem;
    height: 1.5rem;
    border: 2px solid black;
    border-left: none;
    align-items: center;
    justify-content: flex-start;
    display: flex;
  }
  .slider {
    width: 1rem;
    height: 1.5rem;
    background-color: var(--accent);
    border: 2px solid black;
  }
</style>
