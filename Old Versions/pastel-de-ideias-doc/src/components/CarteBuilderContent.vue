<template>
    <div style="width: 100%">
        <div class="carte-start">
            Monte aqui o seu cardápio! O que está esperando?
            <div class="toggle-switch">
                Comida
                <md-switch v-model="boolean" class="md-primary md-switch md-switch-thumb" @onClick="ChangeItem">Bebida</md-switch>
            </div>
        </div>
        <div class="div-value">
            <input id="title" v-model="title" placeholder="Título do Pedido" class="content-value" type="text">
            <input id="flavour" v-model="flavour" placeholder="Sabor" class="content-value" type="text">
            <div class="content-value price">
                R$ <input id="cost" class="input-price price" v-model="cost" type="number">
            </div>
        </div>
        <div>
            <div class="content-value description">
                <!-- {{title}} -->
                <input id="describe" class="input-content" placeholder="Descrição" type="text">
            </div>
            <div id="image-uploader" class="content-value picture">
                <img class="input-image" src="../assets/images/upload_icon.png">
                <input id="upload-picture" class="input-content" placeholder="Jogue aqui o arquivo de imagem do seu pastel ou clique para localizar a pasta" type="text">
            </div>
        </div>
        <Buttons/>
    </div>
</template>

<script>
import Buttons from "./Buttons.vue"

export default {
  components: {Buttons},
  name: 'SwitchHueColors',
    data: () => ({
      boolean: true,
      title: ''
    }),
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
        padding-left: 20px;
    }

    .toggle-switch{
        font-size: 16px;
        font-weight: 500;
        font-style: initial;
        width: 210px;
        display: flex;
        margin-bottom: 35px;
        align-items: center;
    }

    .parent md-switch .md-switch-container.success{
        background-color: #fff
    }

    @import "~vue-material/dist/theme/engine"; // Import the theme engine

    @include md-register-theme("default", (
        primary: #e44738, // The primary color of your brand
        accent: #e44738 // The secondary color of your brand
    ));

    @import "~vue-material/dist/theme/all"; // Apply the theme

    .div-value{
        position: relative;
        margin-top: 75px;
        justify-content: space-between;
        z-index: 2;
        display: flex;
    }

    .content-value{
        color: #a03401;
        height: 40px;
        width: 470px;
        border-radius: 10px;
        border: 1px solid;
        border-color: #e44738;
        margin: 0 0 0 20px;
        padding: 10px 10px 10px 20px;
        font-size: 16px;
        z-index: 10;
        position: relative;
        cursor: pointer;


        &.price{
            height: 40px;
            width: 150px;
            background-color: #fff;
            margin-right: auto;
        }

        .input-price{
            width: 100px;
            position: absolute;
            height: 30px;
            bottom: 3px;
            border: none;
            font-size: 16px;
            color: #a03401;
            padding-left: 5px;
        }

        &.description{
            height: 80px;
            width: 1140px;
            margin: 20px 0 20px 20px;
            font-size: 1px;
        }

        &.picture{
            height: 110px;
            width: 1140px;
            margin: 0 0 20px 20px;
            display: grid;
            justify-items: center;
            font-size: 14px;
        }
    }

    .content-value::placeholder{
        color: #a03401;
    }

    .input-content{
        border-color: transparent;
        font-size: 18px;
        color: #a03401;
        width: 700px;
        height: 25px;
        flex: 1;
        word-break: break-word;
    }

    .input-content::placeholder{
        color: #a03401;
    }

    .input-image{
        width: 5%;
        margin-right: 25px;
    }
</style>
