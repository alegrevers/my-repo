<template>
  <div id="app">
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
</template>

<style lang="scss" scoped>

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

</style>