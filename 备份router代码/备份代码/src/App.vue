<template>
  <div class=" app">
    <!-- 一般组件  Header.vue-->
    <Header />
    <!-- 导航区 -->
    <!-- <h2 class="title">Vue路由测试</h2> -->
    <div class="navigate">
      <RouterLink to="/home" active-class="active">首页</RouterLink>
      <RouterLink :to="{name:'xinwen'}" active-class="active">新闻</RouterLink>
      <RouterLink :to="{ path: '/about' }" active-class="active">关于</RouterLink>
    </div>
    <!-- 展示区 -->
    <div class="main-content">
      <!-- 此处以后可能展示各种组件到底展示那个需要看路径 -->
      <RouterView></RouterView>
    </div>
  </div>
</template>


<!-- setup的语法糖 在script里直接写setup就不用在script里写setup代码了 -->
<!-- 需要在Terminal里面安装这个npm i vite-plugin-vue-setup-extend -->
<!-- 然后再vite.config.ts里import npm i vite-plugin-vue-setup-extend -->
<script lang="ts" setup name="App">
import { RouterView, RouterLink } from 'vue-router'
import Header from './components/Header.vue';
</script>

<style>
/* App */
.title {
  text-align: center;
  word-spacing: 5px;
  margin: 30px 0;
  height: 70px;
  line-height: 70px;
  background-image: linear-gradient(45deg, gray, white);
  border-radius: 10px;
  box-shadow: 0 0 2px;
  font-size: 30px;
}

.navigate {
  display: flex;
  justify-content: space-around;
  margin: 0 100px;
}

.navigate a {
  display: block;
  text-align: center;
  width: 90px;
  height: 40px;
  line-height: 40px;
  border-radius: 10px;
  background-color: gray;
  text-decoration: none;
  color: white;
  font-size: 18px;
  letter-spacing: 5px;
}

.navigate a.active {
  background-color: #64767E;
  color: #ffc268;
  font-weight: 900;
  text-shadow: 0 0 1px black;
  font-family: 微软雅黑;
}

.main-content {
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 10px;
  width: 90%;
  height: 400px;
  border: 1px solid;
}
</style>

<!--怎样区分路由组件和一般组件（components）？
1.路由组件：靠路由的规则渲染出来的
routes:[
  {path:'/demo',component:Demo}
]

2.一般组件：亲手写标签出来的如：Demo.vue => <Demo/>

两个注意点：
1.路由组件通常放在pages或views文件夹，一般组件通常放在components文件夹
2.通过点击导航，视觉效果上‘消失’了的路由组件，默认是被销毁的，需要的时候再去挂载
-->

<!-- 接下来学习路由器的工作模式 
1.history模式
写法：
vue2：mode:'history'
vue3: history:createWebHistory()
react: BrowserRouter

优点：URL更加美观不带有#，更接近传统的网站URL
缺点：后期项目上线，需要服务器端配合处理路径问题，否则刷新会有404错误
const router = createRouter({
        history:createWebHistory() //history模式
        /******/
})

2.hash模式 
优点：兼容性更好，因为不需要服务器处理路径
缺点：URL带有#不太美观，且在SEO优化方面相对较差

const router = createRouter({
      history:createWebHashHistory()
})
-->

<!-- to的两种写法
 1.to="/about" //字符串写法
 2.:to="{path:'/about'}"  //对象写法中的path跳转
 3.:to="{name:'xinwen'}"  //对象写法中的名字跳转
  -->

<!-- 命名路由:
 作用：可以简化路由跳转及传参
 给路由规则命名：
 routes:[
     {
            name:'zhuye',
            path:'/home',
            component:Home
          },
          {
            name:'xinwen',
            path:'/news',
            component:News
          },
          {
            name:'guanyu',
            path:'/about',
            component:About
          },
    ]
 ]

 命名以后就可以花式跳转了
 :to="{name:'xinwen'}"
-->

<!-- 嵌套路由的学习
代码请看News.vue和Detail.vue文件

路由的传参（传参数）的学习

query 参数的学习看文件夹Detail.vue和News.vue

params 参数的学习看文件夹Detail.vue和News.vue
-->

<!-- 路由的props学习 
文件夹 News.vue Detail.vue index.ts中 
-->

<!-- 接下来是replace属性的学习 在RouterLink 加入r
<RouterLink replace to="/home" active-class="active">首页</RouterLink>
<RouterLink replace :to="{name:'xinwen'}" active-class="active">新闻</RouterLink>
<RouterLink replace :to="{ path: '/about' }" active-class="active">关于</RouterLink>
-->

<!-- 编程式导航的学习
 
17/12/24 Today I just wanna chill
18/12/24 Today updated CV so yeah pause one day shalom!
-->

<!-- Vue3 中状态管理工具学习 
 Pinia 的学习
 https://pinia.vuejs.org/

 vue2 里面用的是vuex
 vue3 里面用的是pinia

 vuex 和 pinia 都叫做集中式状态(数据)管理
 包括 react 里的 redux
 

-->