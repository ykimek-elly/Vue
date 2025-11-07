<script setup>
    let name = "이서희";
    let age = 25;
    let hobby = "골프 라운딩 나가기 ";

    // 객체(Object)를 사용하는 것이 좋다.
    let user = {
        name : "이서희",
        age : 25,
        hobby : "골프 라운딩 나가기 "
    }

    // 배열 
    let books = ["Vue입문","리액트 기초","자바스크립트 기초"];

    // 배열인데 숫자 타입들 출력
    let nums = [1,2,3,4,5,6];
    let nums2 = [150.1,160.1,170.1,180.1]


     let users = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
            }
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
            },
            "phone": "010-692-6593 x09125",
            "website": "anastasia.net",
            "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
            }
        }
    ]
</script>

<template>
    <!-- 화면에 보여질 구조! -->
    <section>
        <h3>👩사용자 정보 - 객체+배열 </h3>
        <ul>
            <li>첫번째 사용자정보</li>
            <li>이름: {{ users[0].name }}</li>
            <li>이메일: {{ users[0].email }}</li>
            <li>도시: {{ users[0].address.city }}</li>
        </ul>
        <ul>
            <li>두번째 사용자정보</li>
            <li>이름: {{ users[1].name }}</li>
            <li>이메일: {{ users[1].email }}</li>
            <li>도시: {{ users[1].address.city }}</li>
        </ul>s



        <h3>🥇숫자 정보 출력</h3>
        <ul>
            <li>{{nums[0]}}</li>
            <li>{{nums[1]}}</li>
            <li>{{nums[2]}}</li>
        </ul>




        <br><br><br>
        <h3>🥇책 정보 출력</h3>
        <ul>
            <li>{{books[0]}}</li>
            <li>{{books[1]}}</li>
            <li>{{books[2]}}</li>
        </ul>


        <br><br><br>
        <h3>👩사용자 정보 - 객체 이용(데이터 묶음) </h3>
        <p>이름 : {{ user.name }}</p>
        <p>나이 : </p>
        <p>취미 : </p>

        <br><br><br>
        <h3>👩사용자 정보 - 변수 이용 </h3>
        <p>이름 : </p>
        <p>나이 : </p>
        <p>취미 : </p>
    </section>
</template>

<style scoped>

</style>