<template>
  <div class="father">
    <h3>父组件</h3>
    <!-- v-model 用在html标签上 -->
    <!-- <input type="text" v-model="username"> -->
     
    <!-- 下面这行代码是第五行代码的底层写法 -->
     <!-- <input type="text" :value="username" @input="username = (<HTMLInputElement>$event.target).value"> -->
      
      <!-- v-model 用在组件标签上  -->
      <!-- <JojoInput v-model="username"/> -->
      <JojoInput 
      :modelValue="username" 
      @update:modelValue ="username = $event"/>
  </div>
</template>

<script setup lang="ts" name="Father">
	import { ref } from "vue";
  import JojoInput from "./JojoInput.vue";

  let username = ref('Joe chenxing')

</script>

<style scoped>
.father {
  padding: 20px;
  background-color: rgb(165, 164, 164);
  border-radius: 10px;
}
</style>
