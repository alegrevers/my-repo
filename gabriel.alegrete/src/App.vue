<template>
  <div id="app">
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
  color: #2c3e50;
  /* background-image: url('../../src/assets/images/FB_IMG_1547514970654 (1).jpg'); */
    /* background-size: cover;
    height: 100%;
    background-attachment: scroll; */
}

body {
  margin: 0;
}
</style>
