<script setup>
    // 동작
    // v-for 배열의 개수만큼 HTML을 
    //     자동으로 복사해서 그려주는 반복문

    let fruits = [
        "🍎 사과", 
        "🍌 바나나", 
        "🍇 포도"
    ];

    let users = {
        name: "에리나",
        age : 20,
        city :"서울"
    }

    // 배열과 객체 
    let userList = [
        { name: "누니", age: 20 },
        { name: "지민", age: 25 },
        { name: "서현", age: 22 }
    ];

    // filter()
    // - 배열에 맞는 조건을 찾아서 새로운 배열을 만든다.
    // - 걸러내다!
    let list = userList.filter( u => u.age >= 25);
    console.log(list);



     let fruitList = [
        { name : "🍎 사과",price:1500 }, 
        { name :"🍌 바나나",price:3000}, 
        { name :"🍇 포도",price:2000},
            ]

    let resultList = fruitList.filter( data => data.price >= 2000);
    console.log(resultList);


</script>


<template>
    <h3>🎃사용자 정보 - 객체 + 배열 - </h3>
    <ul>
        <li v-for="value in resultList">
            {{value.name }} / {{ value.price}}
        </li>
    </ul>


    <br><br><br>

    <h3>🎃사용자 정보 - 객체+배열 - </h3>
    <ul>
        <li v-for="u in list">
            {{ u.name }} / {{ u.age }}
        </li>
    </ul>



    <!-- <h3>🎃사용자 정보 - 객체+배열</h3>
    <ul>
        <li  v-if="userList[1].age >= 25"> 
            이름 :{{ userList[1].name }} / 나이 : {{ userList[2].age }}
        </li>
    </ul> -->

    <h3>🎃사용자 정보 - 객체</h3>
    <ul>
        <!--  객체 타입을 반복을 하면 값이 출력된다. -->
        <li v-for="data in users">
            {{ data }}
        </li>
    </ul>
    
    <h3>🎃사용자 정보 - 객체(value,key)</h3>
    <ul>
        <!--  객체 타입을 반복을 하면 값이 출력된다. -->
        <li v-for="(data,key) in users">
            {{ key }} : {{ data }}
        </li>
    </ul>

    <!-- 화면
     <li v-for="value in source"></li> 
     source : 배열명
     value :  배열에서 각 항목을 출력하는 것!

     리액트에서 map()하시게되면 콘솔창에 key에러!
   
    <ul>
        <li v-for="item in fruits"
            :key="item"
            ></li>
    </ul>

    <h3>value만 꺼내는게 아니라 배열의 공간의 번호 가져오기</h3>
    <ul>
        <li v-for="(data,index) in fruits"
            :key="index"
            >. </li>
    </ul>
    -->
</template>

<style scoped>
    /* 디자인 */
</style>