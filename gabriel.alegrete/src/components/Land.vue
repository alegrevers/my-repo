<template>
    <div class="main">
        <!-- <head>
            <a href="">início</a>
            <a href="">sobre</a>
            <a href="">contato</a>
            <a href="">meus sons(e covers)</a>
        </head> -->
        <div class="main__content">
            <div class="main__content__forms">
                <h1>
                    Tenha as <em>melhores</em> e mais <em>práticas</em> aulas de <em>guitarra</em> e <em>violão</em> comigo!
                </h1>
                <div class="main__content__inputs">
                    <input placeholder="o nome que sua mãe te deu (:" type="text" name="name">

                    <input placeholder="o e-mail que tu mais usa" type="text" name="email">

                    <input placeholder="seu telefone (não é para passar trote)" type="number" name="phone">

                    <input class="main__content__inputs--register" type="submit" name="save_login" value="Cadastrar!">
                </div>
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
        font-size: 20px;
        height: 100%;

        &__content {
            display: flex;
            justify-content: center;
            padding: 50px;

            &__inputs {
                display: grid;

                &--register {
                    border: none;
                    background-image: linear-gradient(to right, #feca3d, #f58638);
                    font-size: 20px;
                    font-weight: bold;
                }
            }

            &__forms {
                width: 400px;
                margin-right: 100px;
            }
        }
    }

    a {
        background-color: transparent;
        margin-right: 50px;
        color: #2c3e50;
        text-decoration: none;
        border: none;
        font-weight: bold;
        cursor: pointer;
    }

    h1 {
        // word-wrap: break-word;
        text-align: left;
        color: white;
    }

    em {
        font-style: normal;
        background: -webkit-linear-gradient(#feca3d, #f58638);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    head {
        position: relative;
        display: flex;
        background-image: linear-gradient(to right, #feca3d, #f58638);
        width: 100%;
        justify-content: flex-end;
        align-items: center;
        height: 35px;
    }

    img {
        margin-left: 100px;
    }
    
    input {
        outline: none;
        margin: 5px;
        font-family: 'Roboto';
        padding: 5px;
        border: none;
        border-radius: 10px;
        font-size: 18px;
        color: white;
        background: #15202b;
    }

    input:hover {
        background: #2c3e50;
        border: 1px solid #feca3d;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

</style>