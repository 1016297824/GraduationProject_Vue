// 用户登录
<template>
  <div>
    <label>账户：</label>
    <input type="text" v-model="user.username" />
    <br />
    <label>密码：</label>
    <input type="password" v-model="user.password" />
    <br />
    <input type="button" value="登录" @click="login" />
  </div>
</template>

<script>
import { login } from "@/api/login.js";

export default {
  name: "Login",
  data: () => ({
    user: {
      username: null,
      password: null
    }
  }),
  methods: {
    login: function() {
      login(this.user);
    }
  }
};
</script>
