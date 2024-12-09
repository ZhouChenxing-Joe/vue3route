<template>
    <Person/>
</template>


<!-- setup的语法糖 在script里直接写setup就不用在script里写setup代码了 -->
 <!-- 需要在Terminal里面安装这个npm i vite-plugin-vue-setup-extend -->
  <!-- 然后再vite.config.ts里import npm i vite-plugin-vue-setup-extend -->
<script lang="ts" setup name="App">
import Person from './components/Person.vue';
import {ref,reactive} from 'vue'
</script>

<style>
</style>