// 顾客页面
<template>
  <div>
    <!-- 导航栏 -->
    <navbar />

    <!-- 子路由 -->
    <router-view />

    <!-- 页脚 -->
    <footerNavbar />
  </div>
</template>

<script>
export default {
  name: "Customer",
  components: {
    navbar: () => import("@/components/CustomerNavbar"),
    footerNavbar: () => import("@/components/FooterNavbar")
  }
};
</script>
