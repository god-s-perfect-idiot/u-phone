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
    
    <div class="bg dim" style="background-image:url({img})">
      <div class="quote remove-dim">
        {quote}
      </div>
    </div>
  {/await}
  
  <style>
    .bg {
      /* position: absolute; */
      width: 100vw;
      height: 100%;
      background-size: cover; 
    }
    .dim>* {
      filter: brightness(0.5);
    }
    .remove-dim {
      filter: brightness(1);
    }
    .quote {
        color: white;
        /* font-weight: bold; */
        font-size: 1.3rem;
        padding-top: 10rem;
        margin-left: 2rem;
        margin-right: 2rem;
    }
  </style>