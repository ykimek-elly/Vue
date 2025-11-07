<script setup>
    // 자바스크립트를 바로 실행하는 아니라 버튼을 클릭시에만
    // 실행해라!
    function showAlert(){
        alert('🎉 알림창이 떴어요!');
    }

    function showConsole(){
        console.log('눌러봐!!');
    }

    function showDoubleClick(){
        alert('더블 클릭했는데??');
    }

    function showH1(){
        alert('어쩌라고!');
    }

    function showTyping(event){
        console.log(event.target.value);

    }

    // 자바스크립트 태그 안에 함수로 묶지 않으면 새로고침
    // 될때마다 자동으로 실행된다.

    // 매번 실행하고 실행하고 싶으면 함수로 묶어서 사용하기!
    function showKeyDown(event){
        console.log(event.key);
    }

</script>

<template>
    <!-- 화면 -->
     <h3> 🎯 이벤트 실습 </h3>

     <input v-on:keydown="showKeyDown"
            type="text" 
            placeholder="키보드 누르세요!">
    

     <input v-on:input="showTyping"
            type="text" 
            placeholder="아무거나 입력">
    
     <br><br>

     <!-- <button v-on:click="showAlert">알림창 띄우기🔔</button> -->
     <button v-on:click="showConsole">콘솔에 출력하기 🖥️</button>

     <button v-on:dblclick="showDoubleClick">더블클릭시 알림창 띄우기🔔</button>

     <h1  v-on:click="showH1">눌러보라니깐!</h1>

     


</template>

<style scoped>

</style>

<!-- 
    이벤트(event)?
     - 화면은 혼자서 움직이지 않는다.
     - 사용자가 행동을 해야 움직인다.
     - 사용자의 행동에 반응하는 기능들을 이벤트 라고한다.
     - 사용자의 행동 -> 코드 실행을 연결하는 통로!

    v-on:이벤트명="실행할 코드"


-->