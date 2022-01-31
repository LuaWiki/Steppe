<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App'
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: #0645ad;
  background: none;
}
.n-card-header__extra {
  max-width: 45%;
}
html,
body,
#app {
  height: 100%;
}
</style>
