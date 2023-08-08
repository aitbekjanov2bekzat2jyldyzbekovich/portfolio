<template>
    <Navbar/>
    <div class="headerBacr">
        <div class="conteiner">
            <header>
                <Logo />
                <button @click="open">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                        <circle cx="32" cy="32" r="32" fill="url(#paint0_linear_124_219)" />
                        <rect x="15" y="20" width="33" height="7" rx="3.5" fill="white" />
                        <rect x="10" y="29" width="43" height="7" rx="3.5" fill="white" class="r2" />
                        <rect x="15" y="38" width="33" height="7" rx="3.5" fill="white" />
                    </svg>
                </button>
            </header>
        </div>
    </div>
</template>
<script>
import { mapStores } from 'pinia';
import { useWrappStore } from '../store/wrapp';
import Navbar from './Navbar.vue';
import Logo from '../components/LogoBeka.vue'
export default {
    components: {
        Logo,
        Navbar
    },
    computed: {
        ...mapStores(useWrappStore)
    },
    methods: {
        open() {
            this.wrappStore.status = true
            setTimeout(() => {
                this.wrappStore.navStatus = true
            }, 1)
        },
        
    }
}
</script>
<style lang="scss" scoped>
header {
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        width: 64px;
        height: 64px;
        flex-shrink: 0;
        border-radius: 49.5% 49.5%;
        border: none;
        text-align: center;
        cursor: pointer;
        background: linear-gradient(90deg, #FC4A1A 0%, #F7B733 100%);
        overflow: hidden;
        transition: all 400ms linear;

        &:active {
            rect {
                width: 0px;
                transition: all 400ms linear;
            }
        }

        &:hover {
            background: linear-gradient(#FC4A1A 100%, #F7B733 10%);
            filter: drop-shadow(0 0 10px #FC4A1A) contrast(2) brightness(2);
            margin-right: 10px;



            .r2 {
                width: 0;
                transition: all 400ms linear;

            }


        }
    }
}


.headerBacr {
    background: #27323E;
}
</style>