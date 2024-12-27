<template>
    <input type="text" 
    :value="modelValue"
    @input="emit('update:modelValue',(<HTMLInputElement>$event.target).value)"
    >
</template>

<script setup lang="ts" name="JojoInput">
    defineProps(['modelValue'])
    const emit  = defineEmits(['update:modelValue'])
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