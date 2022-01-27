<script setup>
import { ref } from 'vue'
import { NSpace, NDropdown, NButton } from 'naive-ui'

//defineProps({
// msg: String
//})

const options = [
  {
    label: '测试11111111111111111111',
    key: 'test1',
    disabled: true
  },
  {
    label: '测试222222222222222222222222',
    key: "test2"
  },
  {
    label: "测试333333333333333333",
    key: 'test3'
  }
];
const showDropdownRef = ref(false)
</script>

<template>
  <div class="nav">
    <div class="nav-left">
      <div class="nav-left-title">维基百科</div>
    </div>
    <div class="nav-right">
      <div class="nav-right-buttons">
        <n-space>
          <n-dropdown @select="handleSelect" trigger="hover" :options="options">
            <n-button quaternary color="#FFF" style="font-size: 28px;" size="large">首页</n-button>
          </n-dropdown>
          <n-dropdown @select="handleSelect" trigger="hover" :options="options">
            <n-button quaternary color="#FFF" style="font-size: 28px;" size="large">认识维基</n-button>
          </n-dropdown>
          <n-dropdown @select="handleSelect" trigger="hover" :options="options">
            <n-button quaternary color="#FFF" style="font-size: 28px;" size="large">维基项目</n-button>
          </n-dropdown>
          <n-dropdown @select="handleSelect" trigger="hover" :options="options">
            <n-button quaternary color="#FFF" style="font-size: 28px;" size="large">常用工具</n-button>
          </n-dropdown>
          <n-dropdown @select="handleSelect" trigger="hover" :options="options">
            <n-button quaternary color="#FFF" style="font-size: 28px;" size="large">帮助</n-button>
          </n-dropdown>
          <n-dropdown @select="handleSelect" trigger="hover" :options="options">
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
  height: 108px;
  line-height: 20px;
  background-color: rgba(86, 133, 170, 0.85);
  text-align: center;
  /*border: 1px solid rgba(187, 187, 187, 100);*/
  position: fixed;
  width: 100%;
}
.nav-left-title {
  line-height: 108px;
  margin-left: 3vw;
  color: rgba(255, 255, 255, 100);
  font-size: 40px;
  text-align: left;
  font-family: SourceHanSerif-regular;
  color: #fff;
}
.nav-right {
  line-height: 108px;
  height: 108px;
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
