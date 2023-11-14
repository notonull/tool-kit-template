<template>
  <a-layout :style="{ height: '100vh' }">
    <a-layout-header class="header">
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
        <a-menu-item key="1">
          <RouterLink to="/chartgpt">聊天机器人</RouterLink>
        </a-menu-item>
        <a-menu-item key="2">图像识别</a-menu-item>
        <a-menu-item key="3">nav 3</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content :style="{ padding: '12px' }">
      <div :style="{ backgroundColor: '#fff', height: '100%' }">
        <router-view />
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const selectedKeys = ref<string[]>(['2']);
</script>

<style scoped>
#components-layout-demo-fixed .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}

.site-layout .site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>