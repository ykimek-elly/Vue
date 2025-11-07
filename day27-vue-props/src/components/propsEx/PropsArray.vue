<script setup>
    //부모한테 전달받는 통로만들기!
    defineProps({
        colors : Array
    });
</script>

<template>
     <h3>🎨 색상 목록</h3>
     <ul>
        <li v-for="(c, i) in colors"
             :key="i"></li>
     </ul>
</template>

<style scoped>
    
</style>