// 顾客导航
<template>
  <div id="navbar fixed-top">
    <nav class="navbar navbar-dark bg-primary ">
      <span class="navbar-brand mb-0 h1">
        <img src="@/assets/imgs/Windows12.jpg" width="30" height="30" alt="" />
        西塘草舍农场
      </span>
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link" href="reserve" style="color:#FFFFFF">
            预定
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="order" style="color:#FFFFFF">
            点餐
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="purchase" style="color:#FFFFFF">
            采购
          </a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            data-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
            style="color:#FFFFFF"
          >
            <span> {{ cname }} </span>
          </a>
          <ul class="dropdown-menu dropdown-menu-right">
            <li>
              <a class="dropdown-item" href="#"> 个人信息 </a>
            </li>
            <li>
              <a class="dropdown-item" href="#"> 修改密码 </a>
            </li>
            <div class="dropdown-divider"></div>
            <li>
              <a class="dropdown-item" href="#" @click="loginOut"> 退出登录 </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "CustomerNavbar",
  data: () => ({
    cname: sessionStorage.getItem("cname")
  }),
  methods: {
    loginOut: function() {
      this.$router.replace("/login");
    }
  }
};
</script>
