<template>
  <div class="">
    <Header />
    <RouterView />
  </div>
</template>
<script setup lang="ts">
import Header from './components/Header.vue';
import { RouterView } from 'vue-router'
import 'element-plus/dist/index.css'
import 'vue3-virtual-scroller/dist/vue3-virtual-scroller.css'

</script>