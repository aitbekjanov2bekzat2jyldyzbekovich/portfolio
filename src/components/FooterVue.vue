<template>
    <div class="footerBack">
        <div class="conteiner">
            <div class="inConteiner">
                <footer>
                    <article class="leftArt">
                        <div class="headers">
                            <div class="wrp">
                                <div class="oreng" />
                                <h6>{{ head }}</h6>
                            </div>

                        </div>
                        <div class="formWrp">
                            <form action="#">
                                <div class="bord">
                                    <input v-model="dataForm.firstName" type="text" class="Text" @input="statusI = false"
                                        :placeholder="forma.firstName">
                                </div>
                                <div class="bord">
                                    <input v-model="dataForm.lastName" type="text" class="Text" @input="statusI = false"
                                        :placeholder="forma.lastName">
                                </div>
                                <div class="bordEm">
                                    <input v-model="dataForm.email" type="text" class="Email" :placeholder="forma.email"
                                        @input="statusI = false">
                                </div>
                                <div class="bordEm1">
                                    <textarea v-model="dataForm.message" :placeholder="forma.message" />
                                </div>

                            </form>
                            <button @click="sended" :class="{
                                hov: dataForm.email.length
                                    && dataForm.firstName.length
                                    && dataForm.lastName.length
                            }">
                                <div class="lds-hourglass" v-if="reLoad" />
                                <span v-else>{{ forma.buttons }}</span>
                            </button>
                        </div>
                    </article>
                    <article class="righttArt">
                        <div class="cards">
                            <div class="cardHead">
                                <h6>{{ card.head }}</h6>
                            </div>
                            <div class="contnent">
                                <div class="logo">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none">
                                        <path
                                            d="M12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8ZM20.94 11C20.7135 8.97212 19.8042 7.08154 18.3613 5.63869C16.9185 4.19585 15.0279 3.28651 13 3.06V1H11V3.06C8.97212 3.28651 7.08154 4.19585 5.63869 5.63869C4.19585 7.08154 3.28651 8.97212 3.06 11H1V13H3.06C3.28651 15.0279 4.19585 16.9185 5.63869 18.3613C7.08154 19.8042 8.97212 20.7135 11 20.94V23H13V20.94C15.0279 20.7135 16.9185 19.8042 18.3613 18.3613C19.8042 16.9185 20.7135 15.0279 20.94 13H23V11H20.94ZM12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19Z"
                                            fill="white" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none">
                                        <g clip-path="url(#clip0_131_831)">
                                            <path
                                                d="M21.5533 3.99994C21.4625 3.99058 21.3709 3.99058 21.28 3.99994H2.61334C2.49371 4.00179 2.37486 4.01972 2.26001 4.05328L11.8933 13.6466L21.5533 3.99994Z"
                                                fill="white" />
                                            <path
                                                d="M22.54 4.92676L12.8333 14.5934C12.5835 14.8418 12.2455 14.9811 11.8933 14.9811C11.541 14.9811 11.2031 14.8418 10.9533 14.5934L1.33329 5.00009C1.30371 5.10878 1.28803 5.22079 1.28662 5.33342V18.6668C1.28662 19.0204 1.4271 19.3595 1.67715 19.6096C1.92719 19.8596 2.26633 20.0001 2.61995 20.0001H21.2866C21.6402 20.0001 21.9794 19.8596 22.2294 19.6096C22.4795 19.3595 22.62 19.0204 22.62 18.6668V5.33342C22.6146 5.19453 22.5877 5.05731 22.54 4.92676ZM3.53329 18.6668H2.60662V17.7134L7.45329 12.9068L8.39329 13.8468L3.53329 18.6668ZM21.2733 18.6668H20.34L15.48 13.8468L16.42 12.9068L21.2666 17.7134L21.2733 18.6668Z"
                                                fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_131_831">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none">
                                        <path
                                            d="M4.5 3C4.5 2.20435 4.81607 1.44129 5.37868 0.87868C5.94129 0.316071 6.70435 0 7.5 0L16.5 0C17.2956 0 18.0587 0.316071 18.6213 0.87868C19.1839 1.44129 19.5 2.20435 19.5 3V21C19.5 21.7956 19.1839 22.5587 18.6213 23.1213C18.0587 23.6839 17.2956 24 16.5 24H7.5C6.70435 24 5.94129 23.6839 5.37868 23.1213C4.81607 22.5587 4.5 21.7956 4.5 21V3ZM13.5 19.5C13.5 19.1022 13.342 18.7206 13.0607 18.4393C12.7794 18.158 12.3978 18 12 18C11.6022 18 11.2206 18.158 10.9393 18.4393C10.658 18.7206 10.5 19.1022 10.5 19.5C10.5 19.8978 10.658 20.2794 10.9393 20.5607C11.2206 20.842 11.6022 21 12 21C12.3978 21 12.7794 20.842 13.0607 20.5607C13.342 20.2794 13.5 19.8978 13.5 19.5Z"
                                            fill="white" />
                                    </svg>
                                </div>
                                <div class="right">
                                    <div v-for="i in card.information">
                                        <h6>{{ i.name }}</h6>
                                        <ul>
                                            <li><a :href="i.Link" target="_blank">{{ i.tetx }}</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </footer>
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
            head: "",
            card: {},
            forma: {},
            trueEmail: "",
            reLoad: false,
            ErrAlert: "",
            dataForm: {
                lastName: "",
                firstName: "",
                email: "",
                message: ""
            },


        }
    },
    methods: {
        async getContact() {
            await this.contentStore.getCont()
            this.head = this.contentStore.footerData.head
            this.card = this.contentStore.footerData.card
            this.forma = this.contentStore.footerData.form
            this.ErrAlert = this.contentStore.footerData.userElse

        },
        sended() {
            this.trueEmailed()
            if (this.dataForm.firstName.length
                && this.dataForm.lastName.length
                && this.dataForm.email.length > 10
                && this.dataForm.message.length
                && this.trueEmail === '@gmail.com') {
                this.reLoad = true
                setTimeout(() => {
                    this.reLoad = false
                    this.whatsupp()
                }, 3000);
            } else {
                this.dataForm.email = ''
                this.dataForm.firstName = ''
                this.dataForm.lastName = ''

                alert(this.ErrAlert)
            }
        },
        trueEmailed() {
            this.trueEmail = this.dataForm.email.slice(this.dataForm.email.length - 10)
        },

        whatsupp() {
            const mynuber = +996709963853
            let URL = `https://wa.me/${mynuber}?text=`
                + "*Firstname :* " + this.dataForm.firstName + "%0a"
                + "*Lastname :* " + this.dataForm.lastName + "%0a"
                + "*Email :* " + this.dataForm.email + "%0a"
                + "*Message :* " + this.dataForm.message;

            window.open(URL, '_blank').focus()


        },
        evenkey() {
            document.addEventListener('keydown', (event) => {
                if (event.keyCode === 13) {
                    this.sended()
                }
            })
        }



    },
    mounted() {
        this.getContact()
        this.evenkey()
    }
}
</script>

<style lang="scss" scoped>
* {
    overflow: hidden;
    text-decoration: none;
}

.footerBack {
    height: 720px;
    width: 100%;
    background: #212529;
}

footer {
    display: flex;
    justify-content: space-between;
    align-items: start;

    article {
        width: 50%;
        height: 720px;
    }

    .righttArt {
        display: flex;
        align-items: center;
        justify-content: center;


        .cards {
            width: 404px;
            flex-shrink: 0;
            border-radius: 7px;
            background: linear-gradient(90deg, #FC4A1A 0%, #F7B733 100%);

            .cardHead {
                height: 100px;
                display: flex;
                align-items: center;
                padding-left: 10%;

                h6 {
                    color: #FFF;
                    font-family: Roboto, sans-serif;
                    font-size: 18px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;

                }
            }

            .contnent {
                display: flex;
                height: 202px;

                .logo {
                    width: 10%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;


                    svg {
                        width: 24px;
                        height: 24px;
                        flex-shrink: 0;
                    }
                }

                .right {
                    width: 90%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;

                    h6 {
                        color: #FFF;
                        font-family: Roboto, sans-serif;
                        font-size: 18px;
                        font-style: normal;
                        font-weight: 700;
                        line-height: normal;
                        margin-bottom: 3px;
                    }

                    a {
                        color: #FFF;
                        font-family: Roboto, sans-serif;
                        font-size: 18px;
                        font-style: normal;
                        font-weight: 700;
                        line-height: normal;


                        &:hover {
                            text-decoration: underline;
                        }
                    }
                }
            }
        }
    }

    .leftArt {
        .headers {
            width: 100%;
            height: 100px;
            display: flex;
            align-items: end;

            .wrp {
                position: relative;
                padding-left: 15px;

                .oreng {
                    width: 55px;
                    height: 55px;
                    flex-shrink: 0;
                    position: absolute;
                    left: 0;
                    top: 0;
                    border-radius: 50% 50%;
                    background: linear-gradient(109deg, #FC4A1A 0%, #F7B733 100%);
                }
            }

            h6 {
                position: relative;
                z-index: 1;
                color: #FFF;
                font-family: Roboto, sans-serif;
                font-size: 50px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            }
        }

        .formWrp {
            width: 100%;
            height: 620px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            .hov {
                &:hover {
                    background: linear-gradient(#FC4A1A 100%, #F7B733 10%);
                    filter: drop-shadow(0 0 10px #FC4A1A) contrast(2) brightness(2);
                    cursor: pointer;
                }
            }

            button {
                width: 167px;
                height: 49px;
                flex-shrink: 0;
                margin: 0 auto;
                border-radius: 86.5px;
                background: linear-gradient(90deg, #FC4A1A 0%, #F7B733 100%);
                border: none;
                cursor: pointer;
                color: #FFF;
                font-family: Roboto, sans-serif;
                font-size: 18px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                transition: all 400ms;
                display: flex;
                align-items: center;
                justify-content: center;


                .lds-hourglass {
                    display: inline-block;
                    position: relative;
                    width: max-content;
                    height: max-content;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .lds-hourglass:after {
                    content: " ";
                    display: block;
                    border-radius: 50%;
                    width: 0;
                    height: 0;
                    margin: 8px;
                    box-sizing: border-box;
                    border: 20px solid #fff;
                    border-color: #fff transparent #fff transparent;
                    animation: lds-hourglass 2.2s infinite;
                }

                @keyframes lds-hourglass {
                    0% {
                        transform: rotate(0);
                        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
                    }

                    50% {
                        transform: rotate(900deg);
                        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
                    }

                    100% {
                        transform: rotate(1800deg);
                    }
                }



            }

            form {
                width: 80%;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;

                .bord {
                    width: 198px;
                    height: 55px;
                    flex-shrink: 0;
                    padding: 1px;
                    border-radius: 86.5px;
                    background: linear-gradient(#FC4A1A, #F7B733);
                    margin-bottom: 20px;


                }

                .bordEm {
                    width: 100%;
                    height: 55px;
                    background: linear-gradient(#FC4A1A, #F7B733);
                    margin-bottom: 20px;
                    border-radius: 86.5px;
                    padding: 1px;
                    margin-bottom: 20px;
                }

                .bordEm1 {
                    width: 100%;
                    background: linear-gradient(#FC4A1A, #F7B733);
                    margin-bottom: 20px;
                    border-radius: 20px;
                    padding: 1px;
                    margin-bottom: 20px;
                    height: 188px;

                }

                textarea {
                    padding: 20px 20px;
                    border-radius: 20px;
                    flex-shrink: 0;
                    outline: none;
                    width: 100%;
                    height: 100%;
                    color: #FFF;
                    font-family: Roboto, sans-serif;
                    font-size: 18px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                    border: none;
                    background-color: #212529;
                    resize: none;
                    transition: all 400ms linear;

                    &::placeholder {
                        color: #7A7A7A;
                    }

                    &:focus {
                        background: linear-gradient(#FC4A1A, #F7B733);
                        border: 2px solid #FFF;
                        color: #FFF;

                        &::placeholder {
                            color: #FFF;
                        }
                    }
                }

                input {
                    color: #FFF;
                    font-family: Roboto, sans-serif;
                    font-size: 18px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                    outline: none;
                    padding: 0 20px;
                    border-radius: 86.5px;
                    background-color: #212529;
                    border: none;
                    width: 100%;
                    height: 100%;
                    transition: all 400ms linear;

                    &::placeholder {
                        color: #7A7A7A;
                    }

                    &:focus {
                        background: linear-gradient(#FC4A1A, #F7B733);
                        border: 2px solid #FFF;
                        color: #FFF;

                        &::placeholder {
                            color: #FFF;
                        }
                    }
                }
            }
        }
    }
}

.valed {
    border: 2px solid red !important;

    &::placeholder {
        color: red !important;
    }
}
@media screen and (max-width: 850px) {
    .cards{
        width: 100% !important;
    }
}
@media screen and (max-width: 605px) {
    .wrp{
        .oreng{
            width: 45px !important;
            height: 45px !important;
        }
        h6{
            font-size: 40px !important;
        }
    }
}
@media screen and (max-width: 530px) {
    a{
        font-size: 15px !important  ;
    }
    .leftArt{
        width: 100% !important;
        height: 40% !important;
        display: flex none !important;
    }
    .formWrp{
        height: 100% !important;
    }
    .headers{
        height: 10% !important;
        margin: 20px 0;
    }
    .righttArt{
        width: 100%;
        height: 50%;
        padding: 20px 0;
        margin: 0 !important;

        .cardHead{
            height: 50px !important;
        }
        .cards{
            height: 90% !important;
        }
    }
    form{
        width: 100% !important;
        height: 50% !important;
    }
    .bord{
        height: 45px !important;
    }
    .bordEm{
        height: 45px !important;
    }
    .bordEm1{
        height: 70px !important;
    }


    footer{
        flex-direction: column;
        justify-content: space-between;
        
    }
    }

</style>