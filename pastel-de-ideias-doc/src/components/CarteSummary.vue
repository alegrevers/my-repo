<template>
  <div id='menu' class="summary">
    <h2><span>Veja como será apresentado ao cliente</span></h2>
    <div>
      <div class="summary-image">
        <img class="img" src="../assets/images/pastel-img.png" alt="">
      </div>
      <div class="summary-builder">
        <div class="summary-start">
            <!-- "Ajeita rapidinho pra mim" -->
            {{ title }}
            <div class="summary-price">
                R$10,00
            </div>
        </div>
        <div class="infos">
            <div class="flavour">
              Sabor:
              <div class="type">
                PowerPoint Importante
              </div>
            </div>
            <div class="description">
              Descrição:
              <div class="type">
                1 PPT, 6834 slides e uma pitada de animação
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import CarteBuilderContent from "./CarteBuilderContent.vue"

export default {
  components: {
    // CarteBuilderContent,
  }
}
</script>

<style scope lang='scss'>
  h2 {
    width: 100%; 
    text-align: center; 
    border-bottom: 2px solid #e44738; 
    line-height: 0.1em;
    margin: 110px 0 20px 0;
  } 

  span { 
    background:#fff; 
    padding:0 50px;
    color: #a03401;
    font-style: italic;
    font-weight: bold;
    font-size: 23px;
    font-family: Arial, Helvetica, sans-serif;
  }

  .summary-builder{
    height: 230px;
    width: 1040px;
    background-color: white;
    border-radius: 20px;
    position: relative;
    box-shadow: 4px 13px 30px 1px rgba(252, 56, 56, 0.2);
    justify-content: center;
    display: flex;
    margin-top: 60px;
    margin-left: 140px;
  }

  .summary{
    justify-items: center;
    display: grid;
  }

  .summary-image{
    margin-top: 40px;
    position: relative;
  }

  .img{
    position: absolute;
    z-index: 1;
  }

  .summary-start{
        background-color: #e44738;
        height: 80px;
        width: 100%;
        border-radius: 20px 20px 0 0;
        color: #ffc107;
        font-style: italic;
        font-weight: bold;
        font-size: 25px;
        font-family: Arial, Helvetica, sans-serif;
        padding-left: 120px;
        padding-top: 30px;
        display: flex;
        justify-content: space-between;
        position: absolute;
    }

    .summary-price{
      padding-right: 40px;
      color: #fff 
    }

  .infos{
    z-index: 1;
    position: relative;
    margin-right: 210px;
    margin-top: 110px;
  }

  .flavour{
    display: flex;
    height: 50px;
    color: #a03401;
    font-style: italic;
    font-weight: bold;
    font-size: 22px;

  }

  .description{
    display: flex;
    height: 50px;
    color: #a03401;
    font-style: italic;
    font-weight: bold;
    font-size: 22px;
  }

  .type{
    font-style: initial;
    font-weight: 500;
    margin-left: 10px;
  }
</style>