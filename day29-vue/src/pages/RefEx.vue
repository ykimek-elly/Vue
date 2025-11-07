<script setup>
import { reactive, ref } from 'vue';
import Stars from '../components/shareReviews/Stars.vue';

// 화면에 보이는 변수값을 저장하고 싶을 때는 ref를 쓴다.
// import { ref } from 'vue';

let count = ref(0); 

function handlerClick(){
    count.value++;
    console.log(count.value);
}

// 변수의 값이 화면에 보이고 변경되야 되기 때문에
// ref이용해서 객체를 저장한다.
let user = ref({
    name : 'Eryna',
    age : 20
});

function handlerAddAge(){
    user.value.age++;
    console.log(user.value.age);
}

//  화면에 보이고 변경된 값 보이게하는 변수!
let nums = ref([1,2,3,4,5]);

function addNum(){
    // 공간을 만들고 값을 저장해라! 
    nums.value.push(10);

}

// reactive() 객체랑 배열에서만 사용하는 전용 변수
// value를 안 써도 된다.
let userReactive = reactive({
    name : 'Eryna',
    age : 20
});

// 위에서 버튼을 클릭하면 1씩 증가 
//  user.age++;
//  reactive() 안에 값이 바뀌면 자동으로 템플릿태그
//   다시 그려준다.

//배열안에 객체
const students = ref([
    {id :1 ,name :'eryna',score :20},
    {id :2 ,name :'dex',score :30},
    {id :3 ,name :'bob',score :100},   
]);

function incrementScore(){
    // map은 기존에 배열에서 값을 가져와서 새롭게 배열을
    // 만들어서 리턴하는 것!이다!
    //  1. = 오른쪽 실행함
    //  2. map()반복 실행 
    //  3. students배열에서 하나를 꺼내서 stu에 저장한다.
    //     {id :1 ,name :'eryna',score :80}

    students.value = students.value.map((stu)=>{

        //4. 만약 점수가 100점 이상이면 그대로 값을 유지
        if(stu.score >= 100){
             return stu;
        }

        //5. 그렇지 않다면 +50, 단! 더했는데 100이 넘을
        //   수도 있다. 
        return {...stu,
                 score : Math.min(stu.score + 50,100)}
        
    });

    console.log(students.value);
}

const students2 = reactive([
    {id :1 ,name :'eryna',score :20},
    {id :2 ,name :'dex',score :30},
    {id :3 ,name :'bob',score :100},   
]);
function incrementScoreForEach(){
    //map은 배열을 새로 만들기 때문에 return 꼭쓰거나
    // ()=>() 를 이용해서 자동으로 리턴시키거나 해야된다.
    // 배열 전체를 다시 만드는게 아니라 값을 직정 수정하는
    // 반복문도 있다. forEach
    students2.forEach((stu2) =>{
        if(stu2.score < 100){
            stu2.score = Math.min(stu2.score+50,100);
        }
    });
}

</script>

<template>

    <h3>별점</h3>
    <Stars />


    <br><br><br>
    <h3>버튼을 클릭했을 때 학생들의 점수를 50씩 증가시키기</h3>
    <button @click="incrementScoreForEach">클릭시 모든 학생 50씩 증가</button>


    <h3> reactive ?</h3>
    <p> ref에서 객체를 저장하고 배열을 저장할 때 value를 
        작성하기 싫으면! reactive
    </p>

    <ul>
        <li v-for="stu in students2" 
             :key="stu.id"
        >{{ stu.name }} - {{ stu.score }} 점</li>
    </ul>

    <h3>배열 타입을 이용해서 ref예제</h3>
    <h4>숫자 배열인 nums에 10을 추가하는 버튼 만들기</h4>
    <button @click="addNum">무조건 10만 추가됨!</button>

    <ul>
        <!-- nums 배열 안에 있는 숫자들을 li로 출력! -->
    </ul>


    <br><br><br>
    <h3>객체 타입을 이용해서 ref예제</h3>
    <h4>버튼을 클릭하면 나이를 증가시키기!</h4>
    <button @click="handlerAddAge">1살 증가!</button>

    <h4>💢사용자 정보 출력💢</h4>
    <p>이름 : {{ user.name }}</p>
    <p>나이 : {{ user.age  }}</p>

    <br><br><br>

    <!--  화면에서 ref라는 화면에 보이는 변수를 저장하는
          것은 {{ 변수명 }} 작성하면 된다! -->
   
    <h3>버튼을 클릭하면 1씩 증가하는 예제</h3>
    <p>count : {{ count }}</p>


    <button @click="handlerClick">숫자 1씩 증가</button>


    <br><br><br>
    
</template>

<style scoped>
    
</style>