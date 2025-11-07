<script lang="ts" setup>
// 1. 부모에게 전달되는 통로를 만들기
defineProps({
    //2. 변수명: 타입 지정!
    price : Number
})

</script>

<template>
    <h4>🍘 가격 : {{ price }}</h4>
    <h4>🍘 가격 : {{ price*2 }}</h4>
</template>
