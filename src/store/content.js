import { defineStore } from 'pinia'
export const useContentStore = defineStore('content', {
    state: () => ({
        headCont: {},
        mainPage: {},
        aboutMe: {},
        skills: {},
        hobi: {},
        images: {},
        footerData: {},
        URL: '',
      


    }),
    actions: {
        async getCont() {
            const ress = await fetch(this.URL)
            const response = await ress.json()
            this.headCont = response.headers
            this.mainPage = response.mainpage
            this.aboutMe = response.aboutme
            this.skills = response.skills
            this.hobi = response.hobbi
            this.images = response.imges
            this.footerData = response.contacts




        }
    }
})