<template>
  <div class="background-responsive" id="app">
    <img style="width: 100%; position: absolute;" src="./assets/images/wave.svg">
    <CarteBuilder/>
    <div>
    <PastelDeIdeias/>
    </div>
  </div>
</template>

<script>
import PastelDeIdeias from "./main/PastelDeIdeias.vue"
import CarteBuilder from "./components/CarteBuilder.vue"

export default {
  components: {PastelDeIdeias},
  components: {CarteBuilder}
}

</script>

<style>
  .background-responsive{
    background-repeat: round;
    background-image: url("./assets/images/pattern-1.png");
    position: relative;
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