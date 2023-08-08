<template>
    <div class="Logotip" @click="reloadPage">
        <span>
            {{ dataLogo.beka }}
        </span>
        <span class="studios">{{ dataLogo.studio }}</span>
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
            dataLogo: {}
        }
    },
    methods: {
        async getLogo() {
            await this.contentStore.getCont()
            this.dataLogo = this.contentStore.headCont.logo
        },
        reloadPage() {
            location.reload();
        }
       
    },
    mounted() {
        this.getLogo()
    }


}

</script>

<style lang="scss" scoped>
 .Logotip {
    cursor: pointer;
        span {
            color: #FFF;
            font-family: Roboto, sans-serif;
            font-size: 22px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
        }

        .studios {
            background: linear-gradient(90deg, #FC4A1A 0%, #F7B733 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
</style>