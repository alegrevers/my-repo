<template>
  <div id="app">
    <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
    <Land />
  </div>
</template>

<script>
import Land from './Land.vue'

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
  position: absolute;
  width: 100%;
}

body {
  margin: 0;
}

@media only screen and (max-device-width: 1100px) {
  #app { 
    width: 100%;
    zoom: 1.4;
  }
}

@media only screen and (max-device-width: 768px) {
  #app { 
    width: 100%;
    zoom: normal;
  }
}

@media only screen and (max-device-width: 540px) {
  #app { 
    width: auto;
  }
}

@media only screen and (max-device-width: 414px) {
  #app { 
    width: 100%;
    zoom: 0.57;
  }
}

@media only screen and (max-device-width: 411px) {
  #app { 
    width: auto;
  }
}

@media only screen and (max-device-width: 375px) {
  #app {
    width: auto;
    zoom: 0.52;
  }
}

@media only screen and (max-device-width: 360px) {
  #app { 
    width: auto;
  }
}

@media only screen and (max-device-width: 280px) {
  #app { 
    width: auto;
    zoom: 0.39;
  }
}

</style>
