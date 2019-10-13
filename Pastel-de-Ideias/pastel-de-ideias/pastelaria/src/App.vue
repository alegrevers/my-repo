<template>
  <div class="background-responsive" id="app">
    <div class="background">
      <img style="width: 100%; position: absolute;" src="./assets/images/wave.svg">
      <CarteBuilder/>
      <div>
        <PastelDeIdeias/>
        <CarteSummary/>
      </div>
    </div>
  </div>
</template>

<script>
import PastelDeIdeias from "./main/PastelDeIdeias.vue"
import CarteBuilder from "./components/CarteBuilder.vue"
import CarteSummary from './components/CarteSummary.vue'

export default {
  components: {
      PastelDeIdeias,
      CarteBuilder,
      CarteSummary
    }
}

</script>

<style>
  .background-responsive{
    background-repeat: round;
    background-image: url("./assets/images/pattern-1.png");
    position: relative;
    height: 1200px;
  }

  .background{
    background-color: transparent;  
    background: linear-gradient(to right, transparent 0%, #fff 15%, #fff 85%, transparent 100%);
    height: 1200px;
  }

  body{
    margin: 0;
  }

  .carte-builder{
    height: 1000px;
  }
</style>

<!-- <template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->