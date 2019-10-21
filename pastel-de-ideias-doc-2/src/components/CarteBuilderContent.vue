<template>
    <div style="width: 100%">
        <div class="carte-start">
            Monte aqui o seu cardápio! O que está esperando?
            <div class="toggle-switch">
                Comida
                <md-switch v-model="boolean" class="md-primary md-switch md-switch-thumb">Bebida</md-switch>
            </div>
        </div>
        <form-carte/>
    </div>
</template>

<script>
import FormCarte from "./FormCarte.vue"

export default {
    components: {
        FormCarte
    },
    data: () => ({
        boolean: false,
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
        justify-content: center;
        align-items: center;
        margin-bottom: 35px;
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

</style>