<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
  <div class="body">
    <div class="header">
      <Header />
    </div>
    <div class="main">
      <router-view />
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout'
})
</script>

<style scoped>
.body {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
.main {
  flex: 1;
}
</style>