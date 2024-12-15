<template>
    <ul class="news-list">
       <!-- query参数  
        <li>编号:{{ route.query.id }}</li>
        <li>标题:{{ route.query.title }}</li>
        <li>内容:{{ route.query.content }}</li> -->

        <!-- params参数 -->
        <!-- <li>编号: {{ route.params.id }}</li>
        <li>标题: {{ route.params.title }}</li>
        <li>内容: {{ route.params.content }}</li> -->

        <!-- 路由props -->
        <li>编号: {{id}}</li>
        <li>标题: {{title}}</li>
        <li>内容: {{content}}</li>
    </ul>
</template>

<script setup lang="ts" name="Detail">
//路由props
defineProps(['id','title','content'])
           
/*query 参数 
import { useRoute} from 'vue-router';
const route = useRoute() */

// params 参数的学习
import { useRoute } from 'vue-router';
const route = useRoute()
</script>

<style scoped>
.news-list {
    list-style: none;
    padding-left: 20px;
}

.news-list>li {
    line-height: 30px;
}
</style>