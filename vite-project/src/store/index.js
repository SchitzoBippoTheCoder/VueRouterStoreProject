import { defineStore } from 'pinia';

export const indexStore = defineStore("main", {
    state: () => ({
        movieItems: [],
    }),
    getters: {

    },
    actions: {
    }
})

// Methods can also be async
// Learn getters - modify state variables without actually changing them 
