<script setup lang="ts">
import Nav from './Nav.vue'
import Webpage from './Webpage.vue'
import Sidebar from './Sidebar.vue'
import { sidebarstatus, weblist } from './store.ts'
let weblistdata = weblist.data
if (weblistdata.length === 0) {
  weblistdata = [
    {
      webname: '微博',
      website:
        'https://weibo.com/newlogin?tabtype=weibo&gid=102803&openLoginLayer=0&url=https%3A%2F%2Fweibo.com%2F',
    },
    { webname: '小红书', website: 'https://www.xiaohongshu.com/explore' },
    { webname: '36kr', website: 'https://36kr.com/' },
  ]

  // 存储数据
  localStorage.setItem('weblist', JSON.stringify(weblistdata))
  // 刷新数据
  weblist.read()
}
</script>
<template>
  <div class="home">
    <!-- 顶部导航栏 -->
    <Nav></Nav>
    <!-- 侧边栏显示区域 -->
    <Sidebar v-if="sidebarstatus.show" />
    <!-- 网页显示区域 -->
    <div class="webs">
      <Webpage
        v-for="(webinfo, index) in weblist.data"
        :url="webinfo.website"
        :hoverindex="index"
        :key="'index'"
      />
    </div>
  </div>
</template>
<style scoped>
.home {
  min-width: 1080px;
  height: 100%;
  background-color: #fafafa;
}
.webs {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: center;
  gap: 40px;
}
</style>
