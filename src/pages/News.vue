<template>
    <div class="news">
        <!-- 导航区 -->
        <ul>
            <li v-for="news in newsList" :key="news.id"><RouterLink :to="{path:'/news/detail'}">{{ news.title }}</RouterLink></li>
        </ul>
        <!-- 展示区 -->
         <div class="news-content">
            <RouterView></RouterView>
         </div>
    </div>
</template>

<script setup lang="ts" name="News">
import { reactive } from 'vue';
import { RouterView,RouterLink } from 'vue-router';

const newsList = reactive([
    { id: 'news01', title: 'God is true', content: 'Seek Him' },
    { id: 'news02', title: 'God loves you', content: 'Gods Love' },
    { id: 'news03', title: 'Jesus Walks with us', content: 'Jesus is Coming' },
    { id: 'news04', title: 'Heaven no sorrow', content: 'We will be in Heaven' },
])
</script>

<style scoped>
/* 新闻 */

.news {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    height: 100%;
}

.news ul {
    margin-top: 30px;
    list-style: none;
    padding-left: 10px;
}

.news li>a {
    font-size: 18px;
    line-height: 40px;
    text-decoration: none;
    color: #64967E;
    text-shadow: 0 0 1px rgb(0, 84, 0);
}

.news-content {
    width: 70%;
    height: 90%;
    border: 1px solid;
    margin-top: 20px;
    border-radius: 10px;
}
</style>