<script setup>

let pinkTitle = "pink-title";

let vueBox = "vue-box";

let imgUrl = "https://itbook.store/img/books/9781098103828.png";
let altMsg = "책 이미지";

let naverUrl = "https://www.naver.com/"

// style태그 안에 직접 변수를 넣울 수도 있다.
let textColor = "lightblue";
let size = 40;


// 비활성화 활성화 참 거짖 저장하는 타입
let isDisabled = true;

// 자바스크립트 변수값을 이용해서 html 설정(속성)
// 변경을 하고 싶을 때는 설정값 앞에 :콜론붙이기!
</script>

<template>

    <button :Disabled="isDisabled">눌러볼까?</button>
    <br><br></br>


    <p :style="{color : textColor, fontSize : size + 'px'}">
        Vue 스타일 바인딩
    </p>


    <a :href="naverUrl">네이버</a>

    <!-- 이미지 태그에서 src설정도 자바스크립트 변수를 넣을수 있다 -->
    <img :src="imgUrl" :alt="altMsg">




    <div :id="vueBox">
        이건 id 바인딩!
    </div>

    <br><br></br>

    <h3 class="colorClass">c-bind 속성값 적용</h3>
    <h3 :class = "pinkTitle">자바스크립트 변수적용</h3>
</template>

<style scoped>
 #vue-box{
    background: lightgreen;
    width: 100%;
    height: 10rem;
 }


 .colorClass{
    color: red;
 }
 .pink-title{
    color: pink;
 }

</style>


<!-- 
    데이터 바인딩을 하다 보면 html 의 값만 저장하는게 아니라
    값에 따라서 디자인도 변경을 해야될때가 있다.
    v-bind -> :속성명 = js 변수값들을 작성 한다.
-->