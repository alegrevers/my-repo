<template>
  <div id="app">
    <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
    <Land />
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
  font-family: 'Roboto';
  color: white;
  background: #2c3e50;
}

body {
  margin: 0;
}
</style>
