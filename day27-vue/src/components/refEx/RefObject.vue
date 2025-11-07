<script setup>
import { ref } from 'vue';


    //오늘 점심 메뉴를 저장
    //자바스크립트의 객체 타입은 중복된 key를 쓰면 안된다!
    //key와 value를 꼭 생각해보세요!
    let foods = ref({
        menu1 : {name : "일본라멘", price : 13000 },
        menu2 : {name : "마제소바", price : 12000 },
        menu3 : {name : "김치찌개", price : 10000 },
    });
</script>


<template>
    <h2>화면에 보이는 객체</h2>
    <!-- 1. 어떤 태그를 선택?
         2. 반복문 사용할꺼냐? -->

    <div v-for="(menu,key) in foods" 
            :key="key"
            class="menu-box">
        <h3>점심메뉴명: {{ menu.name }}</h3>
        <p>메뉴 가격: {{ menu.price }}</p>
    </div>

</template>


<style scoped>
.menu-box{
    background: lightblue;
    border: 1px solid #ccc;
}

</style>



<!-- <h2>객체 두 개이상 일때!</h2>
<h3>점심메뉴2 : {{ foods.mune2.name }}</h3>
<p> 메뉴의 가격2 : {{ foods.mune2.price }}</p>


<h3>점심메뉴3 : {{ foods.mune3.name }}</h3>
<p> 메뉴의 가격3 : {{ foods.mune3.price }}</p>


<h2>객체 하나 일때!</h2>
<h3>점심메뉴 : {{ foods.name }}</h3>
<p> 메뉴의 가격 : {{ foods.price }}</p> -->