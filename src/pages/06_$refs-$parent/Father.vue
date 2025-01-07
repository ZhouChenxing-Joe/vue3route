<template>
	<div class="father">
		<h3>父组件</h3>
		<h4>房产:{{ house }}</h4>
		<button @click="changeToy">修改child1的玩具</button>
		<button @click="changeCom">修改child2电脑</button>

		<!-- $refs 用于父传子
			$parent 用于子传父 -->
		<button @click="getAllChild($refs)">让所有孩子的书变多</button>

		<!-- 这里的ref是给子组件打标识的 -->
		<Child1 ref="c1" />
		<Child2 ref="c2" />
	</div>
</template>

<script setup lang="ts" name="Father">
import Child1 from './Child1.vue'
import Child2 from './Child2.vue'
import { ref,reactive } from 'vue';
let c1 = ref()
let c2 = ref()

//注意点:当访问boj.c 的时候，底层会自动读取value属性，因为c是在obj响应式对象中
/* let obj = reactive({
	a:1,
	b:2,
	c:ref(3)
})
console.log(obj.a)
console.log(obj.b)
console.log(obj.c) */

//数据
let house = ref('北京四合院')

//方法
function changeToy() {
	c1.value.toy = '变形金刚'
}
function changeCom() {
	c2.value.computer = '拯救者'
}
function getAllChild(refs:{[key:string]:any}) {
	for (let key in refs) {
		refs[key].book += 3
	}
}

//向外部提供数据
defineExpose({house})
</script>

<style scoped>
.father {
	background-color: rgb(165, 164, 164);
	padding: 20px;
	border-radius: 10px;
}

.father button {
	margin-bottom: 10px;
	margin-left: 10px;
}
</style>
