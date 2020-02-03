// 主页面
<template>
  <div id="app">
    <router-view />
    <alert />
  </div>
</template>

<script>
export default {
  components: { alert: () => import("@/components/AlertDialog") }
};
</script>
