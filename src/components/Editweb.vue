<!-- 网址新增，编辑弹框 -->
<script setup lang="ts">
import { treepopstatus, weblist, webitem } from './store.ts'

const savewebinfo = () => {
  // 保存数据;数据格式{'id':'','webname':'','website':''}
  const weblistdata = (
    localStorage.getItem('weblist')
      ? JSON.parse(localStorage.getItem('weblist')!)
      : []
  ) as any
  // 判断是否是空数据
  if (webitem.item.webname === '' || webitem.item.website === '') {
    // 关闭编辑弹框
    treepopstatus.click()
    return
  }
  if (treepopstatus.type === 'add') {
    // 将新增的一条放入列表最末端
    weblistdata.push({
      webname: webitem.item.webname,
      website: webitem.item.website,
    })
  } else if (treepopstatus.type === 'edit') {
    // 将编辑后的元素进行d替换
    weblistdata.splice(webitem.index, 1, webitem.item)
  }
  // 存储数据
  localStorage.setItem('weblist', JSON.stringify(weblistdata))
  // 赋予变量
  weblist.read()
  // 关闭编辑弹框
  treepopstatus.click()
}
</script>
<template>
  <div class="popcontain">
    <div class="popbox">
      <div class="web">编辑网站</div>
      <div class="web webname">
        <span>网站名称</span>
        <input v-model="webitem.item.webname" type="text" required />
      </div>
      <div class="web website">
        <span>网站地址</span>
        <input
          v-model="webitem.item.website"
          type="text"
          required
          placeholder="https://"
        />
      </div>
      <div class="web">
        <button @click="savewebinfo()">保存</button>
        <button @click="treepopstatus.click()">取消</button>
      </div>
    </div>
  </div>
</template>
<style>
.popcontain {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: #2925241d;
}
.popbox {
  width: 80%;
  padding: 0 20px;
  font-size: 16px;
  color: #404040;
  border-radius: 12px;
  background-color: white;
  justify-content: center;
  .web {
    width: 100%;
    margin: 12px 0;
    text-align: center;
    justify-content: center;
    button {
      background-color: white;
      border: 1px solid #2925241d;
      border-radius: 3px;
      margin: 0 12px;
      font-size: 16px;
      line-height: 24px;
    }
  }
  input {
    height: 28px;
    width: 60%;
    font-size: 16px;
    color: #404040;
    margin-left: 12px;
    padding-left: 12px;
    border: 0;
    border-radius: 6px;
    background-color: #d4d4d4;
  }
}
</style>
