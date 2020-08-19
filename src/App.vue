<template>
  <div id="app">
    <Land/>
  </div>
</template>

<script>
import Land from './components/Land.vue'

export default {
  name: 'App',
  components: {
    Land
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
