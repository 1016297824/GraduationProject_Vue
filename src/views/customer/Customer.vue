// 顾客页面
<template>
  <div>
    <navbar />
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Customer",
  components: {
    navbar: () => import("@/components/CustomerNavbar")
  }
};
</script>
