<template>
    <div>
        <div class="div-value">
            <input id="title" v-model="title" placeholder="Título do Pedido" class="content-value" type="text" :maxlength="max" :minlength="min">
            <input id="flavour" v-model="flavour" placeholder="Sabor" class="content-value" type="text" :maxlength="max" :minlength="min">
            <div class="content-value price">
                R$ <input id="cost" v-model="cost" class="input-price price" type="number">
            </div>
        </div>
        <div>
            <div class="content-value description">
                <textarea v-model="description" style="height: 60px;" name="description" id="describe" cols="30" rows="10" class="input-content" placeholder="Descrição"></textarea>
            </div>
            <div id="image-uploader" type="file" @click="onUpload" @change="onUpload" class="content-value picture">
                <input type="file" class="teste" @change="onUpload">
                <div class="input-image-preview">
                    <img class="image-preview" v-if="url" :src="url">
                </div>
                <img class="input-image"  src="../assets/images/upload_icon.png">
                <span id="upload-picture" class="input-content">
                    Jogue aqui o arquivo de imagem do seu pastel ou clique para localizar a pasta
                </span>  
            </div>
        </div>
        <Buttons @Cleaner="cleaner" @Register="register"/>
        <div id='menu' class="summary">
            <h2><span>Veja como será apresentado ao cliente</span></h2>
            <div>
                <div class="summary-image">
                    <img class="img" v-if="url" :src="url" alt="">
                </div>
                <div class="summary-builder">
                    <div class="summary-start">
                        {{title}}
                        <div class="summary-price">
                            R${{cost}}
                        </div>
                    </div>
                    <div class="infos">
                        <div class="flavour">
                            Sabor:
                            <div class="type">
                                {{flavour}}
                            </div>
                        </div>
                        <div class="description">
                            Descrição:
                            <div class="type">
                                {{description}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Buttons from "./Buttons.vue"

export default {
    components: {
        Buttons
    },
    props: [
        // 'title', 
        'flavour',
        'cost',
        'description',
        'files'
    ],
    data() {
        return {
            url: null,
            max: 60,
            min:3,
            title: '',
        }
    },
    methods: {
        cleaner(){
            this.title = '';
            this.flavour = '';
            this.cost = '';
            this.description = '';
            this.url = null
        },
            // register(){
            //     this.title = this.title;
            //     this.flavour = this.flavour;
            //     this.cost = this.cost;
            //     this.description = this.description;
            //     this.files = this.url
            // },
        onUpload(e){
            const file = e.target.files[0];
            this.url = URL.createObjectURL(file);
        },
        PreviewImage(){

        }
    },
    computed: {
        register: function(){

            return  'register'
        }
    }  
}

</script>

<style scope lang="scss">
    .div-value{
        position: relative;
        margin-top: 75px;
        justify-content: space-between;
        z-index: 2;
        display: flex;
    }

    .content-value{
        color: #a03401;
        height: 40px;
        width: 470px;
        border-radius: 10px;
        border: 1px solid;
        border-color: #e44738;
        margin: 0 0 0 20px;
        padding: 10px 10px 10px 20px;
        font-size: 16px;
        z-index: 10;
        position: relative;
        cursor: pointer;


        &.price{
            height: 40px;
            width: 150px;
            background-color: #fff;
            margin-right: auto;
        }

        .input-price{
            width: 100px;
            position: absolute;
            height: 30px;
            bottom: 3px;
            border: none;
            font-size: 16px;
            color: #a03401;
            padding-left: 5px;
        }

        &.description{
            height: 80px;
            width: 1140px;
            margin: 20px 0 20px 20px;
            font-size: 1px;
        }

        &.picture{
            height: 110px;
            width: 1140px;
            margin: 0 0 20px 20px;
            display: grid;
            justify-items: center;
            font-size: 14px;
        }
    }

    .content-value::placeholder{
        color: #a03401;
    }

    .input-content{
        border-color: transparent;
        font-size: 18px;
        color: #a03401;
        width: 700px;
        font-family: Arial, Helvetica, sans-serif;
        height: 25px;
        flex: 1;
        word-break: break-word;
        width: 738px;
        font-style: initial;
        font-weight: 500;
    }

    .input-content::placeholder{
        color: #a03401;
    }

    .input-image{
        width: 5%;
        margin-right: 25px;
    }

    h2 {
        width: 161.4%; 
        text-align: center; 
        border-bottom: 2px solid #e44738; 
        line-height: 0.1em;
        margin: 110px 0 20px 0;
    } 

    span { 
        background:#fff; 
        padding:0 50px;
        color: #a03401;
        font-style: italic;
        font-weight: bold;
        font-size: 23px;
        font-family: Arial, Helvetica, sans-serif;
    }

    .summary-builder{
        height: 230px;
        width: 1040px;
        background-color: white;
        border-radius: 20px;
        position: relative;
        box-shadow: 4px 13px 30px 1px rgba(252, 56, 56, 0.2);
        justify-content: center;
        display: flex;
        margin-top: 60px;
        margin-left: 140px;
    }

    .summary{
        justify-items: center;
        display: grid;
    }

    .summary-image{
        margin-top: 40px;
        position: relative;
    }

    .img{
        position: absolute;
        z-index: 1;
        width: 180px;
        height: 180px;
        border-radius: 15px;
        margin-top: 45px;
    }

    .summary-start{
        background-color: #e44738;
        height: 80px;
        width: 100%;
        border-radius: 20px 20px 0 0;
        color: #ffc107;
        font-style: italic;
        font-weight: bold;
        font-size: 30px;
        font-family: Arial, Helvetica, sans-serif;
        padding-left: 90px;
        padding-top: 30px;
        display: flex;
        justify-content: space-between;
        position: absolute;
    }

    .summary-price{
        padding-right: 40px;
        color: #fff 
    }

    .infos{
        z-index: 1;
        position: absolute;
        left: 85px;
        margin-top: 110px;
    }

    .flavour{
        display: flex;
        height: 50px;
        color: #a03401;
        font-style: italic;
        font-weight: bold;
        font-size: 22px;

    }

    .description{
        display: flex;
        height: 50px;
        color: #a03401;
        font-style: italic;
        font-weight: bold;
        font-size: 22px;
    }

    .type{
        font-style: initial;
        font-weight: 500;
        margin-left: 10px;
    }

    .teste{
        height: 110px;
        width: 1140px;
        opacity: 0;
        border-radius: 10px;
        position: absolute;
        cursor: pointer;
    }

    .input-image-preview{
        position: absolute;
        background: white;
        height: 100%;
        width: 100%;
        display: grid;
        justify-content: center;
        z-index: -1;
        border-radius: 10px;
    }

    .image-preview{
        width: 108px;
        height: 100px;
    }
</style>