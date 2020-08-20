<template>
    <div class="screen">
        name:
        <input type="text" name="name">

        e-mail:
        <input type="text" name="email">

        phone number:
        <input type="number" name="phone">

        <input type="submit" name="save_login" value="send">
    </div>
</template>

<script>
export default {
    name: 'Land'
}
</script>

<style scoped>
    .screen{
        background: yellow;
        height: 200px;
        width: 500px;
        display: grid;
    }
    input {
        margin: 5px;
        width: 100px;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
</style>