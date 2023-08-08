<template>
    <div class="meBackr">
        <div class="modal" v-if="modalStatus">
            <button @click="modalStatus = false">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="m7 7 18 18M7 25 25 7" fill="none" stroke="#ffffff" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="2px" class="stroke-000000"></path>
                </svg>
            </button>
            <img v-if="myFio.image" :src="myFio.image.imageMain">
        </div>
        <div class="conteiner">
            <div class="inConteiner">
                <section>
                    <article>
                        <div class="myImg">
                            <div class="imagess" v-if="myFio.image">
                                <img :src="myFio.image.imageMain" @click="modalStatus = true">
                            </div>
                            <div class="posimg">
                                <div v-for="i in myFio.image.images" v-if="myFio.image"
                                    :class="` threeimage threeimage${myFio.image.images.length}`">
                                    <img :src="i" alt="">
                                </div>
                            </div>

                        </div>
                        <div class="contry" v-if="myFio.myData">
                            <h5>{{ myFio.myData.contry }}</h5>
                        </div>
                        <div class="name" v-if="myFio.myData">
                            <h4>{{ myFio.myData.name }}</h4>
                        </div>
                    </article>
                    <article>

                        <div class="headMe">
                            <div class="oreng" />
                            <h2>{{ biograff.head }}</h2>

                        </div>
                        <div class="textMe">
                            <p v-html="biograff.text"></p>
                        </div>


                    </article>
                </section>
            </div>
        </div>
    </div>
</template>


<script>
import { mapStores } from "pinia";
import { useContentStore } from "../store/content"
export default {
    computed: {
        ...mapStores(useContentStore)
    },
    data() {
        return {
            myFio: {},
            biograff: {},
            modalStatus: false
        }
    },
    methods: {
        async getMyData() {
            await this.contentStore.getCont()
            this.myFio = this.contentStore.aboutMe.FIO
            this.biograff = this.contentStore.aboutMe.biografia
        }

    },
    mounted() {
        this.getMyData()
    }
}

</script>

<style lang="scss" scoped>
.meBackr {
    background: #212529;
}

section {
    height: 720px;
    display: flex;

    article {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        .myImg {
            position: relative;
            width: 292px;
            height: 292px;
            flex-shrink: 0;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 146px;
            background: linear-gradient(#FC4A1A, #F7B733);
            margin-bottom: 20px;

            .threeimage {
                width: 40px;
                height: 40px;
                background: linear-gradient(#FC4A1A, #F7B733);
                overflow: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                margin: 0 5px;
                cursor: pointer;


                &:hover {
                    width: 100%;
                    height: 100%;
                    border-radius: 0%;
                    position: absolute;
                    background: none;

                    img {
                        width: 100%;
                        height: 100%;

                        object-fit: cover;

                    }
                }



                img {
                    border-radius: 50%;
                    object-fit: cover;
                    width: 38px;
                    height: 38px;
                    transition: all 400ms linear;


                }
            }

            .posimg {
                position: absolute;
                width: 100%;
                height: 100px;
                display: flex;
                justify-content: center;
                top: 90%;
                transition: all 400ms linear;

                &:hover {
                    top: 0;
                    height: 100%;
                    align-items: end;
                }
            }

            .imagess {
                width: 285px;
                height: 285px;
                cursor: pointer;
                background-image: url("https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1589579893305-PI68R8H1KUGZACQDRKZG/image-asset.jpeg");
                overflow: hidden;
                border-radius: 50%;

                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }
        }

        .contry {
            width: 292px;
            height: 21px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 5px;

            h5 {
                width: 110px;
                color: #FFF;
                font-family: Roboto, sans-serif;
                font-size: 18px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            }
        }

        .name {

            height: 40px;
            display: flex;
            align-items: center;

            overflow: hidden;

            h4 {
                color: #FFF;
                font-family: Roboto, sans-serif;
                font-size: 34px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            }
        }

        .headMe {
            margin-bottom: 10px;
            position: relative;
            width: 100%;
            overflow: hidden;
            padding-left: 7px;

            h2 {
                color: #FFF;
                font-family: Roboto, sans-serif;
                font-size: 50px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                position: relative;
                z-index: 1;
            }

            .oreng {
                width: 55px;
                height: 55px;
                flex-shrink: 0;
                border-radius: 50%;
                background: linear-gradient(109deg, #FC4A1A 0%, #F7B733 100%);
                position: absolute;
                top: 0;
                left: 0;
            }
        }

        .textMe {
            width: 100%;
            padding-left: 40px;

            p {
                color: #FFF;
                font-family: Roboto, sans-serif;
                font-size: 22px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            }
        }
    }
}

.modal {
    overflow: hidden;
    display: flex; 
    align-items: end;
    justify-content: center;
    width: 50%;
    height: 50%;
    position: fixed;
    z-index: 2;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background-image: url("https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1589579893305-PI68R8H1KUGZACQDRKZG/image-asset.jpeg");
    background-position: center;
    background-size: cover;
    border-radius: 15px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    button {
        width: 30px;
        height: 30px;
        position: absolute;
        overflow: hidden;
        background: linear-gradient(109deg, #FC4A1A 0%, #F7B733 100%);
        display: flex;
        align-items: center;
        padding: 2px;
        border: none;
        cursor: pointer;
        top: 0;
        left: 0;


    }

    img {
        max-width: 100%;
        object-fit: cover;
        max-height: 100%;
      
    }
}

@media screen and (max-width: 730px) {

    .textMe {
        padding-left: 10px !important;
    }

    .name {
        height: auto !important;
    }
}

@media screen and (max-width: 625px) {

    .contry {
        width: 250px !important;
    }

    .name {
        h4 {
            font-size: 25px !important;
        }
    }

    .textMe {
        padding-left: 0 !important;

        p {
            font-size: 20px !important;
        }
    }

    .myImg {
        width: 250px !important;
        height: 250px !important;

        .imagess {
            width: 243px !important;
            height: 243px !important;
        }
    }
}

@media screen and (max-width: 565px) {
    section {
        flex-direction: column !important;

        article {
            width: 100%;
            align-items: center !important;
        }
    }
    .textMe {

        p {
            font-size: 18px !important;
        }
    }

}

@media screen and (max-width: 426px) {
    .textMe {

        p {
            font-size: 16px !important;
        }
    }

    .headMe {
        h2 {
            font-size: 40px !important;
        }
    }

    .oreng {
        width: 40px !important;
        height: 40px !important;
    }
}

@media screen and (max-width: 315px) {
    .textMe {

        p {
            font-size: 13px !important;
        }
    }
}
@media screen and (max-width: 299px) {
    .name{
        h4{
            font-size: 20px !important;
        }
    }
    .myImg{
        width: 230px !important;
        height: 230px !important;
        .imagess{
            width: 225px !important;
            height: 225px !important;
        }
    }
}
</style>