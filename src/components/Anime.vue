<template>
    <div class="bacrAnime">
        <div class="conteiner">
            <section>
                <div class="headerA">
                    <div class="wrapper">
                        <div class="oreng" />
                        <h4>{{ faforite }}</h4>
                    </div>
                </div>
                <article>
                    <AnimeSwiper />
                </article>
            </section>
        </div>
    </div>
</template>

<script>

import { mapStores } from "pinia";
import { useContentStore } from "../store/content"
import AnimeSwiper from "../components/AnimeSwiper.vue"
export default {
    data() {
        return {
            faforite: ""
        }
    },
    components: { AnimeSwiper },
    computed: {
        ...mapStores(useContentStore)
    },
    methods: {
        async getAnime() {
            await this.contentStore.getCont()
            this.faforite = this.contentStore.hobi.head

        }
    },
    mounted() {
        this.getAnime()
    }
}
</script>

<style lang="scss" scoped>
* {
    overflow: hidden;
}


.bacrAnime {
    width: 100%;
    height: 720px;
    background: #212529;

    .headerA {
        width: 100%;
        height: 100px;
        display: flex;
        align-items: end;
        justify-content: center;
        margin-bottom: 50px;

        .wrapper {
            position: relative;

            h4 {
                color: #FFF;
                font-family: Roboto, sans-serif;
                font-size: 50px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                z-index: 1;
                position: relative;
                padding-left: 15px;
            }

            .oreng {
                border-radius: 50% 50%;
                background: linear-gradient(109deg, #FC4A1A 0%, #F7B733 100%);
                position: absolute;
                width: 55px;
                height: 55px;
            }

        }
    }
}
@media screen and (max-width: 465px) {
    h4{
        font-size: 40px !important;
    }
    .oreng{
        width: 45px !important;
        height: 45px !important;
    }
}
@media screen and (max-width: 382px) {
    h4{
        font-size: 30px !important;
    }
    .oreng{
        width: 35px !important;
        height: 35px !important;
    }
}
@media screen and (max-width: 300px) {
    h4{
        font-size: 25px !important;
    }
    .oreng{
        width: 30px !important;
        height: 30px !important;
    }
}
</style>