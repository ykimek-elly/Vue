<script setup>
defineProps({
  cardInfo: Object
});
</script>

<template>
    <div class="card">
        <img :src="cardInfo.image" 
             :alt="cardInfo.desc"/>
        <img :src="cardInfo.profileImg" 
             :alt="cardInfo.profileName"> 
        
        <h4>{{ cardInfo.profileName }}</h4>
        <p>{{ cardInfo.desc }}</p>  
        <p>💗</p>
    </div>
</template>

<style scoped>
.card{
    flex-basis: calc(33.333% - 1rem);
}

.card img:nth-of-type(1){
    width: 90%;
    height: 55%;
    border-radius: 1rem;
}

.card img:nth-of-type(2){
    border-radius: 100%;
    width: 50px;
    height: 50px;
}
</style>