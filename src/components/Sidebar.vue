<script setup lang="ts">
import { sidebarstatus, treepopstatus, weblist, webitem } from './store.ts'
import Editweb from './Editweb.vue'



function delwebitem(index: number) {
  // 删除元素操作(至少保留1个)
  weblist.data.length > 1 ? weblist.data.splice(index, 1) : null
  const weblistdata = weblist.data
  // 存储数据操作
  localStorage.setItem('weblist', JSON.stringify(weblistdata))
  // 赋予变量
  weblist.read()
}
// 获取网站列表
function addwebdata() {
  treepopstatus.type = 'add'
  // 编辑/新增的数据存储在js本地
  treepopstatus.click()
}
function editwebitem(webinfo: any, index: Number) {
  treepopstatus.type = 'edit'
  // 更新弹框数据
  webitem.update(webinfo, index)
  // 弹框显示webitem数据
  treepopstatus.click()
}
</script>

<template>
  <div class="sidebar">
    <div class="shadow" @click="sidebarstatus.click()"></div>
    <div class="settings">
      <!-- 网址新增，编辑弹框 -->
      <Editweb v-if="treepopstatus.show" />
      <!-- 列表页面 -->
      <ul class="list">
        <li>
          <div class="addbtn" @click="addwebdata()">添加</div>
        </li>
        <li v-for="(webinfo, index) in weblist.data">
          <span class="title">{{ webinfo.webname }}</span>
          <span class="edit" @click="editwebitem(webinfo, index)">修改</span>
          <span class="delete" @click="delwebitem(index)">删除</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: right;
  z-index: 1;
  .shadow {
    position: relative;
    width: 80%;
    height: 100%;
    background-color: #292524a2;
  }
  .settings {
    position: relative;
    width: 20%;
    background-color: white;

    .list {
      position: absolute;
      justify-content: left;
      list-style-type: none;
      padding: 0 0;
      margin: 0;
      width: 100%;
      height: 100%;
      font-size: 16px;
      background-color: white;
      .addbtn {
        width: 80%;
        color: #2563eb;
        font-weight: bold;
        text-align: center;
        border: 1px solid #2563eb;
        line-height: 30px;
        border-radius: 6px;
      }
      li {
        width: 100%;
        text-align: left;
        margin: 1rem 1rem;
        span {
          margin-right: 1rem;
        }
        .title {
          display: inline-block;
          width: 60%;
          color: #44403c;
        }
        .edit {
          color: #1d4ed8;
        }
        .delete {
          color: red;
        }
      }
    }
  }
}
</style>
