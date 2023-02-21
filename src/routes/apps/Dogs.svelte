<script>
  // @ts-nocheck
      import Loader from '../utils/Loader.svelte';
      import {onMount} from 'svelte';
      let img;
      let quote;
      let promise;
      
      const getDog = async () => {
          const photoRes = await fetch('https://dog.ceo/api/breeds/image/random');
          img = (await photoRes.json()).message;
          const factRes = await fetch('https://dogapi.dog/api/v2/facts');
          quote = (await factRes.json()).data[0].attributes.body;
      }
  
      onMount(() => {
          promise = getDog();
      })
  </script>
  
  {#await promise}
      <Loader/>
  {:then} 
  {console.log(img)}
    <div class="bg" style="background-image:url({img})">
      <div class="quote">
        {quote}
    </div>
    </div>
  {/await}
  
  <style>
    .bg {
      position: absolute;
      width: 100vw;
      height: 115vh;
      left: 0;
      top: 0;
      background-size: cover;
    }
    .quote {
        color: white;
        font-weight: bold;
        font-size: 1.3rem;
        margin-top: 10rem;
        margin-left: 2rem;
        margin-right: 2rem;
    }
  </style>