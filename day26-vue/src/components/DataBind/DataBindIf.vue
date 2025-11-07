<script setup>
    // 동작 - 선택!
    //  true , false 값을 이용해서 화면에 태그를 보여줄지
    //  안 보여줄 지 선택!
    let isLogin = false;

    //재고 없으면 태그를 안보이게 할것 !
    // 재고 있으면 태그를 보이게 할것 !
    let stock = 0;

    //60점 이상이면 합격 태그를 보이고
    //60점 미만이면 불합격 태그 보이기!

    let score = 55;

</script>

<template>
    <!-- 화면 -->
    <h2 v-if="score >=60">합격</h2>
    <h2 v-else>불합격</h2>


      <br> <br>
     <h2 v-if="stock > 0"> 재고가 있습니다. {{ stock }}개</h2>

    <br> <br>
    <h2 v-if="isLogin">🎇로그인 완료!</h2>
</template>

<style scoped>
    /* 디자인 */
</style>