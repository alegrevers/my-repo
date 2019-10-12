<template>
  <div class="button">
      <button class="clear">
          LIMPAR
      </button>
      <button class="register">
          CADASTRAR
      </button>
  </div>
</template>

<script>
export default {

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
    }
</style>