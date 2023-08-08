<template>
    <div class="modal" v-if="statusImg">
        <button @click="statusImg = false">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="m7 7 18 18M7 25 25 7" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2px" class="stroke-000000"></path>
            </svg>
        </button>
        <img :src="images.image" alt="">
    </div>
    <div class="mainPageBacr">
        <div class="conteiner">
            <div class="inConteiner">
                <main>
                    <article class="rightC">
                        <div class="hello">
                            <p>{{ head.hello }}</p>
                        </div>
                        <div class="tema">
                            <h1>{{ head.nickname }}</h1>
                        </div>
                        <div class="text">
                            <p>{{ head.profession }}</p>
                        </div>
                        <div class="media">
                            <a v-for=" i in mediaes" :href="i.link" target="_blank">
                                <img :src="i.logo" alt="">
                            </a>
                        </div>
                        <div class="butt">
                            <a :href="pagebutt.link" target="_blank">{{ pagebutt.text }}
                                <span>{{ pagebutt.name }}</span>
                            </a>

                        </div>
                    </article>
                    <article class="imgLeft" v-if="whithadap > 400">
                        <div class="imgs">
                            <img :src="images.image" @click="statusImg = true">
                        </div>
                    </article>
                </main>
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
            head: {},
            pagebutt: {},
            images: {},
            mediaes: [],
            statusImg: false,
            whithadap: window.innerWidth
        }
    },
    methods: {
        async getPage() {
            await this.contentStore.getCont()
            this.head = this.contentStore.mainPage.H1
            this.pagebutt = this.contentStore.mainPage.buttons
            this.images = this.contentStore.mainPage.mainPageImg
            this.mediaes = this.contentStore.mainPage.media
        },
        reWith() {
            window.addEventListener('resize', () => {
                this.whithadap = window.innerWidth

            })
        }
    },


    mounted() {
        this.getPage()
        this.reWith()


    }
}
</script>

<style lang="scss" scoped>
* {
    overflow: hidden;
}

.mainPageBacr {
    background-color: #27323E;
}

main {

    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 545px;
    overflow: hidden;

    article {
        width: 50%;
        display: flex;
        flex-direction: column;
        height: 100%;

        .hello {
            width: 134px;
            height: 64px;
            flex-shrink: 0;
            border-radius: 40px 40px 40px 0px;
            background: linear-gradient(145deg, #FC4A1A 0%, #F7B733 100%);
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 120px 0 0px 0;

            p {
                color: #FFF;
                font-family: Roboto, sans-serif;
                font-size: 22px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;

            }
        }

        .tema {
            width: max-content;
            height: 84px;
            display: flex;
            justify-content: center;
            align-items: center;

            h1 {
                color: #FFF;
                font-family: Roboto, sans-serif;
                font-size: 72px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;

            }
        }

        .text {
            height: 26px;
            display: flex;
            width: max-content;
            align-items: center;
            justify-content: center;

            margin-bottom: 20px;

            p {
                color: #FFF;
                font-family: Roboto, sans-serif;
                font-size: 22px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;

            }
        }

        .media {
            display: flex;
            justify-content: space-between;
            width: 200px;
            margin-bottom: 20px;
            align-items: center;


            a {
                width: 40px;
                height: 40px;
                flex-shrink: 0;
                background-color: #FFF;
                filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all 1s linear;
                position: relative;

                &:active {
                    opacity: 30%;
                    transition: 1ms;
                }

                &:hover {
                    background: linear-gradient(145deg, #FC4A1A 0%, #F7B733 100%);
                }
            }
        }

        .butt {
            overflow: hidden;

            span {
                position: absolute;
                color: #FC4A1A;
                font-family: Roboto, sans-serif;
                height: 100%;
                display: flex;
                align-items: center;
                font-size: 22px;
                border-radius: 100px;
                padding: 0 10px;
                background-color: #FFF;
                width: max-content;
                box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.505);
                bottom: 0;
                left: -100%;
                transition: all 2s;
                justify-content: center;
                font-weight: 700;
            }

            a {
                display: flex;
                width: 180px;
                height: 45px;
                flex-direction: column;
                justify-content: center;
                flex-shrink: 0;
                color: #FFF;
                text-align: center;
                font-family: Roboto, sans-serif;
                font-size: 22px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                border-radius: 100px;
                background: linear-gradient(145deg, #FC4A1A 0%, #F7B733 100%);
                text-decoration: none;
                transition: all 400ms linear;
                position: relative;

                &:hover {
                    background: linear-gradient(#FC4A1A 100%, #F7B733 10%);
                    filter: drop-shadow(0 0 10px #FC4A1A) contrast(2) brightness(2);

                    span {
                        left: 0;
                    }
                }

                &:active {
                    opacity: 20%;
                    transition: all 1ms;
                }
            }
        }

        .imgs {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            cursor: pointer;

            img {
                width: 100%;
                height: 450px;
            }
        }
    }
}

.modal {
    width: 50%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    background-color: #000;
    z-index: 2;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 15px;

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
        max-height: 100%;
        object-fit: cover;
    }

}

@media screen and (max-width: 754px) {
    .text {
        width: 100% !important;
        height: max-content !important;
    }


}

@media screen and (max-width: 623px) {
    .imgs {
        img {
            height: 63% !important;
        }
    }

    .imgLeft {
        width: 40%;
    }

    .rightC {
        width: 60%;
    }

    .tema {
        h1 {
            font-size: 53px !important;
        }
    }

}

@media screen and (max-width: 400px) {
    .rightC {
        width: 100% !important;
        display: flex;
        align-items: start;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 145px;

        .text {
            text-align: start;
        }
    }

}
</style>