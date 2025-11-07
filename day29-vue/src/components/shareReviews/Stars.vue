<script setup>
import { ref } from 'vue';

// 클릭으로 확정된 별점(지속!)
let rating = ref(0);
// 마우스가 올려진 동안만 유지되는 임시 별점
let hover = ref(0); 

</script>

<template>
    <!-- 화면 -->
    <div class="stars">
        <!-- 별 5개를 반복해서 그리기! 
              @mouseover="hover = n"
              마우스를 올렸을 때 변수 hover에 이 별의 번호를
              저장해라 (n)
        -->
        <span v-for="n in 5" 
              :key="n"
              :class = "{active : n <= (hover || rating)}"
              
              @mouseover="hover = n"
              @mouseleave="hover = 0"
              @click="rating = n"
        >
        ★</span>
        <span>{{ rating ? ` ${rating} / 5` :  ' Click to rate' }}</span>
    </div>
</template>
<style>
    /* span:hover{
        color:#00bcd4;
    } */

    .active{
        color: #00bcd4; /* 별 채워진 색상 */
        transition: color 0.2s;
    }
</style>