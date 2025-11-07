<script setup>
import { ref } from 'vue';

// 화면에 보이는 변수값을 저장하고 싶을 때는 ref를 쓴다.
// import { ref } from 'vue';
let count = ref(0); 

function handlerClick(){
    count.value++;
    console.log(count.value);
}
</script>

<template>
    <!-- 화면에서 ref라는 화면에 보이는 변수를 저장하는것은 {{ 변수명 }} 작성하면 된다. -->
    <h2>defineEmits란?</h2>
    <h3>버튼을 클릭하면 1씩 증가하는 예제</h3>
    <p>count : {{ count }}</p>


    <button @click="handlerClick">숫자 1씩 증가</button>


    <br><br><br>
    <p>자식 컴포넌트가 부모에게 신호를 보낼 때</p>
    <p>props 자제는 데이터를 자식이 변경을 못한다. </p>
</template>

<style scoped>
    
</style>
