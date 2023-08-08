<template>
    <div class="topbutton" v-if="scrolllY >= 600" >
        <a href="#top" @click="adw">
            <svg viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 32 32">
                <path d="M7 12.6h5.5V29h7V12.6H25L16 3l-9 9.6zm11.5-1V28h-5V11.6H9.3L16 4.5l6.7 7.1h-4.2z" id="Layer_51"
                    fill="#ffffff" class="fill-000000"></path>
            </svg>
        </a>
    </div>
</template>

<script>
export default {
    methods: {
        scrolll() {
        
            window.addEventListener('scroll',()=>{
              this.scrolllY = window.scrollY
            })
        },
     
    },
    data() {
        return {
            scrolllY: 0
        }
    },
    mounted() {
        this.scrolll()
    }
}
</script>

<style lang="scss" scoped>
*{
    overflow: hidden;
}
.topbutton {
    width: 55px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(109deg, #FC4A1A 0%, #F7B733 100%);
    position: fixed;
    bottom: 10px;
    left: 10px;
    z-index: 9999;
    border-radius: 50%;
    box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, 0.459);
    transition: all 400ms linear;
    &:hover {
            background: linear-gradient(#FC4A1A 100%, #F7B733 10%);
            filter: drop-shadow(0 0 10px #FC4A1A) contrast(2) brightness(2);
        }

    a {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        transition: all 400ms;
       
        &:active{
            padding-bottom: 100%;
        }

        svg {
            width: 90%;
            height: 90%;

        }

    }

}
</style>