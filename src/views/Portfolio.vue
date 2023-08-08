<template>
    <div :class="{ wrapperWindow: this.wrappStore.status }">
        <TopButtton/>
        <div id="top"/>
        <HeaderVue  />
        <Mainpage id="main"  />
        <AboutMe id="aboutme" />
        <MYskill id="mySkills" />
        <Anime id="anime" />
        <Images id="image" />
        <FooterVue id="contacts" />
      
    </div>
</template>

<script>

import { mapStores } from "pinia";
import { useWrappStore } from "../store/wrapp";
import TopButtton from "../components/TopButtton.vue";
import MYskill from "../components/MYskill.vue";
import AboutMe from "../components/AboutMe.vue";
import HeaderVue from "../components/HeaderVue.vue";
import Mainpage from "../components/MainPage.vue";
import Anime from "../components/Anime.vue";
import Images from "../components/Images.vue";
import FooterVue from "../components/FooterVue.vue";
export default {
    components: {

        HeaderVue,
        Mainpage,
        AboutMe,
        MYskill,
        Anime,
        Images,
        FooterVue,
        TopButtton
    },
    computed: {
        ...mapStores(useWrappStore)
    }




}
</script>

<style lang="scss" scoped></style>