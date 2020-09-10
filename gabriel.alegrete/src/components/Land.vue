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
                    <input class="main__content__inputs--forms" placeholder="o nome que sua mãe te deu (:" type="text" name="name">

                    <input class="main__content__inputs--forms" placeholder="o e-mail que tu mais usa" type="text" name="email">

                    <input class="main__content__inputs--forms" placeholder="seu telefone (não é para passar trote)" type="number" name="phone">

                    <input class="main__content__inputs--register" type="submit" name="save_login" value="Cadastrar!">
                </div>
            </div>

            <div class="main__content__image">
                <img src="../../src/assets/images/guita_4.png">
                encerramento da escola Espaço Garage - 2018
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

                &--forms {
                    background: #15202b;
                }

                &--forms:focus {
                    background: #2c3e50;
                    border: 1px solid #feca3d;
                }

                &--register {
                    border: none;
                    background: linear-gradient(to right, #ecad00, #e66000);
                    transition: 0.3s;
                    font-size: 20px;
                    font-weight: bold;
                }

                &--register:hover {
                    border: none;
                    background: linear-gradient(to right, #f58638, #feca3d);
                    box-shadow: 5px 5px 10px 2px #15202b;
                    cursor: pointer;
                }
            }

            &__forms {
                width: 400px;
                margin-right: 100px;
            }

            &__image {
                font-size: 13px;
                display: grid;
                font-style: italic;
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
        padding: 5px 5px 5px 10px;
        border: 1px solid #2c3e50;
        border-radius: 10px;
        font-size: 18px;
        color: white;
        transition: 0.3s;
    }

    input:focus {
        background: #2c3e50;
        border: 1px solid #feca3d;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

</style>