<template>
    <div class="count">
        <h2>当前求和为: {{ sum }},当前值乘100:{{ bigSum }}</h2>
        <h3>地址:{{ address }},公司：{{ company }},地址英文大写:{{ upperAddress }}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="plus">加</button>
        <button @click="minus">减</button>
    </div>
</template>

<script setup lang="ts" name="Count">
/* defineOptions({
    name:'Count'
}) */

import { ref,reactive} from 'vue';
import { useCountStore } from '../store/count';
import { storeToRefs } from 'pinia';

const countStore = useCountStore()
//storeToRefs只会关注store中的数据，不会对方法进行ref包裹
const {sum,address,company,bigSum,upperAddress} = storeToRefs(countStore)
console.log('!!',storeToRefs(countStore))

//以下两种方式都可以拿到state中的数据
// console.log(countStore.sum)
// console.log(countStore.$state.sum)


/* let obj = reactive({
    a:1,
    b:2,
    c:ref(3)
})
let x = ref(4)

console.log(obj.a)
console.log(obj.b)
console.log(obj.c)
console.log(x.value) */

//数据

//n是用户选择的数字
let n = ref(1) 


//方法
function plus(){
    //pinia 里的第一种修改数据的方式
        // countStore.sum += 1
        // countStore.address = '地址'
        // countStore.company = '公司'

    //第二种pinia修改数据方式
    // countStore.$patch({
    //     sum:22,
    //     address:'中国',
    //     company:'科技'
    // })

    // 第三种
    countStore.increment(n.value)
}
function minus(){
    countStore.minus(n.value)
}
</script>

<style scoped>

.count{
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}
select,button{
    margin: 0 5px;
    height: 25px;
}
</style>