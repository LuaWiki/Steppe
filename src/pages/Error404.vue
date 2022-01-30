<script setup>
import { NResult, NButton } from 'naive-ui'
</script>
<template>
  <div class="error404">
    <n-result status="404" title="404 资源不存在" description="生活总归带点荒谬">
      <template #footer>
        <n-button>找点乐子吧</n-button>
      </template>
    </n-result>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Error404'
})
</script>

<style scoped>
.error404 {
  padding: 25vh 3vw;
  padding-bottom: 1vh;
}
</style>