<template>
    <div class="screen">
        <div>
            <img src="../../../src/assets/images/guita_3.png"><img/>
        </div>

        <div>
            name:
            <input type="text" name="name">

            e-mail:
            <input type="text" name="email">

            phone number:
            <input type="number" name="phone">

            <input type="submit" name="save_login" value="send">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Land'
}
</script>

<style scoped>
    .screen{
        /* top: 100%; */
        justify-items: center;
        display: grid;
        /* position: relative; */
    }
    input {
        margin: 5px;
    }

    img{
        width: 100%;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
</style>