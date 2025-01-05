<template>
    <input type="text" 
    :value="mingzi"
    @input="emit('update:mingzi',(<HTMLInputElement>$event.target).value)"
    >
    <br>
    <input type="text"
    :value="mima"
    @input="emit('update:mima',(<HTMLInputElement>$event.target).value)">
</template>

<script setup lang="ts" name="JojoInput">
    defineProps(['mingzi','mima'])
    const emit  = defineEmits(['update:mingzi','update:mima'])
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

<!-- no working today just chilling -->
 <!-- I might start to code the day after tmrw -->
  <!-- today sick  pause one day start from tmrw -->
   <!-- coding coding coding -->