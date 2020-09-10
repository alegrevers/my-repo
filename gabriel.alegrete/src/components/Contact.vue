<template>
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