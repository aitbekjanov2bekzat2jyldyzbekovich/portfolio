<template>
    <div class="slider">
        <div class="navigaton">
            <button @click="rightCl('left')" :class="{ nobutton: addArr.length === 1 }">
                <svg height="32px" id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32"
                    width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path
                        d="M28,14H8.8l4.62-4.62C13.814,8.986,14,8.516,14,8c0-0.984-0.813-2-2-2c-0.531,0-0.994,0.193-1.38,0.58l-7.958,7.958  C2.334,14.866,2,15.271,2,16s0.279,1.08,0.646,1.447l7.974,7.973C11.006,25.807,11.469,26,12,26c1.188,0,2-1.016,2-2  c0-0.516-0.186-0.986-0.58-1.38L8.8,18H28c1.104,0,2-0.896,2-2S29.104,14,28,14z" />
                </svg>
            </button>
        </div>

        <div class="navigaton">
            <button :class="{ nobutton: addArr.length === 10 }" @click="rightCl('right')">
                <svg class="rightSvg" height="32px" id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1"
                    viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path
                        d="M28,14H8.8l4.62-4.62C13.814,8.986,14,8.516,14,8c0-0.984-0.813-2-2-2c-0.531,0-0.994,0.193-1.38,0.58l-7.958,7.958  C2.334,14.866,2,15.271,2,16s0.279,1.08,0.646,1.447l7.974,7.973C11.006,25.807,11.469,26,12,26c1.188,0,2-1.016,2-2  c0-0.516-0.186-0.986-0.58-1.38L8.8,18H28c1.104,0,2-0.896,2-2S29.104,14,28,14z" />
                </svg>
            </button>
        </div>
        <div class="pagination">
            <button v-for="item in animeData" :class="{ active: this.addArr.length === item.id }"></button>
        </div>
        <div :style="{
            'background-image': `url(${item.back})`
        }" v-for="(item) in addArr" class="activeSlid1">
            <div class="content" :class="{ rightSwipe: swiperSite, leftSwipe: leftSite }">
                <div class="left">
                    <div class="head">
                        <h5>{{ item.name }}</h5>
                    </div>
                    <div class="textAnimeW">
                        <p class="textAnime">{{ item.text }} </p>
                    </div>
                    <span v-if="textSize > 400">
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path d="m16 20.5-9-9M25 11.5l-9 9" fill="none" stroke="#faf5f5" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="2px" class="stroke-000000"></path>
                        </svg>
                    </span>
                </div>
                <div class="right"><img :src="item.image" alt=""></div>
            </div>
        </div>
    </div>
</template>
<script>

import { mapStores } from "pinia";
import { useContentStore } from "../store/content";


export default {
    data() {
        return {
            animeData: [],
            addArr: [],
            nextside: 0,
            swiperSite: false,
            leftSite: false,
        }
    },
    computed: {
        ...mapStores(useContentStore)
    },
    methods: {
        async getAnimesB() {
            await this.contentStore.getCont()
            this.animeData = this.contentStore.hobi.anime
            this.addArr.push(this.animeData[0])
        },
        rightCl(button) {
            if (button === 'right' && this.addArr.length < 10) {
                this.swiperSite = true
                setTimeout(() => {
                    this.nextside += 1
                    this.addArr.push(this.animeData[this.nextside])
                    this.swiperSite = false
                }, 501);

            }
            if (button === 'left' && this.addArr.length > 1) {
                this.leftSite = true
                setTimeout(() => {

                    this.addArr.pop()
                    this.nextside -= 1
                    this.leftSite = false
                }, 501);

            }
        },





    },
    mounted() {
        this.getAnimesB()
    }

};
</script>
<style lang="scss" scoped>
* {
    overflow: hidden;
}

.rightSwipe {
    position: absolute;
    margin-left: 200vw;

}

.leftSwipe {
    position: absolute;
    margin-right: 200vw;
}

.active {
    background: linear-gradient(90deg, #FC4A1A 0%, #F7B733 100%);

}

.nobutton {
    opacity: 50%;
    cursor: none !important;
}

.slider {
    position: relative;
    width: 100%;
    height: 570px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .pagination {
        margin-top: 555px;
        width: 100%;
        text-align: center;
        position: absolute;
        bottom: 10px;
        display: flex;
        justify-content: center;



        button {
            position: relative;
            z-index: 1;
            height: 10px;
            cursor: pointer;
            width: 10px;
            border-radius: 50%;
            border: none;
            box-shadow: 0 5px 15px 0 rgb(0, 0, 0);
            margin-left: 5px;
        }
    }

    .navigaton {
        svg {
            width: 35px;
            height: 35px;
            fill: #FFF;
        }

        .rightSvg {
            rotate: 180deg;
        }

        button {
            cursor: pointer;
            position: relative;
            z-index: 1;
            width: 55px;
            height: 55px;
            border-radius: 50% 50%;
            border: none;
            background: linear-gradient(90deg, #FC4A1A 0%, #F7B733 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 2px 0 2px;
            transition: all 300ms;


            &:active {
                background: linear-gradient(#FC4A1A 100%, #F7B733 10%);
                filter: drop-shadow(0 0 10px #FC4A1A) contrast(2) brightness(2);
            }
        }
    }
}




.content {
    width: 80%;
    height: 99%;
    background: #212529;
    border-radius: 10px;
    box-shadow: 0 5px 15px 0 rgb(0, 0, 0);
    display: flex;

    z-index: 1;
    transition: all 500ms linear;




    .right {
        width: 50%;
        height: 100%;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .left {
        width: 50%;
        height: 100%;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;

        span {
            position: absolute;
            bottom: 0px;
            margin: 0 auto;
            width: 100px;
            height: 20px;
            cursor: pointer;

            svg {
                width: 100%;
                height: 100%;
            }
        }

        .textAnimeW {
            height: 400px;
            overflow-y: auto;
            padding-right: 5px;
            transition: all 400ms linear;

            &::-webkit-scrollbar {
                width: 10px;
                border-radius: 100px;
                background: #27323E;


            }

            &::-webkit-scrollbar-thumb {
                background: linear-gradient(90deg, #FC4A1A 0%, #F7B733 100%);
                border-radius: 100px;

                &:active {
                    background: linear-gradient(#FC4A1A 100%, #F7B733 10%);
                }
            }

            p {
                color: #FFF;
                font-family: Roboto, sans-serif;
                font-size: 17px;
                font-style: normal;
                font-weight: normal;
                line-height: normal;
            }
        }

        .head {
            margin: 50px 0 20px 0;
            text-align: center;

            h5 {
                color: #FFF;
                font-family: Roboto, sans-serif;
                font-size: 28px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            }
        }


    }
}

.activeSlid1 {

    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 95%;
    display: flex;
    box-shadow: 10px 10px 10px 2px rgba(0, 0, 0, 0.476) inset;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
    background-size: cover;
    transform: translate(-50%, -50%);
}

@media screen and (max-width: 748px) {
    .content {
        width: 100% !important;
    }
    .textAnimeW{
        border-top: 2px solid #27323E;
        border-bottom: 2px solid #27323E;
    }

    .head {
        text-align: start !important;

        h5 {
            font-size: 20px !important;
        }
    }

}

@media screen and (max-width: 455px) {
    .content {
        flex-direction: column-reverse !important;

        .left {
            width: 100%;
            height: 50%;

            .head {
                height: 50px;
                margin-top: 25px;

                h5 {
                    font-size: 16px !important;
                    line-height: 25px;
                }
            }
        }

        .right {
            height: 50%;
            width: 100% !important;
        }

        img {
            object-fit: cover !important;
        }
    }

}

</style>
  