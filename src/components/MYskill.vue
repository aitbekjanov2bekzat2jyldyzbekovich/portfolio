<template>
    <div class="bacrSkill">
        <div class="modal" v-if="status">
            <img :src="SkillImage">
            <button @click="status = false">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="m7 7 18 18M7 25 25 7" fill="none" stroke="#ffffff" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="2px" class="stroke-000000"></path>
                </svg>
            </button>
        </div>
        <div class="conteiner">
            <div class="inConteiner">
                <section>
                    <div class="skilHead">
                        <div class="wraperHEad">
                            <div class="oreng" />
                            <h3>{{ skillHead }}</h3>
                        </div>

                    </div>
                    <article>
                        <div class="leftskil">
                            <div class="cardscill" v-for="i in mySkills.left">
                                <div class="cardcont">
                                    <h5>{{ i.name }}</h5>
                                    <p ref="textAnime">{{ i.text }}</p>
                                </div>
                                <div class="cardlogo">
                                    <div class="logo">
                                        <div class="swg">
                                            <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                                <title />
                                                <g data-name="49-Responsive" id="_49-Responsive">
                                                    <path
                                                        d="M45,0H3A3,3,0,0,0,0,3V35a3,3,0,0,0,3,3H16v4.28l-2.32.77A1,1,0,0,0,13,44v2H11v2H28V46H15V44.72L17.16,44H28V42H18V38H28V36H3a1,1,0,0,1-1-1V29H28V27H2V3A1,1,0,0,1,3,2H45a1,1,0,0,1,1,1V18h2V3A3,3,0,0,0,45,0Z" />
                                                    <path
                                                        d="M46,20H32a2,2,0,0,0-2,2V46a2,2,0,0,0,2,2H46a2,2,0,0,0,2-2V22A2,2,0,0,0,46,20Zm0,26H32V43H46Zm0-5H32V27H46Zm0-16H32V22H46Z" />
                                                </g>
                                            </svg>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="imageSkill">
                            <img :src="SkillImage" @click="status = true">
                        </div>
                        <div class="leftskil rightc">
                            <div class="cardscill" v-for="i in mySkills.right">

                                <div class="cardlogo">
                                    <div class="logo">
                                        <div class="swg">
                                            <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                                <title />
                                                <g data-name="49-Responsive" id="_49-Responsive">
                                                    <path
                                                        d="M45,0H3A3,3,0,0,0,0,3V35a3,3,0,0,0,3,3H16v4.28l-2.32.77A1,1,0,0,0,13,44v2H11v2H28V46H15V44.72L17.16,44H28V42H18V38H28V36H3a1,1,0,0,1-1-1V29H28V27H2V3A1,1,0,0,1,3,2H45a1,1,0,0,1,1,1V18h2V3A3,3,0,0,0,45,0Z" />
                                                    <path
                                                        d="M46,20H32a2,2,0,0,0-2,2V46a2,2,0,0,0,2,2H46a2,2,0,0,0,2-2V22A2,2,0,0,0,46,20Zm0,26H32V43H46Zm0-5H32V27H46Zm0-16H32V22H46Z" />
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="cardcontRight">
                                    <h5>{{ i.name }}</h5>
                                    <p>{{ i.text }}</p>
                                </div>
                            </div>
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
            status: false,
            skillHead: "",
            SkillImage: "",
            mySkills: {
                left: [],
                right: []
            }
        }
    },
    computed: {
        ...mapStores(useContentStore)
    },
    methods: {
        async getSkill() {
            await this.contentStore.getCont()
            this.skillHead = this.contentStore.skills.head
            this.SkillImage = this.contentStore.skills.image
            this.mySkills.left = this.contentStore.skills.leftSckills
            this.mySkills.right = this.contentStore.skills.rightscills
        }
        
    },
    mounted() {
        this.getSkill()
    }

}
</script>

<style lang="scss" scoped>
* {
    overflow: hidden;
}

svg {
    width: 40px;
    height: 40px;
    fill: #FFF;
}

.bacrSkill {
    height: 720px;
    background: #27323E;
}

section {
    width: 100%;
    height: 100%;

    .skilHead {
        width: 100%;
        height: 100px;
        display: flex;
        align-items: end;
        justify-content: center;

        .wraperHEad {
            position: relative;
            width: 400px;
            padding-left: 11px;


            h3 {
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
                border-radius: 50% 50%;
                background: linear-gradient(109deg, #FC4A1A 0%, #F7B733 100%);
                position: absolute;
                left: 0%;
                top: 0;

            }

        }
    }

    article {
        width: 100%;
        height: 620px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .leftskil {
            display: flex;
            justify-content: space-evenly;
            flex-direction: column;
            width: 30%;
            height: 100%;

            .cardscill {
                display: flex;

                .cardcont {
                    width: 80%;
                    padding-right: 10px;

                    h5 {
                        color: #FFF;
                        text-align: right;
                        font-family: Roboto, sans-serif;
                        font-size: 28px;
                        font-style: normal;
                        font-weight: 700;
                        line-height: normal;
                        margin-bottom: 10px;

                    }

                    p {
                        color: #FFF;
                        text-align: right;
                        font-family: Roboto, sans-serif;
                        font-size: 18px;
                        font-style: normal;
                        font-weight: 700;
                        line-height: normal;
                    }

                }

                .cardlogo {
                    width: 20%;

                    .logo {
                        width: 100%;
                        height: 68px;
                        flex-shrink: 0;
                        border-radius: 50% 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: linear-gradient(#FC4A1A, #F7B733);
                        cursor: pointer;

                        .swg {
                            width: 65px;
                            height: 65px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            border-radius: 50% 50%;
                            background-color: #27323E;

                        }

                    }
                }
            }
        }

        .imageSkill {
            height: 510px;
            border-radius: 20px;
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

            img {
                height: 100%;
                object-fit: cover;
                cursor: pointer;
            }
        }
    }

}

.cardcontRight {
    width: 80%;
    padding-left: 10px;

    h5 {
        color: #FFF;
        text-align: left;
        font-family: Roboto, sans-serif;
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 10px;
    }

    p {
        color: #FFF;
        text-align: left;
        font-family: Roboto, sans-serif;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

}

.modal {
    width: 50%;
    height: 50%;
    position: fixed;
    z-index: 2;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border-radius: 15px;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
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
        max-height: 100%;
        object-fit: cover;

    }
}

@media screen and (max-width: 1027px) {
    .imageSkill {
        margin: 0 10px !important;
    }
}

@media screen and (max-width: 910px) {
    .skilHead {
        align-items: center !important;
    }

    .cardlogo {
        width: 0% !important;
    }

    .cardcont {
        width: 100% !important;
    }

    .cardcontRight {
        width: 100% !important;
    }
}

@media screen and (max-width: 782px) {
    .leftskil {
        justify-content: start !important;
    }

    .cardscill {
        margin-bottom: 20px;
    }

}

@media screen and (max-width: 550px) {
    .rightc {
        display: none !important;
    }

    .imageSkill {
        width: 50%;
    }

    .leftskil {
        width: 50% !important;
    }
}

@media screen and (max-width: 352px) {
    h3 {
        font-size: 40px !important;
    }

    .oreng {
        width: 45px !important;
        height: 45px !important;
    }
}

@media screen and (max-width: 306px) {
    h5 {
        font-size: 20px !important;
    }

    p {
        font-size: 13px !important;
    }

    h3 {
        font-size: 35px !important;
    }

    .oreng {
        width: 40px !important;
        height: 40px !important;
    }
}
</style>