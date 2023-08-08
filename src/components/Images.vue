<template>
    <div class="imageBacr">
        <div class="conteiner">
            <div class="inConteiner">
                <section>
                    <div class="heads">
                        <div class="wrapper">
                            <div class="oreng" />
                            <h5>{{ head }}</h5>
                        </div>

                    </div>
                    <article>
                        <div class="imgwrapper">
                            <img v-for="i in gotImg" :src="i.image" :class="`i${i.id}`" />
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
    data() {
        return {
            gotImg: [],
            head: ""
        }
    },
    computed: {
        ...mapStores(useContentStore)
    },
    methods: {
        async getImg() {
            await this.contentStore.getCont()
            this.gotImg = this.contentStore.images.imge
            this.head = this.contentStore.images.head
        }
    },
    mounted() {
        this.getImg()
    }
}
</script>

<style lang="scss" scoped>
.imageBacr {
    width: 100%;
    height: 720px;
    background: #27323E;
}

.i5 {
    position: absolute;
    right: 0;
    margin-right: 0 !important;
    bottom: 0;
}

.i2 {
    opacity: 0;
}


* {
    overflow: hidden;
}

article {
    width: 100%;
    height: 620px;
    display: flex;
    align-items: center;
    justify-content: center;


    .imgwrapper {
        display: flex;
        width: 477px;
        transform: rotate(-45deg);
        position: relative;
        flex-wrap: wrap;
        margin-bottom: 230px;
        transition: all 500ms linear;


        img {
            width: 150px;
            height: 150px;
            margin: 5px;
            flex-shrink: 0;
            transition: all 500ms;

            &:hover {
                transform: scale(2);
                cursor: pointer;
                z-index: 1;

            }
        }

    }

}

.heads {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: end;
    justify-content: center;

    .wrapper {
        position: relative;
        padding-left: 10px;

        .oreng {
            width: 55px;
            height: 55px;
            position: absolute;
            border-radius: 50% 50%;
            top: 0;
            left: 0;
            background: linear-gradient(109deg, #FC4A1A 0%, #F7B733 100%);
        }

        h5 {
            color: #FFF;
            font-family: Roboto, sans-serif;
            font-size: 50px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            position: relative;
            z-index: 1;
        }
    }
}

@media screen and (max-width: 710px) {
    .imgwrapper {
        transform: none !important;
        margin: 0 !important;
        width: 90% !important;   
        justify-content: center;
    }
    img {
        position: relative !important;
        margin: 0 10px 10px 0 !important;
        opacity: 100% !important;
    }
    .i2{
        display: none;
    }
}
@media screen and (max-width: 392px) {
    img{
        width: 100px !important; 
        height: 100px !important;
    }
    h5{
        font-size: 40px !important;
    }
    .oreng{
        width: 45px !important;
        height: 45px !important;
    }
}
@media screen and (max-width: 289px) {
  .imgwrapper{
        flex-direction: column !important;
        height: 90% !important;
        justify-content: space-between;
  }
  img{
    width: 100% !important;
    object-fit: cover !important;
    
    margin: 0 !important;
  }
}
@media screen and (max-width: 308px) {
    h5{
        font-size: 30px !important;
    }
    .oreng{
        width: 35px !important;
        height: 35px !important;
    }
}
</style>