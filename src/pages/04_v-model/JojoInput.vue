<template>
    <input type="text" :value="modelValue">
</template>

<script setup lang="ts" name="JojoInput">
    defineProps(['modelValue'])
</script>

<style scoped>
    input{
        border: 2px solid greenyellow;
        background-image: linear-gradient(100deg,gray,green,greenyellow);
        height: 30px;
        font-size: 18px;
        color: white;
    }
</style>