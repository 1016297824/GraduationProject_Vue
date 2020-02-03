// 顾客页面
<template>
  <div class="container">
    <navbar />
  </div>
</template>

<script>
export default {
  name: "Customer",
  components: {
    navbar: () => import("@/views/customer/components/Navbar")
  }
};
</script>
