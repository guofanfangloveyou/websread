<script setup lang="ts">
import { sidebarstatus } from './store.ts'
</script>

<template>
  <div class="nav">
    <div class="logo">
      <img src="../file/pic/logo.svg" />
    </div>
    <div class="navbtn"></div>
    <!-- 设置按钮，控制侧边栏的显示 -->
    <div class="settings" @click="sidebarstatus.click()">
      <span>⌘R </span>
      <img src="../file/pic/nav_setting.svg" />
    </div>
  </div>
</template>

<style scoped>
.nav {
  display: flex;
  height: 64px;
  align-items: center;
  background-color: white;
  .logo {
    display: flex;
    align-items: center;
    justify-content: left;
    padding-left: 1rem;
  }
  .navbtn {
    display: flex;
    justify-content: center;
    span {
      padding: 0 1rem;
      font-size: 1.142rem;
    }
  }
  .settings {
    display: flex;
    justify-content: right;
    padding-right: 1rem;
    align-items: center;
    span {
      margin-right: 8px;
      height: 100%;
      color: red;
      font-size: 20px;
    }
  }
}
.nav > div {
  width: 100%;
}
</style>
