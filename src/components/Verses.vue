<template>
    <div class="talk">
        <button @click="getOneVerse">Verse Of The Day</button>
        <ul>
            <li v-for="v in verses" :key="v.id">{{ v.title }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts" name="Verses">
/* defineOptions({
  name: 'Verses',
}); */

import { reactive } from 'vue'
import axios from 'axios';
import {nanoid} from 'nanoid'
 
//数据
let verses = reactive(
    [
        { id: 'v1', title: '约翰福音 3:16 😊' },
        { id: 'v2', title: '诗篇 23:1 😊' },
        { id: 'v3', title: '腓立比书 4:13 😊' }
    ]
)
//方法

/* getOneVerse 点击按钮就可以多生成一个verses 
在这里需要安装axios
npm i axios
 */
async function getOneVerse() {
  try{
    //发请求
    let {data:{content:title}} = await axios.get('https://bible-api.com/john+3:16')
    //把请求回来的字符串包装成一个对象。
    let obj = {id:nanoid(),title}
    verses.shift() 

}catch(error){
    console.error('Error getting verses',error)
}
}

</script>

<style scoped>
.talk {
    background-color: lightgreen;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}
</style>