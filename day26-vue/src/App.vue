<script setup>
import DataBindFor from './components/DataBind/DataBindFor.vue';
import DataBind4 from './components/DataBind/DataBindFor.vue';
import DataBindTest from './components/DataBind/DataBindTest.vue';
import DataBindCSS from './components/DataBindCSS/DataBindCSS.vue';
import EventBind from './components/event/eventBind.vue';

</script>


<template>
  <!-- <DataBindCSS /> -->
   <!-- <DataBindFor /> -->
  <!-- <DataBindTest /> -->
   <EventBind />
</template>

<style scoped>

</style>

<!-- 
 App.vue 
  - 리액트에 App.jsx 랑 똑같은 역할 
  - 내가 만든 컴포넌트들을 불러서 화면에 붙이는 역할

 main.js
  - vue의 시작점
  - createApp(App).mount('#app') vue를 html에 붙인다.

 components
  - 작은 화면 조각
  - 내가 만든 HTML 태그들을 모아놓은 폴더

 assets
  - 이미지, css, 폰트, 로고 등~

 public 
  - 외부에서 url 그대로 접근이 가능하다
  - 보안적인 문제나 중요 코드들은 절대로 public에 쓰면 안된다.

 프레임워크(FrameWork)
  - 이 틀 안에서  개발하세요!
  - 구조가 이미 정해져있음
  - 초보자가 접근 하기 좋음 (규칙만 잘 이해하면 쉽게 접근)


  <template>
  <!--  body 처럼 화면에  보이는 부분 적는 곳! 
  <h1>처음 배우는 Vue</h1>  

  <section>
    <div>box1</div>
    <div>box2</div>
  </section>
  
</template>

<style scoped>
  /* 디자인 하는 곳! 
     scoped  App.vue컴포넌트에서만 사용하겠다!
     css 디자인을 할 때 다른 컴포넌트의 디자인하고 섞이지 않게 하기
     위해서 vue는 자동으로 고유한 식별키를 만들어서 태그에 붙인다.
  */
  h1{
    color: red;
    font-size: 1rem;
  }
  div{
    width: 300px;
    height: 300px;
    background: lightblue;
    text-align: center;
    line-height: 50px;

    margin: 0.5rem;
  }

  section{
     flex가 기본적으로 가로정렬
                      세로정렬 
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
  }

 특정 조건이 오면 디자인 바꾸기! media 
  @media (max-width: 400px){
    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
    }
  }

</style>


<template>
  <!--  body 처럼 화면에  보이는 부분 적는 곳! 
  <div id="box1" class="box">
     box1
  </div>
  <div id="box2" class="box">
     box2
  </div>
</template>

<style scoped>
   /* 디자인 
   CSS 셀렉터 - HTML태그들을 선택해서 디자인*/

   /* 아이디 셀렉터 */
   #box1{
    background: lightcoral;
   }
   #box2{
    background: lightgoldenrodyellow;
   }
   /* 클래스 셀렉터 */
   .box{
     width: 10rem;
     height: 10rem;
   }

   /* 호버기능
   마우스가 올라갔을 때 투명도 변경  */
   .box:hover{
      opacity: 0;
   }

</style>


<script setup>
import DataBind from './components/DataBind.vue';
import DataBind2 from './components/DataBind2.vue';
import DataBindIf from './components/DataBindIf.vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Main from './components/Main.vue';

</script>

<template>
  <!--  body 처럼 화면에  보이는 부분 적는 곳! 
  <Header />

  <!-- <Main /> 
  <!-- <DataBind /> 
  <!-- <DataBind2 />
  <DataBindIf />

  <Footer />
</template>

<style scoped>
   /* 디자인 하는 곳! */
   
</style>

-->