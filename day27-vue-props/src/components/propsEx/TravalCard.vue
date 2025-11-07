<script setup>
import travel1 from "../../assets/travel1.jpg";
import travel2 from "../../assets/travel2.jpg";
import travel3 from "../../assets/travel3.jpg";
import travel4 from "../../assets/travel4.jpg";

// 부모에게 보낼 데이터를 받기
// 읽기모드로 온다!
// 부모가 자식한테 데이터르 넘겨줄 때 props를 만든다.


// defineProps({
//     image : String,
//     country : String,
//     capital : String
// });

const props = defineProps(['image','country','capital']);

</script>

<template>
    <div class="travel-card">
            <img :src="props.image" alt="여행지 사진" />
            <h3>나라 :{{props.country }}</h3>
            <p>수도 : {{props.capital}}</p>
        </div>
</template>

<style scoped>

.travel-card{
    background: beige;
    width: 20rem;
    height: 23rem;

    text-align: center;
    line-height: 1rem;

    border-radius: 1rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
 }
 .travel-card img{
    width: 90%;
    height: 15rem;

    border-radius: 1rem;
    margin-top: 1rem;
    
 }


</style>