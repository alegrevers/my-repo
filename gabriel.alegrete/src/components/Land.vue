<template>
    <div class="main">
        <head>
            <input type="text">
        </head>
        <div class="main__content">
            <div class="main__content__forms">
                name:
                <input type="text" name="name">

                e-mail:
                <input type="text" name="email">

                phone number:
                <input type="number" name="phone">

                <input type="submit" name="save_login" value="send">
            </div>

            <div>
                <img src="../../src/assets/images/guita_4.png">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Land'
}
</script>

<style lang="scss" scoped>

    .main {
        font-family: 'Roboto';

        &__content {
            display: flex;
            justify-content: center;
            padding: 50px;

            &__forms {
                display: grid;
            }
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