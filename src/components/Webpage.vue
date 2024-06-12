<script setup lang="ts">
import { ref } from 'vue'
import { weblist, weburl } from './store.ts'

const webviewRef = ref()

defineProps({
  url: {
    type: String,
    required: true,
  },
  hoverindex: {
    type: Number,
    required: true,
  },
})

const handlemouseenter = (hoverindex: number) => {
  // 更新底部input的url
  weburl.update(webviewRef.value.getURL())
  // 鼠标移入，放大webview
  weblist.updatehoverindex(hoverindex)
}

// webview后退
const goBackWeb = (): void => {
  webviewRef.value.goBack()
}
// webview前进
const goForwardWeb = (): void => {
  webviewRef.value.goForward()
}
// 刷新页面
const updateweb = () => {
  webviewRef.value.reload()
}
// webview加载开始
const webviewStartLoad = (index: Number): void => {
  if (weblist.hoverindex === index) {
    // 当前为展开状态的web，再更新底部input的url
    weburl.update(webviewRef.value.getURL())
  }
}
</script>
<template>
  <div
    :class="[
      hoverindex === weblist.hoverindex
        ? 'hoverwebitemcontain'
        : 'webitemcontain',
    ]"
    @mouseenter="handlemouseenter(hoverindex)"
  >
    <Webview
      class="webitem"
      :src="url"
      allowscripts
      allowpopups
      ref="webviewRef"
      @did-start-loading="webviewStartLoad(hoverindex)"
    ></Webview>
    <div
      class="webbottom"
      v-if="hoverindex === weblist.hoverindex ? true : false"
    >
      <div class="webconsole">
        <span @click="goBackWeb">
          <img src="../file//pic/return.png" />
        </span>
        <span @click="goForwardWeb"> <img src="../file//pic/go.png" /></span>
        <span @click="updateweb"><img src="../file//pic/update.svg" /></span>
      </div>
      <input :value="weburl.url" class="websearch" />
    </div>
  </div>
</template>

<style scoped>
.webitemcontain {
  width: 510px;
  height: 1107px;
  overflow: hidden;
  border: 12px solid transparent;
  border-radius: 70px;
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  background-image: linear-gradient(to right, #fff, #fff),
    linear-gradient(to right, #865dff, #ee4e4e);
}
.hoverwebitemcontain {
  position: relative;
  width: 1020px;
  height: 1131px;
  overflow: hidden;
  border: 12px solid transparent;
  border-radius: 70px;
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  background-image: linear-gradient(to right, #fff, #fff);
}
.webitem {
  width: 100%;
  height: 100%;
}

.webbottom {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  height: 4%;
  background-color: #ffffff;
  opacity: 0.9;
  .webconsole {
    display: flex;
    justify-content: center;
    width: 25%;

    span {
      margin-left: 12px;
    }
    img {
      width: 28px;
      height: 28px;
    }
  }
  .websearch {
    width: 50%;
    height: 70%;
    padding: 0 14px;
    justify-content: center;
    border: 0;
    border-radius: 4px;
    font-size: 1rem;
    color: #404040;
    background-color: #d4d4d4;
  }
}
</style>
