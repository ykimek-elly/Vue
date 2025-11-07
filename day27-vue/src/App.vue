<script setup>
import RefArray from './components/refEx/RefArray.vue';
import RefObject from './components/refEx/RefObject.vue';
import Test from './components/test/Test.vue';

</script>

<template>
<!-- <RefArray /> -->
<!-- <RefObject /> -->
 <Test />
</template>

<style scoped>
</style>



<!-- <script setup>
import { ref } from 'vue';

//동작
// count = [상자(ref)]
//      - value 공간에 값이 저장된다.

  let count = ref(0);

  function handlerClick(){
    count.value++; 
    console.log(count.value);
  }

  //문자를 변경하는 ref
  let name = ref("누니");

  function handlerChangeName(){
    name.value = "엘리스";

     // 추가적인 코드 (토클)
    //  - 버튼을 클릭했을 때 이름이 에리나면 누니로 변경
    //                         누니면 에리나로 변경
    // 1. 어디에서 값을 가져올까?
    // 2.비교해서 선택하기
    if(name.value = "엘리스"){
      name.value = "누니";
    }else{
      name.value = "엘리스";
    }
    // 삼항연산자!
      //   name.value = (name.value === "엘리스")?
   }

</script>

<template>

  <h2>화면을 바꾸는 변수랑, 화면은 바꾸지 않는 변수</h2>

  // 문자변경
  <button @click="handlerChangeName">클릭시 변경</button>
  <h4>{{ name }}</h4>

  // 숫자 변경
  <button @click="handlerClick">1씩증가</button>
  <h4>{{ count }}</h4>

  <br><br><br>
  <ol>
    <li>실행순서</li>
    <li>vue에서 import하기!</li>
    <li>변수를 만들기</li>
  </ol>



  <br><br><br>
  <p>Vue는 동적(움직이는 페이지를 만들기 때문에) 감시자</p>
  <p>let, const는 값이 바꿔도 화면에 결과를 바꾸지 못한다.</p>
  <p>ref() : 어? 값이 변했네? 화면도 변해라!</p>
  <p>자동으로 화면을 업데이트 한다.</p>

</template>

<style scoped>

</style> -->








<!-- <script setup>

 // 동작
 let count = 0;
 // vue는 일반 변수들 let을 이용해서 const를 이용해서 값을 저장하는 일반 공간들은 감시대상에서 제외!
 //값이 변경이 되도 자바스크립트 태그 안에서는 변경된 값이 보이지만 화면에는 적용이 되지 않는다!
 // ref()- 실무에도 많이 사용
 // data() 
 let isHover = false; //마우스 처음부터 div없으니까 

 console.log(isHover);

 // 함수
  function handlerHoverOver(){
    isHover = true;
    console.log("마우스 올라감",isHover);
  }

  function handlerHoverLeave(){
    isHover = false;
    console.log("마우스 나감",isHover);
  }

  function sayHello(){
    alert("안녕하니?");
  }


   function handlerClick(){
    console.log(count++);
  }


  function handlerShowText(e){
    console.log(e.target.value);
  }


</script>

<template>
  <h2>이벤트?</h2>

<!-- 마우스 이벤트가 div 상자 위로 들어올 때 실행 
  <div @mouseover=" handlerHoverOver "
       @mouseleave="handlerHoverLeave">

    <p>{{ isHover ? "마우스 올라옴🐭" : "마우스없음 😎" }}</p>
  </div>



  
  <!-- input이벤트 축약형 만들기 

  <input type="text" 
          placeholder="아무 글 입력"
          @input="handlerShowText">
  <br><br><br>




  <p>사용자가 화면에게 말을 거는 방식!</p>
  <p>Vue가 그걸 감지해서 미리 정해둔 일을 실행하는 것</p>
  <p>handler (핸들러) </p>
  <p>v-on:이벤트명 쓰면 길다 그래서 Vue에서 축약형 @기호</p>





  <button v-on:click="sayHello">눌러!</button>

  <!-- 축약형 이벤트 작성 
   <button @click="sayHello">축약 버튼 눌러! </button>

    <!-- 버튼을 클릭했을 때 자바스크립트 변수값을 증가해서
       콘솔창에 띄우기  
       1. button 태그 가져오기
       2. 클릭 이벤트 달기
       3. 함수명을 작성하고 그 안에 실행하는 문장들 
         script태그 안에 작성해서 연결하기
         
  

    <button @click="handlerClick">1씩 증가 버튼</button>


</template>

<style scoped>

</style> -->
