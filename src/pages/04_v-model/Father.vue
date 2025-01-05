<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>{{ username }}</h4>
    <h4>{{ password }}</h4>
    <!-- v-model 用在html标签上 -->
    <!-- <input type="text" v-model="username"> -->
     
    <!-- 下面这行代码是第五行代码的底层写法 -->
     <!-- <input type="text" :value="username" @input="username = (<HTMLInputElement>$event.target).value"> -->
      
      <!-- v-model 用在组件标签上  -->
      <!-- <JojoInput v-model="username"/> -->
       <!-- 底层写法 -->
      <!-- <JojoInput 
      :modelValue="username" 
      @update:modelValue ="username = $event"/> -->

      <!-- 修改modelValue -->
      <JojoInput v-model:mingzi="username" v-model:mima="password"/>


      <!-- $event到底是啥？啥时候能.target
      对于原生事件，$event就是事件对象 ===> 能.target
      对于自定义事件，$event就是触发事件时。所传递的数据 ==> 不能.target 
      -->

  </div>
</template>

<script setup lang="ts" name="Father">
	import { ref } from "vue";
  import JojoInput from "./JojoInput.vue";

  let username = ref('Joe chenxing')
  let password = ref('woshi18bunishi52')


  

</script>

<style scoped>
.father {
  padding: 20px;
  background-color: rgb(165, 164, 164);
  border-radius: 10px;
}
</style>


<!-- 056.组件通信_v-model的细节学习 -->