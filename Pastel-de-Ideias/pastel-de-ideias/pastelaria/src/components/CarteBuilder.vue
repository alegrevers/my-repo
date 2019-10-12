<template>
  <div class="align">
    <img class="responsive" src="../assets/images/pastel-paralax.png">
    <div>
      <div class="logo">
        <img class="logo-responsive" src="../assets/images/Logo.svg">
      <div class="div-responsive">
        <img class="img-responsive" src="../assets/images/pasteis-img.png">
      </div>
      </div>
    </div>
    <div class="carte-builder">
      <CarteBuilderContent />
    </div>
  </div>
</template>

<script>
import CarteBuilderContent from "./CarteBuilderContent.vue"

export default {
  components: {CarteBuilderContent}
}
</script>

<style>
  .logo-responsive{
    width: 100%;
    position: relative;
    margin-top: 61.3px;
    margin-bottom: 23px;
    margin-right: 125px;
  }

  .logo{
    display: inline-flex;
    justify-content: center;
    position: relative;
  }

  .carte-builder{
    height: 425px;
    width: 1180px;
    background-color: white;
    border-radius: 20px;
    position: relative;
    box-shadow: 4px 13px 30px 1px rgba(252, 56, 56, 0.2);
    justify-content: center;
    display: flex;
  }

  .responsive{
    position: absolute; 
    z-index: 1; 
    margin-left: 40px;
  }

  .img-responsive{
    position: relative; 
    height: 50%;
  }

  .align{
    display: grid; 
    justify-items: center;
  }

  .div-responsive{
    margin-top: 185px;
    position: absolute;
    margin-left: 525px;
    width: 70%
  }
</style>