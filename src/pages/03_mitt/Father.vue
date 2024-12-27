<template>
  
</template>

<script setup lang="ts" name="Father">
  
</script>

<style scoped>
  .father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
    border-radius: 10px;
	}
  .father button{
    margin-left: 5px;
  }
</style>

<!-- 
任意组件通信这几个东西都是差不多的：
这三个东西都是：{接收数据的}：提前绑好事件
但对pubsub叫提前订阅消息 但其实都一样
1.pubsub
2.$bus
3.mitt

{提供数据的}：在合适的时候触发事件
pubsub叫发布消息
-->