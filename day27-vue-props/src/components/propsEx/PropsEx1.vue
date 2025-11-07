<script setup>
import PropsArray from './PropsArray.vue';
import PropsBoolean from './PropsBoolean.vue';
import PropsNumber from './PropsNumber.vue';


</script>

<template>
    <h2>🍜Props 타입!</h2>

    <PropsObject :user="{
                    name : 'Eryna',
                    age  : 20
                        }"/>
    <PropsArray :colors ="['red', 'blue', 'green']"/>
    <PropsNumber :price="12000"/>
    <PropsBoolean :isHot = "false"/>

</template>

<style scoped>
    
</style>