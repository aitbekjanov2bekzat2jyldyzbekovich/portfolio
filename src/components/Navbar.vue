<template>
    <div class="wrapper" v-if="this.wrappStore.status">
        <button class="closed" @click="close" :class="{ clos: this.wrappStore.navStatus === false }">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="m7 7 18 18M7 25 25 7" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2px" class="stroke-000000"></path>
            </svg>
        </button>
        <div class="navBar" :class="{ open: this.wrappStore.navStatus === true }">
            <div class="navConteiner">
                <div class="lang">
                    <span :class="{ active: statusRu }" @click="ruEn('ru')">{{
                        this.contentStore.headCont.language.russ }}</span>
                    <span :class="{ active: statusEn }" @click="ruEn('en')">{{
                        this.contentStore.headCont.language.eng }}
                    </span>
                </div>
                <nav>
                    <ul v-for="i in this.contentStore.headCont.navbar">
                        <li @click="yakor(i.link)">
                            <a :class="{
                                ya: this.$route.hash === i.link
                                    && datascrol >= 600
                                    || datascrol < i.id
                            }" :href="`${i.link}`">
                                {{ i.name }}
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
import { mapStores } from 'pinia';
import { useContentStore } from '../store/content';
import { useWrappStore } from '../store/wrapp';

export default {
    computed: {
        ...mapStores(useContentStore, useWrappStore)
    },
    data() {
        return {
            statusEn: false,
            statusRu: true,
            datascrol: 0

        }
    },

    methods: {
        close() {
            this.wrappStore.navStatus = false
            setTimeout(() => {
                this.wrappStore.status = false
            }, 401);
        },
        ruEn(type) {
            if (type === 'en' && localStorage.length === 2) {
                localStorage.clear()
                localStorage.setItem('URl', 'http://localhost:3000/english')
                location.reload()


            }
            if (type === 'ru' && localStorage.length === 1) {
                localStorage.clear()
                localStorage.setItem('URl', 'http://localhost:3000/russian')
                location.reload()
                localStorage.setItem('blok', 'b')
            }
        },
        render() {
            let URL = localStorage.getItem("URl")
            this.contentStore.URL = URL
            if (localStorage.length === 1) {
                this.statusEn = true
                this.statusRu = false
            } if (localStorage.length === 2) {
                this.statusEn = false
                this.statusRu = true
            }

        },
        yakor() {
            this.wrappStore.navStatus = false
            this.wrappStore.status = false

        },
        scrolll() {
            window.addEventListener('scroll', () => {
                this.datascrol = window.scrollY
            })
        },
    },
    mounted() {
        this.render()
        this.scrolll()
    }
}
</script>

<style lang="scss" scoped>
* {
    overflow: hidden;
}

.wrapper {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.34);
    position: fixed;
    z-index: 1;

    .navBar {
        width: 300px;
        height: 629px;
        background: linear-gradient(109deg, #FC4A1A 0%, #F7B733 100%);
        transition: all 400ms linear;
        position: absolute;
        top: 0;
        right: -300px;
        -webkit-box-shadow: -9px 4px 8px 0px rgba(34, 60, 80, 0.2);
        -moz-box-shadow: -9px 4px 8px 0px rgba(34, 60, 80, 0.2);
        box-shadow: -9px 4px 8px 0px rgba(34, 60, 80, 0.2);

        .navConteiner {
            width: 250px;
            margin: 56px auto;

            nav {

                ul {
                    li a {
                        height: 55px;
                        display: flex;
                        align-items: center;
                        font-family: Roboto, sans-serif;
                        font-size: 20px;
                        padding-left: 20px;
                        border-bottom: 1px solid #fff;
                        cursor: pointer;
                        color: #fff;
                        transition: all 400ms linear;
                        text-decoration: none;
                        margin-bottom: 5px;

                        &:hover {
                            background-color: #fff;
                            color: #FC4A1A;
                            border-radius: 20%;
                            border-radius: 15px 50px;
                        }

                        &:active {
                            border-radius: 15px;
                            opacity: 50%;
                        }

                    }

                    .ya {
                        background-color: #fff;
                        color: #FC4A1A;
                        border-radius: 15px;
                    }
                }
            }

            .lang {
                width: 100%;
                height: 55px;
                margin-bottom: 10px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 55px;

                .active {
                    color: #fff;
                    border-bottom: 2px solid #fff;
                }

                span {
                    line-height: 30px;
                    font-family: Roboto, sans-serif;
                    font-weight: 700;
                    font-size: 19px;
                    color: #ffffff5a;
                    cursor: pointer;
                    transition: all 400ms linear;

                    &:hover {
                        color: #fff;
                    }
                }
            }
        }
    }
}

.closed {
    width: 55px;
    height: 55px;
    position: absolute;
    top: 0;
    right: 300px;
    transition: all 400ms linear;
    background: linear-gradient(109deg, #FC4A1A 0%, #F7B733 100%);
    border: none;
    cursor: pointer;

    &:hover {
        border-radius: 50%;
        transform: rotate(180deg);
    }

    &:active {
        transform: scale(0.80);
    }
}

.clos {
    position: absolute !important;
    top: 0;
    right: -300px;
    transition: all 400ms linear !important;
}

.open {
    position: absolute !important;
    top: 0;
    right: 0 !important;
    transition: all 400ms linear !important;
}



@media screen and (max-width: 400px) {
    .navBar {
     height: 600px !important;
    }
}

@media screen and (max-width: 320px) {
    .navBar {
        width: 100% !important;
        
    }

    .closed {
        left: 0;
        z-index: 1;
    }

    .clos {
        left: -100% !important;
    }
}
</style>