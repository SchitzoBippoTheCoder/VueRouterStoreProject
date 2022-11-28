<template>
    <h1>Player Stats</h1>
</template>

<script setup>
</script>
    import { storeToRefs } from 'pinia';
    import { indexStore } from "./store/index.js";

    const index = indexStore();

    const { username } = storeToRefs(index)

    index.setName("Samuel");

    console.log(username);
<style>

</style>