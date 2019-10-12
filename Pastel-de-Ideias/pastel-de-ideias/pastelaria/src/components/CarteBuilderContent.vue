<template>
    <div style="width: 100%">
        <div class="carte-start">
            Monte aqui o seu cardápio! O que está esperando?
            <div class="toggle-switch">
                Comida
                <md-switch v-model="boolean" class="md-primary md-switch-thumb">Bebida</md-switch>
            </div>
        </div>
        <div class="div-value">
            <input placeholder="Título do Pedido" class="content-value" type="text" style="color: #a03401">
            <input placeholder="Sabor" class="content-value" type="text">
            <input placeholder="R$" class="content-value price" type="number">
        </div>
        <div>
            <div class="content-value description" style="position: relative; z-index: 10;">
                <input placeholder="Descrição" type="text">
            </div>
            <div style="z-index: 10; position: relative" class="content-value picture">
                <input placeholder="Jogue aqui o arquivo de imagem do seu pastel ou clique para localizar a pasta" type="text" style="color: #a03401">
                <img src="../assets/images/upload_icon.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import CarteBuilder from "./CarteBuilder.vue"

export default {
  components: {CarteBuilder},
  name: 'SwitchHueColors',
    data: () => ({
      boolean: true
    })
}
</script>

<style scope lang="scss">
    .carte-start{
        background-color: #ffc107;
        height: 95px;
        width: 100%;
        border-radius: 20px 20px 0 0;
        color: #a03401;
        font-style: italic;
        font-weight: bold;
        font-size: 23px;
        font-family: Arial, Helvetica, sans-serif;
        padding-left: 60px;
        padding-top: 30px;
        display: flex;
        justify-content: space-between;
        position: absolute;
    }

    .md-switch {
        display: flex;
        margin: 0 0 0 20px;
    }

    .toggle-switch{
        font-size: 16px;
        font-weight: 500;
        font-style: initial;
        width: 210px;
        display: flex;
    }

    .parent md-switch .md-switch-container.success{
        background-color: #fff
    }

    @import "~vue-material/dist/theme/engine"; // Import the theme engine

    @include md-register-theme("default", (
        primary: #e44738, // The primary color of your brand
        accent: #e44736 // The secondary color of your brand
    ));

    @import "~vue-material/dist/theme/all"; // Apply the theme

    .div-value{
        position: relative;
        margin-top: 75px;
        justify-content: space-between;
        z-index: 2;
    }

    .content-value{
        color: #a03401;
        height: 40px;
        width: 470px;
        border-radius: 10px;
        border: 1px solid;
        border-color: #a03401;
        margin: 0 0 0 20px;
        padding: 10px 10px 10px 20px;
        font-size: 18px;
        z-index: 10;
        position: relative;

        &.price{
            height: 40px;
            width: 150px;
        }

        &.description{
            height: 100px;
            width: 1140px;
            margin: 20px 0 20px 20px;

        }

        &.picture{
            height: 150px;
            width: 1140px;
            margin: 0 0 20px 20px;
        }
    }
</style>