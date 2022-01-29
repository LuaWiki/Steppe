<script setup>
import Header from '../components/Header.vue';
</script>

<template>
  <Header />
  <router-view />
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout'
})
</script>