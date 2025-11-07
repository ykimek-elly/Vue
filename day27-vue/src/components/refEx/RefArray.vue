<script setup>
import { ref } from 'vue';

 

    //ref에 배열 저장을 해서 화면에 보이기
    //화면에 바뀐 값을 계속 보고 싶으면 ref()단다
    //ref를 사용할 때는 import 꼭! 한다!
    let nums = ref([1,2,3]);

    //버튼을 한번 클릭하면 4라는 숫자를 nums배열에 추가한다.
    // 1. 버튼 태그 만들기
    // 2. 버튼을 클릭했을 때 실행하는 함수명 달기
    
    
    function handleAddNum(){
        
        // 3. 함수 작성하기 (할일)
        //nums.value.push(4);
        // 클릭을 할 때마다 증가하는 값
        let size = nums.value.length -1;

        // 배열명 .value[공간의번호]
        // console.log(++nums.value[size]);

        nums.value.push(nums.value[size] +1);

        // 4. 확인
    }

</script>

<template>

    <h2>화면에 보이는 배열</h2>
    <p>숫자 목록 : {{ nums }}</p>

    <button @click="handleAddNum"> 4를 추가</button>

</template>

<style scoped>

</style>