<template>
  <div class="child1">
    <h3>子组件1</h3>
	<h4>玩具:{{ toy }}</h4>
	<h4>书籍:{{ book }} 本</h4>
	<button @click="changeHouse($parent)">改变父亲的房产</button>
  </div>
</template>

<script setup lang="ts" name="Child1">
import { ref } from 'vue';

//数据
let toy = ref('奥特曼')
let book = ref(3)
//把数据交给外部
defineExpose({toy,book})

function changeHouse(parent:any){
	parent.house = '深圳大别墅'
}

</script>

<style scoped>
	.child1{
		margin-top: 20px;
		background-color: skyblue;
		padding: 20px;
		border-radius: 10px;
    box-shadow: 0 0 10px black;
	}
</style>
