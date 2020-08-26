<template>
    <div class="main">
        <head>
            <input type="text">
        </head>
        <div>
            <img src="../../src/assets/images/guita_4.png"><img/>
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

<style lang="scss" scoped>

    main {
        font-family: 'Roboto';

        &__screen {
            /* top: 100%; */
            // justify-items: center;
            display: grid;
            /* position: relative; */
        }
    }
    head {
        position: relative;
        display: block;
        background-image: linear-gradient(to right, #feca3d, #f58638);
        width: 100%;
    }
    
    input {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        outline: none;
        margin: 5px;
        font-family: 'Roboto';
        font-size: 17px;
        color: white;
        border: 0 0 1px 0;
        border-color: transparent;
        border-bottom-color: #feca3d;
        border-radius: 10px;
        background-color: #2c3e50;
    }

    /* img{
        width: 100%;
    } */

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
</style>