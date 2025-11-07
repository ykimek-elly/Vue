<script setup>

let days = ["월", "화", "수", "목", "금"];

let colors =["red", "blue", "green", "orange"];

const students = [
  { name: "지민", score: 80 },
  { name: "누니", score: 95 },
  { name: "서현", score: 92 },
  { name: "태호", score: 60 },
];

</script>

<template>
    <h2>🥉 🧍‍♀️ 학생 점수판</h2>
    <ul>
        <li v-for="stu in students">
            이름: {{ stu.name }} / 점수: {{ stu.score }}

            <span v-if="stu.score >= 90">🏆</span>
        </li>
    </ul>


<br><br><br></br>

<div class="color-container">
    <div v-for="color in colors" 
         class="box" 
         :style="{background:color}">
    </div>
    
</div>

<!-- <div class="color-container">
    <div class="box" :style="{background :colors[0]}"></div>
    <div class="box" :style="{background :colors[1]}"></div>
    <div class="box" :style="{background :colors[2]}"></div>
    <div class="box" :style="{background :colors[3]}"></div>
</div> -->


<h3>📅요일실습</h3>
    <ul>
        <li v-for="day in days">
            📅{{ day }}
        </li>
    </ul>

</template>

<style scoped>
.color-container{

    display: flex;
    gap: 0.5rem;
}
.box{
    width: 50px;
    height: 50px;
    border: 1px solid #666;

}
</style>