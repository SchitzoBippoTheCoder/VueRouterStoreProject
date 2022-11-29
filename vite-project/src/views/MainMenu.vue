<template>
    <h1>Hunters No More</h1>
    <p>Predator or Prey - Who will you be?</p>
    <br>
    <div id="ticketContainer">
        <input type="text" placeholder="..." ref="nameInput" id="nameInput" maxlength="16">
        <p class="storyLine"> the </p>
        <select id="classOptions" ref="classInput">
            <option>Brute</option>
            <option>Diseased</option>
            <option>Thief</option>
            <option>Fraud</option>
            <option>Forgotten One</option>
        </select>
        <p class="storyLine"> has joined the hunt ...</p>
        <br>
        <br>
        <input type="button" value="Submit your Ticket" @click="setUser()">
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { indexStore } from "../store/index.js";
import { ref } from 'vue';
import router from '../router';

const nameInput = ref("");
const classInput = ref("");

const index = indexStore();

const { username } = storeToRefs(index)

function setUser() {
    if (nameInput.value.value == null || nameInput.value.value == "") {

    }
    else {
        index.setUser(nameInput.value.value, classInput.value.value);
        router.push("./playerStats");
    }
}

</script>

<style>
#ticketContainer {
    border-style: solid;
    border-width: 2px;

    padding-left: 10px;
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;

    /*margin-left: 100px;*/
}

.storyLine {
    display: inline;
}

#nameInput {
    text-align: right;

    border-bottom-style: solid;
    border-bottom-width: 1.25px;
    border-bottom-color: black;
    border-left-color: transparent;
    border-top-color: transparent;
    border-right-color: transparent;

    margin-left: 5px;
    width: 115px;
    outline-color: transparent;
    background-color: transparent;
}

#classOptions {
    margin-left: 5px;
    margin-right: 5px;

    border-bottom-style: solid;
    border-bottom-width: 1.25px;
    border-bottom-color: black;
    border-left-color: transparent;
    border-top-color: transparent;
    border-right-color: transparent;


    appearance: none;

    padding-left: 5px;
    padding-right: 3px;
}
</style>