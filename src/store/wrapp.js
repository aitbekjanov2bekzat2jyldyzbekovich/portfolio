import { defineStore } from 'pinia'
export const useWrappStore = defineStore('wrapp', {
    state: () => ({
        status: false,
        navStatus: false,
       
    })
})