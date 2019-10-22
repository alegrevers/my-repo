<template>
  <div class="background-responsive" id="app">
    <div class="background">
      <img style="width: 100%; position: absolute;" src="./assets/images/wave.svg">
      <CarteBuilder/>
      <div>
        <PastelDeIdeias/>
      </div>
    </div>
  </div>
</template>

<script>
import PastelDeIdeias from "./main/PastelDeIdeias.vue"
import CarteBuilder from "./components/CarteBuilder.vue"

export default {
  components: {
      PastelDeIdeias,
      CarteBuilder,
    }
}

</script>

<style>
  .background-responsive{
    background-repeat: round;
    background-image: url("./assets/images/pattern-1.png");
    position: relative;
    min-height: 1235px;
  }

  .background{
    background-color: transparent;  
    background: linear-gradient(to right, transparent 0%, #fff 15%, #fff 85%, transparent 100%);
    min-height: 1235px;
  }

  body{
    margin: 0;
  }

  .carte-builder{
    height: 1000px;
  }
</style>