<script setup>
// This start
import Header from './components/Header.vue';
import Overview from './components/Overview.vue';
import Content from './components/Content.vue';
import Footer from './components/Footer.vue';
import Partake from './components/Partake.vue';
</script>

<template>
  <Header />
  <Overview />
  <Content />
  <Partake />
  <Footer />
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  /*background-color: rgb(242, 242, 242);*/
}
a {
  text-decoration: none;
  color: #0645ad;
  background: none;
}
.n-card-header__extra {
  max-width: 50%;
}
</style>
