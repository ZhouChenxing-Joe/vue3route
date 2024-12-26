<template>
  <div class="father">
    <h3>父组件</h3>
	<h4>汽车:{{ car }}</h4>
	<Child :car="car" />
  </div>
</template>

<script setup lang="ts" name="Father">
import Child from './Child.vue';
import { ref } from 'vue';
//数据
let car = ref('AMG CLA45S')

//方法
function getToy(Value:string){
	console.log('父',Value)
}
</script>

<style scoped>
	.father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}
</style>