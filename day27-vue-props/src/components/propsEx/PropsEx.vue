<script setup>

// 동작
// 1. 이미지 import 하기
import travel1 from "../../assets/travel1.jpg";
import travel2 from "../../assets/travel2.jpg";
import travel3 from "../../assets/travel3.jpg";
import travel4 from "../../assets/travel4.jpg";
import TravalCard from "./TravalCard.vue";

</script>

<template>
<!-- 화면 -->
  <h2>🛫여행지</h2>
    <section class = "travel-sectrion">
        <TravelCard :image="travel1" 
                     country="대한민국"
                     capital="서울"/>

        <TravelCard :image="travel2" 
                     country="프랑스"
                     capital="파리"/>

        <TravelCard :image="travel3" 
                     country="미국"
                     capital="워싱턴"/>

        <TravelCard :image="travel4" 
                     country="영국"
                     capital="런던"/>
   
    </section>
</template>

<style scoped>
/* 디자인 */

 .travel-sectrion{
    display: flex;
    justify-content: space-between;
 }
 

</style>