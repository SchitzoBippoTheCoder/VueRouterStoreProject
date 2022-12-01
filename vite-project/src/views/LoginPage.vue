<template>
    <div id="backgroundImage"></div>
    <Header title="Welcome to The Box" tagline="What will YOU find today?" button-value="..."></Header>
    <form @submit="preventDefault()" id="loginContainer">
        <label class="loginLabel">Username:</label>
        <br>
        <input type="text" ref="username" placeholder="Username" class="userInput">
        <br>
        <label class="loginLabel">Password:</label>
        <br>
        <input type="password" ref="password" placeholder="Password" class="userInput">
        <br>
        <input type="submit" value="LOGIN" @click="checkLogin()" id="loginButton">
    </form>
    <Footer message1="The Box" message2="Copyright © 2022 The Box, Inc." id="footer"></Footer>
</template>

<script setup>
import { ref } from "vue";
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"

const username = ref("");
const password = ref("");

function checkLogin() {
    if (username.value.value != "tmdb" && password.value.value != "movie") {
        alert("Incorrect Username or Password");
    }

    else {
        alert("Correct");
    }
}

</script>

<style>
#backgroundImage {
        position: absolute;

        top: 0px;
        left: 0px;

        z-index: -1;

        height: 100%;
        width: 100%;
        background-image: url('../assets/movieBackground.jpg');
        background-size: cover;

        filter: brightness(25%);
}

#loginContainer{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

#loginButton{
    outline: transparent;
    border-color: transparent;

    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-style: normal;
    font-weight: normal;

    vertical-align: middle;

    background-color: black;
    color: white;

    height: 25px;
    width: 100px;

    letter-spacing: 2px;
}

#loginButton:hover{
    border-style: solid;
    border-color: white;
    border-width: 2px;
}

.userInput{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-style: normal;
    font-weight: bold;

    height: 35px;
    width: 400px;

    margin-top: 10px;
    margin-bottom: 10px;

    padding-left: 7px;

    border-style: none;
}

.loginLabel{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-style: normal;
    font-weight: bold;

    letter-spacing: 1px;

    color: white;
}

#footer{
        position: absolute;

        bottom: 0px;

        margin-bottom: 20px;
}
</style>