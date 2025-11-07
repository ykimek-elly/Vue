<script  setup>

// 1. 부모와 자식 통로 연결해서 타입정하기
// 2. 읽기 전용 변수를 만든다.
const { data } = defineProps({
    data : Object
});
</script>

<template>
    <!-- 화면에 이미지 하나만 띄우기! -->
    <img :src="data.image"
         :alt="data.desc">
</template>

<style  scoped>
    
</style>