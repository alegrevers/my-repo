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
                    <input class="main__content__inputs--forms" placeholder="o nome que sua mãe te deu (:" type="text" name="name" required>

                    <input class="main__content__inputs--forms" placeholder="o e-mail que tu mais usa" type="text" name="email" required>

                    <input class="main__content__inputs--forms" placeholder="seu telefone (não é para passar trote)" type="number" name="phone" required>

                    <input class="main__content__inputs--register" type="submit" name="save_login" value="Cadastrar!">
                </div>
            </div>

            <div class="main__content__image">
                <img class="main__content__image--cover" src="../../src/assets/images/guita_4.png">
                encerramento da escola Espaço Garage - 2018
            </div>
        </div>
        <div class="separator"></div>
        <div class="complement">
            <div class="complement__text">
                <div class="complement__text__explains">
                    <h3>
                        Participando das aulas, aprenda muitos macetes que vão te ajudar a se tornar 
                        um músico com bastante <em>conhecimento técnico e feelings emotivos para 
                        impressionar quem te ouve.</em>
                    </h3>
                    Durante as aulas, vocẽ poderá descobrir através de lições práticas, como a música funciona 
                    por trás de toda a teoria, juntamente com dicas de como aplicar isso no dia à dia 
                    dos seus estudos. Estudar música exige paciência para trabalhar os exercícios 
                    repetitívos e persistência para memorizar todo o conteúdo que aprederá. Também trabalharemos 
                    o desenvolvimento da identidade musical para auxiliar em composições e na hora de improvisar.
                </div>
                <div class="complement__text__bio">
                    <h4>
                        <span>Gabriel Alegrete, apelidado de "Jukebox"</span> teve o apelido confirmado por tocar estilos 
                        variados em diversos eventos de estilos musicais distintos. Essa característica se faz presente 
                        pois nos mais de 8 anos como músico sempre buscou aprender estilos diferentes mesmo tendo como 
                        estilos principáis o Rock e o R&B. Hoje toca projetos autorais com banda e também busca conhecimento 
                        na parte de Produção Musical.
                    </h4>

                    <div class="complement__text__bio--social-media">
                        <a href="https://www.facebook.com/alegreteg" target="_blank">
                            <img class="complement__text__bio--social-media--icons" src="../../src/assets/images/face-logo.png">
                        </a>
                        <a href="https://www.instagram.com/alegrete_/" target="_blank">
                            <img class="complement__text__bio--social-media--icons" src="../../src/assets/images/insta-logo.png">
                        </a>
                        <a href="https://wa.me/+5511962730230" target="_blank">
                            <img class="complement__text__bio--social-media--icons" src="../../src/assets/images/whats-logo.png">
                        </a>
                        <a href="https://mobile.twitter.com/alegrete__" target="_blank">
                            <img class="complement__text__bio--social-media--icons" src="../../src/assets/images/twitter-logo.png">
                        </a>
                        <a style="display: none;" href="https://www.youtube.com/channel/UC6ir6G9nez7Fhdza4KBMsGw/featured" target="_blank">
                            <img class="complement__text__bio--social-media--icons" src="../../src/assets/images/youtube-logo.png">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            Copyright © 2020 Gabriel Alegrete. Todos os direitos reservados
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
        justify-items: center;
        display: grid;

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

                &--cover {
                    margin-left: 100px;
                }
            }
        }
    }

    .complement {
        padding-bottom: 50px;

        &__text {
            display: flex;
            justify-content: center;
            text-align: left;

            &__explains {
                width: 500px;
                padding: 50px;
                border-right: #ecad00 1px solid;
            }

            &__bio {
                width: 500px;
                display: grid;
                padding: 50px;
                border-left: #f58638 1px solid;

                &--social-media {
                    display: flex;
                    justify-content: space-between;

                    &--icons {
                        height: 40px;
                        cursor: pointer;
                    }
                }
            }
        }
    }

    .footer {
        height: 100px;
        background: linear-gradient(to right, #f58638, #feca3d);
        color: #2c3e50;
        width: 100%;
        font-size: 15px;
    }
    
    .separator {
        height: 2px;
        width: 85%;
        background: linear-gradient(to right, #f58638, #feca3d);
        margin: 10px;
        justify-content: center;
    }

    h1 {
        text-align: left;
    }

    em {
        font-style: normal;
        background: -webkit-linear-gradient(#feca3d, #f58638);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    span {
        background: -webkit-linear-gradient(#feca3d, #f58638);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin: 0;
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

    @media only screen and (max-device-width: 900px) {
        /* .menu { width:100%; } */
    }

</style>