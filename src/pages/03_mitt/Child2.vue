<template>
	<div class="child2">
		<h3>子组件2</h3>
		<h4>笔:{{ pen }}</h4>
		<h4 v-show="toy">子组件1给的玩具:{{ toy }}</h4>
	</div>
</template>

<script setup lang="ts" name="Child2">
import { ref,onUnmounted } from 'vue';
import emitter from '@/utils/emitter';

//数据
let pen = ref('铅笔')
let toy = ref('')

//给emitter绑定send-toy事件
emitter.on('send-toy',(value:any)=>{
	console.log('send-toy',value)
	toy.value = value
})
//在组件卸载时解绑send-toy事件
onUnmounted(()=>{
	emitter.off('send-toy')
})
</script>

<style scoped>
	.child2{
		margin-top: 50px;
		background-color: orange;
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>