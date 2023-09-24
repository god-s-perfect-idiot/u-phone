<script>
  import Slider from "../fragments/Slider.svelte";


</script>

<div class="settings">
    <span class="section">UI Theme</span>
    <div>
        <span>Show App List As Grid</span>
        <Slider title=""/>
    </div>
</div>

<style>
 .settings {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 1rem;
    margin-left: 1rem;
 }
 .settings .section {
    font-size: 1.5rem;
    color: white;
    font-weight: bold;
 }
 .settings > div {
    margin-top: 2rem;
    margin-bottom: 2rem;
 }
 .settings span {
    color: white;
    font-size: 1.2rem;
 }
</style>