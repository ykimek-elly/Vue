<script setup>
import PropsNumber from '../components/main/propsEx/PropsNumber.vue';
import PropsObject from '../components/main/propsEx/PropsObject.vue';
import { travelCards } from "../data/data.js"



</script>

<template>
    <h2>💥props 란?</h2>
    <h3>객체를 자식에게 전달</h3>
    <PropsObject :data="travelCards[0]" />

    <br><br><br>

    <h3>숫자 7을 자식에게 전달!</h3>
    <PropsNumber :num="7" />
    <br><br><br>

    
</template>

<style scoped>
    
</style>
