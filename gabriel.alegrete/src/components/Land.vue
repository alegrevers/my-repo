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
        justify-items: center;
        display: grid;
    }
    input {
        margin: 5px;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
</style>