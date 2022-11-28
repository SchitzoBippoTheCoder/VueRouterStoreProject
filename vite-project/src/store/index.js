import { defineStore } from 'pinia';

export const indexStore = defineStore("main", {
    state: () => ({
        username: "nullPlayer",
    }),
    actions: {
        setName(name){
            this.username = name;
        }
    }
})

// Methods can also be async
// Learn getters - modify state variables without actually changing them 
