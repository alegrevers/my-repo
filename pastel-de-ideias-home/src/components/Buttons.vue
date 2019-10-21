<template>
    <div class="button">
        <button id='erase' class="clear" @click="emitCleanData">
            LIMPAR
        </button>
        <button id='register' class="register" @click='RegisterContainerUp'>
            CADASTRAR
        </button>
    </div>
</template>

<script>
export default {
    props: {
        label: {}
    },
    methods: {
        emitCleanData: function() {
            this.$emit('Cleaner')
        },
        RegisterContainerUp() {
            this.$emit('Register')
        }
    },
    data() {
        return {
            
        }
    },
}
</script>

<style>
    .button{
        justify-items: center;
        justify-content: center;
        display: flex;
        margin-right: 5px;
    }

    .clear{
        background-color: #e44738;
        color: #fff;
        height: 60px;
        width: 200px;
        border-color: transparent;
        border-radius: 50px;
        font-size: 20px;
        font-weight: bold;
        margin-right: 33px;
        cursor: pointer;
    }

    .register{
        background-color: #ffc107;
        color: #a03401;
        height: 60px;
        width: 200px;
        border-color: transparent;
        border-radius: 50px;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer
    }
</style>