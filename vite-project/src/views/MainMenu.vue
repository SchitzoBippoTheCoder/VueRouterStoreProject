<template>
    <h1>Hunters No More</h1>
    <p>Predator or Prey - Who will you be?</p>
    <br>
    <p class="storyLine">On this unfortunate night, a </p>
    <select id="classOptions" ref="classInput">
        <option>Brute</option>
        <option>Diseased</option>
        <option>Thief</option>
        <option>Fraud</option>
        <option>Forgotten One</option>
    </select>
    <p class="storyLine"> named </p>
    <input type="text" placeholder="..." ref="nameInput" id="nameInput" maxlength="16">
    <br>
    <br>
    <input type="button" value="Joined the Hunt" @click="setUser()">
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

function setUser(){
    if (nameInput.value.value == null || nameInput.value.value == ""){

    }
    else{
        index.setUser(nameInput.value.value, classInput.value.value);
        router.push("./playerStats");
    }    
}

</script>

<style>
    .storyLine{
        display: inline;
    }

    #nameInput{
        text-align: center;

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
    #classOptions{
        border-bottom-style: solid;
        border-bottom-width: 1.25px;
        border-bottom-color: black;
        border-left-color: transparent;
        border-top-color: transparent;
        border-right-color: transparent;
    }
</style>