<template>
	<div class="grand-child">
		<h3>孙组件</h3>
		<h4>a:{{ a }}</h4>
		<h4>b:{{ b }}</h4>
		<h4>c:{{ c }}</h4>
		<h4>d:{{ d }}</h4>
		<h4>x:{{ x }}</h4>
		<h4>y:{{ y }}</h4>
		<button @click="updateA(2)">点我更改父组件里的a</button>
		<br>
		<button @click="changeB(1000)">点我更改父组件里的b</button>
	</div>
</template>

<script setup lang="ts" name="GrandChild">
defineProps(['a','b','c','d','x','y','updateA','changeB'])
</script>

<style scoped>
	.grand-child{
		margin-top: 20px;
		background-color: orange;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 0 10px black;
	}
	button{
		margin-top: 10px;
	}
</style>

<!-- 前端看完看一下后端java -->