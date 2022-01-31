<script setup>
import Overview from '../components/Overview.vue';
import Content from '../components/Content.vue';
import Partake from '../components/Partake.vue';
</script>

<template>
  <Overview />
  <Content />
  <Partake />
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex'
})
</script>