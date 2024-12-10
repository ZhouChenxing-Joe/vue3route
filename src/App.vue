<template>
  <div class=" app">
    <h2 class="title">Vue路由测试</h2>
    <!-- 导航区 -->
     <div class="navigate">
      <a href="#" class="active">首页</a>
      <a href="#">新闻</a>
      <a href="#">关于</a>
     </div>
     <!-- 展示区 -->
      <div class="main-content">
         此处以后可能展示各种组件到底展示那个需要看路径
      </div>
  </div>
</template>


<!-- setup的语法糖 在script里直接写setup就不用在script里写setup代码了 -->
 <!-- 需要在Terminal里面安装这个npm i vite-plugin-vue-setup-extend -->
  <!-- 然后再vite.config.ts里import npm i vite-plugin-vue-setup-extend -->
<script lang="ts" setup name="App">
</script>

<style>
/* App */
.title{
  text-align: center;
  word-spacing: 5px;
  margin: 30px 0;
  height: 70px;
  line-height: 70px;
  background-image: linear-gradient(45deg,gray,white);
  border-radius: 10px;
  box-shadow: 0 0 2px;
  font-size: 30px;
}
.navigate{
  display: flex;
  justify-content: space-around;
  margin: 0 100px;
}
.navigate a {
  display: block;
  text-align:  center;
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
.navigate a.active{
  background-color: #64767E;
  color: #ffc268;
  font-weight: 900;
  text-shadow: 0 0 1px black;
  font-family: 微软雅黑;
}
.main-content{
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 10px;
  width: 90%;
  height: 400px;
  border: 1px solid;
}

</style>