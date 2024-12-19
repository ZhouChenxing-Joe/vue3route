<template>
    <div class="count">
        <h2>当前求和为: {{ sum }}</h2>
        <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="plus">加</button>
        <button @click="minus">减</button>
    </div>
</template>

<script setup lang="ts" name="Count">
import { ref} from 'vue';

let sum=ref(0)

function plus(){
    sum.value += 1 
}
function minus(){
    sum.value -= 1
}
</script>

<style scoped>

.count{
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}
</style>