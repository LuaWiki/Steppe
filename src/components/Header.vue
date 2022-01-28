<script setup>
import { NSpace, NDropdown, NButton } from 'naive-ui'

import options1 from "./view/HeaderOptions1"
import options2 from "./view/HeaderOptions2"
import options3 from "./view/HeaderOptions3"
import options4 from "./view/HeaderOptions4"
import options5 from "./view/HeaderOptions5"

//defineProps({
// msg: String
//})

const showDropdown1 = () => { };
const showDropdown2 = () => { };
const showDropdown3 = () => { };
const showDropdown4 = () => { };
const showDropdown5 = () => { };
</script>

<template>
  <div class="nav">
    <div class="nav-left">
      <div class="nav-left-title">Steppe</div>
    </div>
    <div class="nav-right">
      <div class="nav-right-buttons">
        <n-space>
          <n-dropdown @select="showDropdown1" trigger="hover" :options="options1">
            <n-button quaternary color="#FFF" style="font-size: 28px;" size="large">首页</n-button>
          </n-dropdown>
          <n-dropdown @select="showDropdown2" trigger="hover" :options="options2">
            <n-button quaternary color="#FFF" style="font-size: 28px;" size="large">认识Steppe</n-button>
          </n-dropdown>
          <n-dropdown @select="showDropdown3" trigger="hover" :options="options3">
            <n-button quaternary color="#FFF" style="font-size: 28px;" size="large">常用工具</n-button>
          </n-dropdown>
          <n-dropdown @select="showDropdown4" trigger="hover" :options="options4">
            <n-button quaternary color="#FFF" style="font-size: 28px;" size="large">帮助</n-button>
          </n-dropdown>
          <n-dropdown @select="showDropdown5" trigger="hover" :options="options5">
            <n-button quaternary color="#FFF" style="font-size: 28px;" size="large">中文</n-button>
          </n-dropdown>
          <n-button quaternary color="#FFF" style="font-size: 28px;" size="large">登录</n-button>
        </n-space>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  height: 80px;
  /*line-height: 20px;*/
  background-color: rgba(86, 133, 170, 0.85);
  text-align: center;
  /*border: 1px solid rgba(187, 187, 187, 100);*/
  position: fixed;
  width: 100%;
  z-index: 2;
}
.nav-left-title {
  line-height: 80px;
  margin-left: 3vw;
  color: rgba(255, 255, 255, 100);
  font-size: 40px;
  text-align: left;
  font-family: SourceHanSerif-regular;
  color: #fff;
  margin-top: -4px;
}
.nav-right {
  line-height: 80px;
  height: 80px;
  margin-right: 3vw;
}
.nav-right-buttons {
  color: #fff;
  font-family: SourceHanSansSC-regular;
}
@media screen and (max-width: 1300px) {
  .nav-right-buttons {
    display: none;
  }
}
</style>
