<template>
    <div class="talk">
        <button @click="getOneVerse">Verse Of The Day</button>
        <ul>
            <li v-for="v in versesStore.verses" :key="v.id">{{ v.title }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts" name="Verses">
/* defineOptions({
  name: 'Verses',
}); */

import { reactive } from 'vue'
import axios from 'axios';
import { nanoid } from 'nanoid'
import { useVerseStore } from '../store/verses';

const versesStore = useVerseStore()

console.log('@@',versesStore.verses)

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
function getOneVerse() {
/*     try {
        //发请求,下面这行的写法是：连续解构赋值+重命名
        let { data: { text: title } } = await axios.get('https://bible-api.com/john+3:16')
        //这里的提供的api link 不能直接取出content，所以要从text分离出来，要想下面这样写
        // let title = data.text.trim()

        //把请求回来的字符串包装成一个对象。
        let obj = { id: nanoid(), title } 
        //放到数组中
        verses.unshift(obj)

    } catch (error) {
        console.error('Error getting verses', error)
    } */

    versesStore.getAVerse
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

<!-- thank god, now i wanna code -->